import Image from "next/image";
import Link from "next/link";
import { themes, worlds } from "@/lib/worlds";
import { marketNav } from "@/lib/markets";
import { ideas, getWorldsByIdea } from "@/lib/ideas";
import { getWorldDetail } from "@/content/worldDetails";

const atlasIdeaNames = new Set(ideas.map((idea) => idea.name));

function getAtlasIdeasForWorld(worldIdeas: string[]) {
  const matchedIdeas = worldIdeas.filter((idea) => atlasIdeaNames.has(idea));
  return matchedIdeas.length > 0 ? matchedIdeas.slice(0, 3) : worldIdeas.slice(0, 3);
}

export default function WorldsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#050505] text-[#f4ead7]">
      <header className="border-b border-[#8f6f2a]/30 px-6 py-3">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="block">
            <p className="font-serif text-2xl tracking-[0.18em]">THE COMMODIFIED SELF</p>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d6ad45]">The Anthology</p>
          </Link>

          <nav className="hidden gap-8 text-[10px] uppercase tracking-[0.25em] text-[#cdbf9f] lg:flex">
            <Link href="/">Home</Link>
            <Link href="/thesis">Thesis</Link>
            <Link href="/map">Map</Link>
            <Link href="/worlds">All Worlds</Link>
            <Link href="/markets">Markets</Link>
          </nav>
        </div>
      </header>

      <section className="grid w-full gap-5 px-6 py-5 xl:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="flex h-full flex-col space-y-6">
          <div>
            <p className="font-serif text-2xl uppercase tracking-[0.12em]">Explore</p>
            <h1 className="mt-1 font-serif text-4xl uppercase leading-none">The Worlds</h1>
            <div className="mt-5 h-px w-20 bg-[#d6ad45]" />
            <p className="mt-5 text-sm leading-6 text-[#cdbf9f]">
              Fourteen interconnected novellas.
              <br />
              Infinite reflections.
            </p>
          </div>

          <div className="border-t border-[#8f6f2a]/40 pt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Browse by Market</p>
            <div className="mt-4 space-y-2">
              {marketNav.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex w-full items-center justify-between border px-3 py-2 text-xs transition ${
                    index === 0
                      ? "border-[#d6ad45]/70 bg-[#d6ad45]/10 text-[#d6ad45]"
                      : "border-transparent text-[#d8ccb2] hover:border-[#8f6f2a]/60 hover:text-[#d6ad45]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span>{item.count}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-[#8f6f2a]/40 pt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Browse by Idea</p>
            <div className="mt-4 space-y-2">
              {ideas.map((idea) => (
                <Link
                  key={idea.slug}
                  href={`/map/${idea.slug}`}
                  className="flex w-full items-center justify-between border border-transparent px-3 py-1.5 text-xs text-[#d8ccb2] transition hover:border-[#8f6f2a]/60 hover:text-[#d6ad45]"
                >
                  <span>{idea.name}</span>
                  <span>{getWorldsByIdea(idea.name).length}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-[#8f6f2a]/40 pt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Browse by Theme</p>
            <div className="mt-4 space-y-2">
              {themes.map((theme) => (
                <div key={theme} className="flex items-center gap-2 text-xs text-[#d8ccb2]">
                  <span className="h-2.5 w-2.5 rounded-full border border-[#d6ad45]" />
                  <span>{theme}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 border-t border-[#8f6f2a]/40" />
        </aside>

        <section className="min-w-0">
          <div className="rounded-lg border border-[#8f6f2a]/40 bg-gradient-to-br from-[#111] to-[#050505] px-8 py-7">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Full Catalog</p>
            <h2 className="mt-3 font-serif text-4xl font-light">Fourteen Worlds. One Argument.</h2>
            <div className="mt-4 max-w-5xl space-y-3 text-sm leading-7 text-[#d8ccb2]">
              <p>Each novella explores a different pressure point in human experience.</p>
              <p>
                Together they ask a larger question: what becomes of the self when the world learns how to price it?
              </p>
              <p>Explore by market. Explore by idea. Or enter a world directly.</p>
            </div>
          </div>

          <div className="grid gap-3 pt-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7">
            {worlds.map((world, index) => {
              const detail = getWorldDetail(world.slug);
              const atlasIdeas = getAtlasIdeasForWorld(world.ideas);

              return (
                <Link
                  key={world.title}
                  href={`/worlds/${world.slug}`}
                  className="group flex min-h-full flex-col overflow-hidden border border-[#8f6f2a]/60 bg-[#0b0b0b] transition duration-300 hover:border-[#d6ad45]/80 hover:bg-[#111]"
                >
                  {world.cover ? (
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <Image
                        src={world.cover}
                        alt={`${world.title} cover`}
                        fill
                        quality={100}
                        sizes="(max-width: 768px) 50vw, 14vw"
                        className="object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                        unoptimized
                      />
                      <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black via-black/85 to-transparent px-3 pb-3 pt-12 transition duration-300 group-hover:translate-y-0">
                        <p className="text-[9px] uppercase tracking-[0.24em] text-[#d6ad45]">Enter World</p>
                        <p className="mt-2 text-[10px] leading-5 text-[#f4ead7]">{world.thesis}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex aspect-[2/3] flex-col justify-between bg-gradient-to-br from-[#111] to-[#020202] p-3">
                      <p className="text-[10px] text-[#d6ad45]">{String(index + 1).padStart(2, "0")}</p>
                      <div>
                        <h3 className="font-serif text-xl leading-tight">{world.title}</h3>
                        <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#9f8f70]">A novella</p>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col border-t border-[#8f6f2a]/40 p-3">
                    <p className="font-serif text-lg leading-tight">{world.title}</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[#d6ad45]">{world.market} Market</p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {atlasIdeas.map((idea) => (
                        <span
                          key={idea}
                          className="border border-[#8f6f2a]/70 px-2 py-1 text-[8px] uppercase tracking-[0.18em] text-[#d6ad45]"
                        >
                          {idea}
                        </span>
                      ))}
                    </div>

                    <p className="mt-3 text-[10px] leading-5 text-[#cdbf9f]">
                      {detail?.catalogLine ?? world.thesis}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}
