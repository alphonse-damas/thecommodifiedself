"use client";

import { useId, useState, type CSSProperties, type ReactNode } from "react";
import ReaderToolbar from "@/components/reader/ReaderToolbar";
import { useReaderPreferences } from "@/context/ReaderPreferencesContext";

type ExpandableTextProps = {
  paragraphs: string[];
  initialCount?: number;
  initialCharacters?: number;
  previewStart?: number;
  className?: string;
  paragraphClassName?: string;
  contentClassName?: string;
  expandLabel?: string;
  collapseLabel?: string;
  controlsPosition?: "top" | "bottom";
  controlsClassName?: string;
  expandedContentClassName?: string;
  scrollWhenExpanded?: boolean | "auto";
  expandedMaxHeight?: string;
  scrollParagraphThreshold?: number;
  scrollCharacterThreshold?: number;
  pinnedContent?: ReactNode;
  readerControlsId?: string;
  readAloudText?: string;
  enableReaderControls?: boolean;
};

function trimToCharacterLimit(paragraphs: string[], limit: number) {
  const visible: string[] = [];
  let remaining = limit;

  for (const paragraph of paragraphs) {
    if (remaining <= 0) break;

    if (paragraph.length <= remaining) {
      visible.push(paragraph);
      remaining -= paragraph.length;
      continue;
    }

    const excerpt = paragraph.slice(0, remaining);
    const lastSpace = excerpt.lastIndexOf(" ");
    const cleanExcerpt = excerpt.slice(0, lastSpace > 120 ? lastSpace : remaining).trim();
    visible.push(`${cleanExcerpt}…`);
    break;
  }

  return visible;
}

export default function ExpandableText({
  paragraphs,
  initialCount = 3,
  initialCharacters,
  previewStart = 0,
  className = "",
  paragraphClassName = "",
  contentClassName = "",
  expandLabel = "Continue Reading",
  collapseLabel = "Collapse",
  controlsPosition = "bottom",
  controlsClassName = "",
  expandedContentClassName = "",
  scrollWhenExpanded = false,
  expandedMaxHeight = "70vh",
  scrollParagraphThreshold = 6,
  scrollCharacterThreshold = 1200,
  pinnedContent,
  readerControlsId,
  readAloudText,
  enableReaderControls = false,
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const generatedId = useId();
  const { fontScale } = useReaderPreferences();

  const previewParagraphs = paragraphs.slice(previewStart);
  const visibleParagraphs = isExpanded
    ? paragraphs
    : initialCharacters
      ? trimToCharacterLimit(previewParagraphs, initialCharacters)
      : previewParagraphs.slice(0, initialCount);
  const collapsedParagraphCount = initialCharacters
    ? trimToCharacterLimit(previewParagraphs, initialCharacters).length
    : initialCount;
  const totalCharacters = previewParagraphs.join(" ").length;
  const hasMore = initialCharacters
    ? paragraphs.length > previewParagraphs.length || totalCharacters > initialCharacters
    : paragraphs.length > collapsedParagraphCount || previewStart > 0;

  const expandedCharacterCount = visibleParagraphs.join(" ").length;
  const shouldScrollExpandedContent =
    isExpanded &&
    (scrollWhenExpanded === true ||
      (scrollWhenExpanded === "auto" &&
        (visibleParagraphs.length > scrollParagraphThreshold || expandedCharacterCount > scrollCharacterThreshold)));

  const contentClasses = [
    contentClassName,
    isExpanded && expandedContentClassName ? expandedContentClassName : "",
    shouldScrollExpandedContent ? "custom-scrollbar" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const contentStyle: CSSProperties = {
    fontSize: `${fontScale}em`,
    ...(shouldScrollExpandedContent
      ? {
          maxHeight: expandedMaxHeight,
          overflowY: "auto",
          overscrollBehavior: "contain",
          paddingRight: "1.25rem",
          scrollbarColor: "#8f6f2a #090909",
          scrollbarWidth: "thin",
        }
      : {}),
  };

  const toggleButton = hasMore ? (
    <button
      type="button"
      onClick={() => setIsExpanded((current) => !current)}
      className="border border-[#8f6f2a] px-5 py-2.5 text-[10px] uppercase tracking-[0.22em] text-[#d6ad45] transition hover:border-[#d6ad45] hover:bg-[#d6ad45]/10"
    >
      {isExpanded ? collapseLabel : expandLabel}
    </button>
  ) : null;

  const controls = enableReaderControls ? (
    <ReaderToolbar
      controlsId={readerControlsId ?? generatedId}
      textToRead={readAloudText ?? paragraphs.join("\n\n")}
      toggleButton={toggleButton}
    />
  ) : (
    toggleButton
  );

  return (
    <div className={className}>
      {controlsPosition === "top" && controls ? (
        <div className={controlsClassName || "mb-6"}>{controls}</div>
      ) : null}

      {pinnedContent ? pinnedContent : null}

      <div className={contentClasses} style={contentStyle}>
        <div className="space-y-5">
          {visibleParagraphs.map((paragraph, index) => (
            <p key={`${index}-${paragraph.slice(0, 32)}`} className={paragraphClassName}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {controlsPosition === "bottom" && controls ? (
        <div className={controlsClassName || "mt-6"}>{controls}</div>
      ) : null}
    </div>
  );
}
