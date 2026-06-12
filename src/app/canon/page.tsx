import Link from "next/link";
import {
  anthologyTimeline,
  connectionGraph,
  contradictionMap,
  getCanonWorlds,
  ideaIndex,
  marketIndex,
  readingOrderGraph,
  validateWorldCanonRegistry,
} from "@/content/canon/worldCanonRegistry";

const registryErrors = validateWorldCanonRegistry();
const canonWorlds = getCanonWorlds();
const markets = Object.values(marketIndex);
const ideas = Object.values(ideaIndex);
const readingPaths = Object.values(readingOrderGraph);

function formatKey(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function CanonPage() {
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
            <Link href="/worlds">Worlds</Link>
            <Link href="/markets">Markets</Link>
            <Link href="/canon" className="text-[#d6ad45]">Canon</Link>
          </nav>
        </div>
      </header>

      <section className="grid w-full gap-5 px-6 py-5 xl:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="flex h-full flex-col space-y-6">
          <div>
            <p className="font-serif text-2xl uppercase tracking-[0.12em]">Inspect</p>
            <h1 className="mt-1 font-serif text-4xl uppercase leading-none">The Canon</h1>
            <div className="mt-5 h-px w-20 bg-[#d6ad45]" />
            <p className="mt-5 text-sm leading-6 text-[#cdbf9f]">
              Phase 8A registry.
              <br />
              One canonical source of truth.
            </p>
          </div>

          <div className="border-t border-[#8f6f2a]/40 pt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Registry Status</p>
            <div className="mt-4 rounded-lg border border-[#8f6f2a]/40 bg-[#0b0b0b] p-4">
              <p className={`text-sm ${registryErrors.length === 0 ? "text-emerald-300" : "text-red-300"}`}>
                {registryErrors.length === 0 ? "Valid" : "Needs attention"}
              </p>
              <p className="mt-2 text-xs leading-5 text-[#cdbf9f]">
                {registryErrors.length === 0
                  ? "No canon registry errors were found."
                  : `${registryErrors.length} registry issue(s) found.`}
              </p>
            </div>
          </div>

          <div className="border-t border-[#8f6f2a]/40 pt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Canon Counts</p>
            <div className="mt-4 space-y-2 text-xs text-[#d8ccb2]">
              <div className="flex justify-between border-b border-[#8f6f2a]/25 pb-2"><span>Worlds</span><span>{canonWorlds.length}</span></div>
              <div className="flex justify-between border-b border-[#8f6f2a]/25 pb-2"><span>Markets</span><span>{markets.length}</span></div>
              <div className="flex justify-between border-b border-[#8f6f2a]/25 pb-2"><span>Ideas</span><span>{ideas.length}</span></div>
              <div className="flex justify-between border-b border-[#8f6f2a]/25 pb-2"><span>Connections</span><span>{connectionGraph.length}</span></div>
              <div className="flex justify-between border-b border-[#8f6f2a]/25 pb-2"><span>Contradictions</span><span>{contradictionMap.length}</span></div>
              <div className="flex justify-between"><span>Timeline Events</span><span>{anthologyTimeline.length}</span></div>
            </div>
          </div>

          <div className="flex-1 border-t border-[#8f6f2a]/40" />
        </aside>

        <section className="min-w-0 space-y-5">
          <div className="rounded-lg border border-[#8f6f2a]/40 bg-gradient-to-br from-[#111] to-[#050505] px-8 py-7">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Phase 8A</p>
            <h2 className="mt-3 font-serif text-4xl font-light">World Canon Registry</h2>
            <p className="mt-4 max-w-5xl text-sm leading-7 text-[#d8ccb2]">
              This inspection page reads directly from <span className="font-mono text-[#d6ad45]">src/content/canon/worldCanonRegistry.ts</span>.
              It confirms the anthology&apos;s world index, market index, idea index, connection graph,
              contradiction map, reading paths, and timeline before those relationships are wired into the live navigation layer.
            </p>
          </div>

          {registryErrors.length > 0 ? (
            <section className="rounded-lg border border-red-400/50 bg-red-950/20 px-6 py-5">
              <p className="text-xs uppercase tracking-[0.3em] text-red-300">Validation Errors</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-red-100">
                {registryErrors.map((error) => (
                  <li key={error}>• {error}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="rounded-lg border border-[#8f6f2a]/40 bg-[#0b0b0b] px-6 py-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">World Index</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {canonWorlds.map((world) => (
                <Link key={world.slug} href={`/worlds/${world.slug}`} className="group rounded-lg border border-[#8f6f2a]/40 p-4 transition hover:border-[#d6ad45]/70">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#d6ad45]">
                    {String(world.anthologyPosition).padStart(2, "0")} · {world.market}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-light group-hover:text-[#d6ad45]">{world.title}</h3>
                  <p className="mt-1 text-xs italic text-[#cdbf9f]">{world.subtitle}</p>
                  <p className="mt-4 text-xs leading-6 text-[#d8ccb2]">{world.canonRole}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {[...world.primaryIdeas, ...world.secondaryIdeas].map((idea) => (
                      <span key={idea} className="border border-[#8f6f2a]/60 px-2 py-1 text-[8px] uppercase tracking-[0.18em] text-[#d6ad45]">
                        {idea}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="grid gap-5 xl:grid-cols-2">
            <div className="rounded-lg border border-[#8f6f2a]/40 bg-[#0b0b0b] px-6 py-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Market Index</p>
              <div className="mt-5 space-y-4">
                {markets.map((market) => (
                  <Link key={market.key} href={`/markets/${market.key}`} className="block rounded-lg border border-[#8f6f2a]/35 p-4 transition hover:border-[#d6ad45]/70">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-serif text-2xl font-light">{market.label}</h3>
                      <span className="text-xs text-[#d6ad45]">{market.worldSlugs.length} worlds</span>
                    </div>
                    <p className="mt-3 text-xs leading-6 text-[#cdbf9f]">{market.thesis}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-[#8f6f2a]/40 bg-[#0b0b0b] px-6 py-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Idea Index</p>
              <div className="mt-5 space-y-4">
                {ideas.map((idea) => (
                  <Link key={idea.key} href={`/map/${idea.key}`} className="block rounded-lg border border-[#8f6f2a]/35 p-4 transition hover:border-[#d6ad45]/70">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-serif text-2xl font-light">{idea.label}</h3>
                      <span className="text-xs text-[#d6ad45]">{idea.worldSlugs.length} worlds</span>
                    </div>
                    <p className="mt-3 text-xs leading-6 text-[#cdbf9f]">{idea.thesis}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-[#8f6f2a]/40 bg-[#0b0b0b] px-6 py-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Reading Order Graph</p>
            <div className="mt-5 grid gap-4 xl:grid-cols-2">
              {readingPaths.map((path) => (
                <div key={path.key} className="rounded-lg border border-[#8f6f2a]/35 p-4">
                  <h3 className="font-serif text-2xl font-light">{path.label}</h3>
                  <p className="mt-3 text-xs leading-6 text-[#cdbf9f]">{path.description}</p>
                  <ol className="mt-4 space-y-2 text-xs text-[#d8ccb2]">
                    {path.nodes.map((node) => (
                      <li key={`${path.key}-${node.slug}`} className="grid gap-2 border-t border-[#8f6f2a]/25 pt-2 sm:grid-cols-[2rem_minmax(0,1fr)]">
                        <span className="text-[#d6ad45]">{node.order}</span>
                        <span>
                          <Link href={`/worlds/${node.slug}`} className="text-[#f4ead7] hover:text-[#d6ad45]">{formatKey(node.slug)}</Link>
                          <span className="block pt-1 leading-5 text-[#9f8f70]">{node.reason}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-5 xl:grid-cols-2">
            <div className="rounded-lg border border-[#8f6f2a]/40 bg-[#0b0b0b] px-6 py-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Connection Graph</p>
              <div className="mt-5 space-y-3">
                {connectionGraph.map((connection) => (
                  <div key={connection.id} className="rounded-lg border border-[#8f6f2a]/35 p-4">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#d6ad45]">
                      {connection.type} · Strength {connection.strength}
                    </p>
                    <h3 className="mt-2 font-serif text-xl font-light">{connection.label}</h3>
                    <p className="mt-2 text-xs text-[#cdbf9f]">
                      {formatKey(connection.from)} → {formatKey(connection.to)}
                    </p>
                    <p className="mt-3 text-xs leading-6 text-[#9f8f70]">{connection.rationale}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-[#8f6f2a]/40 bg-[#0b0b0b] px-6 py-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Contradiction Map</p>
              <div className="mt-5 space-y-3">
                {contradictionMap.map((item) => (
                  <div key={item.id} className="rounded-lg border border-[#8f6f2a]/35 p-4">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#d6ad45]">{item.type}</p>
                    <h3 className="mt-2 font-serif text-xl font-light">{item.thesis}</h3>
                    <p className="mt-3 text-xs leading-6 text-[#cdbf9f]">{item.contradiction}</p>
                    <p className="mt-3 font-serif text-lg italic leading-7 text-[#f4ead7]">{item.readerQuestion}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-[#8f6f2a]/40 bg-[#0b0b0b] px-6 py-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Anthology Timeline</p>
            <div className="mt-5 space-y-4">
              {anthologyTimeline.map((event) => (
                <div key={event.id} className="grid gap-4 rounded-lg border border-[#8f6f2a]/35 p-4 md:grid-cols-[8rem_minmax(0,1fr)]">
                  <div>
                    <p className="text-3xl font-serif text-[#d6ad45]">{String(event.order).padStart(2, "0")}</p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#9f8f70]">{event.era}</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-light">{event.title}</h3>
                    <p className="mt-3 text-xs leading-6 text-[#cdbf9f]">{event.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {event.worldSlugs.map((slug) => (
                        <Link key={`${event.id}-${slug}`} href={`/worlds/${slug}`} className="border border-[#8f6f2a]/60 px-2 py-1 text-[8px] uppercase tracking-[0.18em] text-[#d6ad45] hover:border-[#d6ad45]">
                          {formatKey(slug)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </section>

      <footer className="border-t border-[#8f6f2a]/30 px-6 py-7 text-[10px] text-[#9f8f70]">
        <div className="flex w-full justify-between">
          <p>© 2026 The Commodified Self Press</p>
          <p>Alphonse Damas</p>
        </div>
      </footer>
    </main>
  );
}
