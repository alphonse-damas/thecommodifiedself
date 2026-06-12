"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

const FONT_SCALE_STORAGE_KEY = "tcs-font-scale";
const MIN_FONT_SCALE = 0.9;
const MAX_FONT_SCALE = 1.3;
const FONT_SCALE_STEP = 0.1;

type ReaderPreferencesContextValue = {
  fontScale: number;
  increaseFontScale: () => void;
  decreaseFontScale: () => void;
  resetFontScale: () => void;
  readingId: string | null;
  isReading: (id: string) => boolean;
  startReading: (id: string, text: string) => void;
  stopReading: () => void;
  speechSupported: boolean;
};

const ReaderPreferencesContext = createContext<ReaderPreferencesContextValue | null>(null);

function clampFontScale(value: number) {
  return Math.min(MAX_FONT_SCALE, Math.max(MIN_FONT_SCALE, Number(value.toFixed(2))));
}

function splitLongUnit(unit: string, maxLength: number) {
  const chunks: string[] = [];
  const sentences = unit.match(/[^.!?]+[.!?]+[\"”']?|[^.!?]+$/g) ?? [unit];
  let current = "";

  for (const sentence of sentences) {
    const cleanSentence = sentence.trim();
    if (!cleanSentence) continue;

    if (cleanSentence.length > maxLength) {
      if (current.trim()) {
        chunks.push(current.trim());
        current = "";
      }

      const words = cleanSentence.split(/\s+/);
      let wordChunk = "";

      for (const word of words) {
        const next = wordChunk ? `${wordChunk} ${word}` : word;
        if (next.length > maxLength && wordChunk.trim()) {
          chunks.push(wordChunk.trim());
          wordChunk = word;
        } else {
          wordChunk = next;
        }
      }

      if (wordChunk.trim()) chunks.push(wordChunk.trim());
      continue;
    }

    const next = current ? `${current} ${cleanSentence}` : cleanSentence;
    if (next.length > maxLength && current.trim()) {
      chunks.push(current.trim());
      current = cleanSentence;
    } else {
      current = next;
    }
  }

  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

function chunkTextForSpeech(text: string, maxLength = 700) {
  const normalizedText = text
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  if (!normalizedText) return [];

  const units = normalizedText.split(/\n{2,}/).map((unit) => unit.trim()).filter(Boolean);
  const chunks: string[] = [];
  let current = "";

  for (const unit of units) {
    if (unit.length > maxLength) {
      if (current.trim()) {
        chunks.push(current.trim());
        current = "";
      }
      chunks.push(...splitLongUnit(unit, maxLength));
      continue;
    }

    const next = current ? `${current}\n\n${unit}` : unit;
    if (next.length > maxLength && current.trim()) {
      chunks.push(current.trim());
      current = unit;
    } else {
      current = next;
    }
  }

  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

export function ReaderPreferencesProvider({ children }: { children: ReactNode }) {
  const [fontScale, setFontScale] = useState(1);
  const [readingId, setReadingId] = useState<string | null>(null);
  const [speechSupported, setSpeechSupported] = useState(false);
  const readingRunRef = useRef(0);

  useEffect(() => {
    setSpeechSupported(typeof window !== "undefined" && "speechSynthesis" in window);

    const storedFontScale = window.localStorage.getItem(FONT_SCALE_STORAGE_KEY);
    if (storedFontScale) {
      const parsedFontScale = Number(storedFontScale);
      if (!Number.isNaN(parsedFontScale)) {
        setFontScale(clampFontScale(parsedFontScale));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(FONT_SCALE_STORAGE_KEY, String(fontScale));
  }, [fontScale]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const increaseFontScale = useCallback(() => {
    setFontScale((current) => clampFontScale(current + FONT_SCALE_STEP));
  }, []);

  const decreaseFontScale = useCallback(() => {
    setFontScale((current) => clampFontScale(current - FONT_SCALE_STEP));
  }, []);

  const resetFontScale = useCallback(() => {
    setFontScale(1);
  }, []);

  const stopReading = useCallback(() => {
    readingRunRef.current += 1;
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setReadingId(null);
  }, []);

  const startReading = useCallback(
    (id: string, text: string) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

      const speechChunks = chunkTextForSpeech(text);
      if (!speechChunks.length) return;

      window.speechSynthesis.cancel();

      const runId = readingRunRef.current + 1;
      readingRunRef.current = runId;
      setReadingId(id);

      let chunkIndex = 0;

      const speakNextChunk = () => {
        if (readingRunRef.current !== runId) return;

        const currentChunk = speechChunks[chunkIndex];
        if (!currentChunk) {
          setReadingId(null);
          return;
        }

        const utterance = new SpeechSynthesisUtterance(currentChunk);
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.onend = () => {
          chunkIndex += 1;
          speakNextChunk();
        };
        utterance.onerror = () => {
          if (readingRunRef.current === runId) {
            setReadingId(null);
          }
        };

        window.speechSynthesis.speak(utterance);
      };

      window.setTimeout(speakNextChunk, 75);
    },
    [],
  );

  const isReading = useCallback((id: string) => readingId === id, [readingId]);

  const value = useMemo(
    () => ({
      fontScale,
      increaseFontScale,
      decreaseFontScale,
      resetFontScale,
      readingId,
      isReading,
      startReading,
      stopReading,
      speechSupported,
    }),
    [fontScale, increaseFontScale, decreaseFontScale, resetFontScale, readingId, isReading, startReading, stopReading, speechSupported],
  );

  return <ReaderPreferencesContext.Provider value={value}>{children}</ReaderPreferencesContext.Provider>;
}

export function useReaderPreferences() {
  const context = useContext(ReaderPreferencesContext);

  if (!context) {
    throw new Error("useReaderPreferences must be used inside ReaderPreferencesProvider");
  }

  return context;
}
