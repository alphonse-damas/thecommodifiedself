"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
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

export function ReaderPreferencesProvider({ children }: { children: ReactNode }) {
  const [fontScale, setFontScale] = useState(1);
  const [readingId, setReadingId] = useState<string | null>(null);
  const [speechSupported, setSpeechSupported] = useState(false);

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
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setReadingId(null);
  }, []);

  const startReading = useCallback(
    (id: string, text: string) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

      const cleanText = text.replace(/\s+/g, " ").trim();
      if (!cleanText) return;

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.onend = () => setReadingId(null);
      utterance.onerror = () => setReadingId(null);

      setReadingId(id);
      window.speechSynthesis.speak(utterance);
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
