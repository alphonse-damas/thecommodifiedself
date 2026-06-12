"use client";

import { type ReactNode } from "react";
import { useReaderPreferences } from "@/context/ReaderPreferencesContext";

type ReaderToolbarProps = {
  controlsId: string;
  textToRead: string;
  toggleButton?: ReactNode;
  className?: string;
};

const utilityButtonClass =
  "inline-flex h-7 min-w-7 items-center justify-center rounded-sm border border-[#8f6f2a]/45 bg-transparent px-2 text-[#d6ad45]/85 transition hover:border-[#d6ad45] hover:bg-[#d6ad45]/10 hover:text-[#f4d36b] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d6ad45] disabled:cursor-not-allowed disabled:opacity-35";

const fontButtonClass =
  "inline-flex h-7 min-w-7 items-center justify-center rounded-sm border border-[#8f6f2a]/45 bg-transparent px-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#d6ad45]/85 transition hover:border-[#d6ad45] hover:bg-[#d6ad45]/10 hover:text-[#f4d36b] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d6ad45] disabled:cursor-not-allowed disabled:opacity-35";

function VolumeIcon({ active }: { active: boolean }) {
  if (active) {
    return (
      <svg
        aria-hidden="true"
        className="h-3.5 w-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="6" y="6" width="12" height="12" rx="1.5" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M19 5a9 9 0 0 1 0 14" />
    </svg>
  );
}

export default function ReaderToolbar({ controlsId, textToRead, toggleButton, className = "" }: ReaderToolbarProps) {
  const {
    decreaseFontScale,
    fontScale,
    increaseFontScale,
    isReading,
    speechSupported,
    startReading,
    stopReading,
  } = useReaderPreferences();

  const currentlyReading = isReading(controlsId);

  return (
    <div className={["flex w-full flex-wrap items-center gap-3", className].filter(Boolean).join(" ")}>
      {toggleButton ? <div className="shrink-0">{toggleButton}</div> : null}

      <div className="flex shrink-0 items-center gap-1.5 text-[#d6ad45]" aria-label="Reader accessibility controls">
        <button
          type="button"
          onClick={() => (currentlyReading ? stopReading() : startReading(controlsId, textToRead))}
          disabled={!speechSupported || !textToRead.trim()}
          className={utilityButtonClass}
          aria-label={currentlyReading ? "Stop reading this section aloud" : "Read this section aloud"}
          title={speechSupported ? (currentlyReading ? "Stop reading" : "Read aloud") : "Read aloud is not supported by this browser"}
        >
          <VolumeIcon active={currentlyReading} />
          <span className="sr-only">{currentlyReading ? "Stop reading" : "Read aloud"}</span>
        </button>

        <button
          type="button"
          onClick={decreaseFontScale}
          disabled={fontScale <= 0.9}
          className={fontButtonClass}
          aria-label="Decrease text size"
          title="Decrease text size"
        >
          A−
        </button>

        <button
          type="button"
          onClick={increaseFontScale}
          disabled={fontScale >= 1.3}
          className={fontButtonClass}
          aria-label="Increase text size"
          title="Increase text size"
        >
          A+
        </button>
      </div>
    </div>
  );
}
