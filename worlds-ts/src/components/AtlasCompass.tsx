import Link from "next/link";
import IdeaSigil from "@/components/IdeaSigil";
import { Idea } from "@/lib/ideas";

type AtlasCompassProps = {
  idea: Idea;
  relatedIdeaLinks: Array<{
    idea: Idea;
    note: string;
  }>;
  connectedWorldCount: number;
  marketCount: number;
};

export default function AtlasCompass({
  idea,
  relatedIdeaLinks,
  connectedWorldCount,
  marketCount,
}: AtlasCompassProps) {
  const relatedIdeas = relatedIdeaLinks.map(({ idea: relatedIdea }) => relatedIdea);

  return (
    <section className="rounded-lg border border-[#8f6f2a]/40 bg-[#0b0b0b] px-7 py-7">
      <div className="border-b border-[#8f6f2a]/30 pb-6">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">
          Atlas Note
        </p>
        <h3 className="mt-4 font-serif text-3xl font-light leading-snug">
          How this idea moves through the anthology.
        </h3>
        <p className="mt-4 max-w-5xl text-sm leading-7 text-[#d8ccb2]">
          {idea.thesis}
        </p>
      </div>

      <div className="pt-6">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">
          Atlas Compass
        </p>
        <div className="mt-3 flex flex-col gap-1 text-[9px] uppercase leading-5 tracking-[0.24em] text-[#9f8f70] sm:flex-row sm:gap-6">
          <span>{connectedWorldCount} Connected {connectedWorldCount === 1 ? "World" : "Worlds"}</span>
          <span>{marketCount} {marketCount === 1 ? "Market" : "Markets"} Touched</span>
        </div>

        <div className="mt-5 grid gap-8 xl:grid-cols-[260px_minmax(0,1fr)]">
          <IdeaSigil
            idea={idea}
            relatedIdeas={relatedIdeas}
            connectedWorldCount={connectedWorldCount}
            marketCount={marketCount}
            compact
          />

          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.24em] text-[#9f8f70]">
              {idea.name} points toward:
            </p>

            <div className="mt-5 grid gap-3 lg:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">
              {relatedIdeaLinks.map(({ idea: relatedIdea, note }) => (
                <Link
                  key={relatedIdea.slug}
                  href={`/map/${relatedIdea.slug}`}
                  className="group border border-[#8f6f2a]/50 bg-[#050505] px-4 py-4 transition hover:border-[#d6ad45]/70 hover:bg-[#d6ad45]/5"
                >
                  <p className="font-serif text-2xl leading-tight group-hover:text-[#d6ad45]">
                    {relatedIdea.name}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-[#cdbf9f]">
                    {relatedIdea.question}
                  </p>
                  <p className="mt-3 border-t border-[#8f6f2a]/30 pt-3 text-[11px] leading-5 text-[#9f8f70]">
                    {note}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
