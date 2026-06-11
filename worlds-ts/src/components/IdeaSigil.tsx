import Link from "next/link";
import { Idea } from "@/lib/ideas";

type IdeaSigilProps = {
  idea: Idea;
  relatedIdeas: Idea[];
  connectedWorldCount: number;
  marketCount: number;
  compact?: boolean;
};

const nodePositions = [
  { x: 80, y: 30 },
  { x: 138, y: 92 },
  { x: 80, y: 158 },
  { x: 22, y: 92 },
  { x: 138, y: 30 },
  { x: 22, y: 158 },
];

export default function IdeaSigil({
  idea,
  relatedIdeas,
  connectedWorldCount,
  marketCount,
  compact = false,
}: IdeaSigilProps) {
  const orbitIdeas = relatedIdeas.slice(0, nodePositions.length);

  return (
    <div className={compact ? "" : "mt-8 border-t border-[#8f6f2a]/30 pt-6"}>
      {!compact && (
        <div className="flex items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#d6ad45]">
            Idea Sigil
          </p>
          <p className="text-[9px] uppercase tracking-[0.22em] text-[#9f8f70]">
            {connectedWorldCount} worlds · {marketCount} markets
          </p>
        </div>
      )}

      <div className={compact ? "grid gap-5" : "mt-5 grid gap-5 lg:grid-cols-[210px_minmax(0,1fr)]"}>
        <div className="relative mx-auto h-[210px] w-[210px]">
          <svg
            viewBox="0 0 160 190"
            role="img"
            aria-label={`${idea.name} idea sigil`}
            className="h-full w-full"
          >
            <defs>
              <radialGradient id={`sigilGlow-${idea.slug}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#d6ad45" stopOpacity="0.35" />
                <stop offset="70%" stopColor="#8f6f2a" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#050505" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx="80" cy="92" r="70" fill={`url(#sigilGlow-${idea.slug})`} />
            <circle cx="80" cy="92" r="56" fill="none" stroke="#8f6f2a" strokeOpacity="0.45" strokeWidth="0.8" />
            <circle cx="80" cy="92" r="36" fill="none" stroke="#8f6f2a" strokeOpacity="0.35" strokeWidth="0.8" strokeDasharray="3 5" />

            {orbitIdeas.map((relatedIdea, index) => {
              const position = nodePositions[index];

              return (
                <g key={relatedIdea.slug}>
                  <line
                    x1="80"
                    y1="92"
                    x2={position.x}
                    y2={position.y}
                    stroke="#d6ad45"
                    strokeOpacity="0.45"
                    strokeWidth="0.9"
                  />
                  <circle cx={position.x} cy={position.y} r="5" fill="#050505" stroke="#d6ad45" strokeWidth="1.3" />
                  <circle cx={position.x} cy={position.y} r="1.8" fill="#d6ad45" />
                </g>
              );
            })}

            <circle cx="80" cy="92" r="14" fill="#050505" stroke="#d6ad45" strokeWidth="1.6" />
            <circle cx="80" cy="92" r="5" fill="#d6ad45" />
            <text
              x="80"
              y="185"
              textAnchor="middle"
              fill="#d6ad45"
              fontSize="7"
              letterSpacing="2"
            >
              {idea.name.toUpperCase()}
            </text>
          </svg>
        </div>

        <div className={compact ? "hidden" : "flex flex-col justify-center space-y-3"}>
          <p className="text-xs uppercase tracking-[0.22em] text-[#9f8f70]">
            {idea.name} connects outward through:
          </p>

          <div className="flex flex-wrap gap-2">
            {orbitIdeas.map((relatedIdea) => (
              <Link
                key={relatedIdea.slug}
                href={`/map/${relatedIdea.slug}`}
                className="border border-[#8f6f2a]/60 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[#d6ad45] transition hover:border-[#d6ad45] hover:bg-[#d6ad45]/10"
              >
                {relatedIdea.name}
              </Link>
            ))}
          </div>

          <p className="max-w-xl text-xs leading-6 text-[#cdbf9f]">
            Each line marks an idea pathway. The center is the current cluster; the orbiting nodes are the ideas it pressures, reflects, or destabilizes.
          </p>
        </div>
      </div>
    </div>
  );
}
