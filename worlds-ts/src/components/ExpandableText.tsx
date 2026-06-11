"use client";

import { useState } from "react";

type ExpandableTextProps = {
  paragraphs: string[];
  initialCount?: number;
  initialCharacters?: number;
  previewStart?: number;
  className?: string;
  paragraphClassName?: string;
  expandLabel?: string;
  collapseLabel?: string;
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
  expandLabel = "Continue Reading",
  collapseLabel = "Collapse",
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
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

  return (
    <div className={className}>
      <div className="space-y-5">
        {visibleParagraphs.map((paragraph, index) => (
          <p key={`${index}-${paragraph.slice(0, 32)}`} className={paragraphClassName}>
            {paragraph}
          </p>
        ))}
      </div>

      {hasMore && (
        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          className="mt-6 border border-[#8f6f2a] px-5 py-2.5 text-[10px] uppercase tracking-[0.22em] text-[#d6ad45] transition hover:border-[#d6ad45] hover:bg-[#d6ad45]/10"
        >
          {isExpanded ? collapseLabel : expandLabel}
        </button>
      )}
    </div>
  );
}
