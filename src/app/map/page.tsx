import Image from "next/image";
import Link from "next/link";
import { ideaNav, ideas, getRelatedIdeaLinks, getRelationshipPairs, getWorldsByIdea } from "@/lib/ideas";
import { worlds } from "@/lib/worlds";

export default function MapPage() {
  const relationshipPairs = getRelationshipPairs();

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
          </nav>
        </div>
      </header>

      <section className="grid w-full gap-5 px-6 py-5 xl:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="flex h-full flex-col space-y-6">
          <div>
            <p className="font-serif text-2xl uppercase tracking-[0.12em]">Enter</p>
            <h1 className="mt-1 font-serif text-4xl uppercase leading-none">The Atlas</h1>
            <div className="mt-5 h-px w-20 bg-[#d6ad45]" />
            <p className="mt-5 text-sm leading-6 text-[#cdbf9f]">
              {worlds.length} worlds.
              <br />
              Shared ideas.
            </p>
          </div>

          <div className="border-t border-[#8f6f2a]/40 pt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Browse by Idea</p>
            <div className="mt-4 space-y-2">
              {ideaNav.map((item) => (
                <a key={item.label} href={item.href} className="flex w-full items-center justify-between border border-transparent px-3 py-2 text-xs text-[#d8ccb2] transition hover:border-[#8f6f2a]/60 hover:text-[#d6ad45]">
                  <span>{item.label}</span>
                  <span>{item.count}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-[#8f6f2a]/40 pt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Architecture</p>
            <div className="mt-4 space-y-2 text-xs uppercase tracking-[0.18em] text-[#d8ccb2]">
              <Link href="/thesis" className="block transition hover:text-[#d6ad45]">Thesis</Link>
              <p className="text-[#d6ad45]">↓</p>
              <Link href="/markets" className="block transition hover:text-[#d6ad45]">Markets</Link>
              <p className="text-[#d6ad45]">↓</p>
              <Link href="/worlds" className="block transition hover:text-[#d6ad45]">Worlds</Link>
              <p className="text-[#d6ad45]">↓</p>
              <Link href="/map" className="block text-[#d6ad45]">Ideas</Link>
            </div>
          </div>

          <div className="flex-1 border-t border-[#8f6f2a]/40" />
        </aside>

        <section className="min-w-0 space-y-5">
          <div className="rounded-lg border border-[#8f6f2a]/40 bg-gradient-to-br from-[#111] to-[#050505] px-8 py-9">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Anthology Atlas</p>
            <h2 className="mt-4 max-w-5xl font-serif text-5xl font-light leading-tight">
              Enter the anthology by idea.
            </h2>
            <p className="mt-6 max-w-4xl text-sm leading-7 text-[#d8ccb2]">
              The Atlas connects worlds across markets. A story may belong to one market, but its ideas echo through many others: identity, desire, memory, power, control, truth, meaning, value, and freedom.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <article className="rounded-lg border border-[#8f6f2a]/40 bg-[#0b0b0b] px-7 py-7">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">How To Use This Map</p>
              <h3 className="mt-4 font-serif text-2xl font-light leading-snug">Ideas cut across markets.</h3>
              <p className="mt-4 text-sm leading-7 text-[#d8ccb2]">Markets show where commodification happens. Ideas show how one pressure travels across bodies, hearts, minds, souls, and systems.</p>
            </article>
            <article className="rounded-lg border border-[#8f6f2a]/40 bg-[#0b0b0b] px-7 py-7">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Idea Relationships</p>
              <h3 className="mt-4 font-serif text-2xl font-light leading-snug">The ideas are not isolated.</h3>
              <p className="mt-4 text-sm leading-7 text-[#d8ccb2]">Each idea opens into others. Identity touches desire. Power becomes control. Memory argues with truth.</p>
            </article>
            <article className="rounded-lg border border-[#8f6f2a]/40 bg-[#0b0b0b] px-7 py-7">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Reader Path</p>
              <h3 className="mt-4 font-serif text-2xl font-light leading-snug">Start with the question that finds you.</h3>
              <p className="mt-4 text-sm leading-7 text-[#d8ccb2]">Choose an idea, enter a world, then follow its related worlds to see the anthology argue with itself.</p>
            </article>
          </div>

          <section className="rounded-lg border border-[#8f6f2a]/40 bg-[#0b0b0b] px-8 py-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Relationship Map</p>
                <h3 className="mt-3 font-serif text-4xl font-light">How the ideas pull on each other</h3>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-[#d8ccb2]">These connections give the Atlas a second layer: not only which worlds share an idea, but how one idea turns into another across the anthology.</p>
            </div>

            <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {relationshipPairs.map((relationship) => (
                <div key={`${relationship.from}-${relationship.to}`} className="border border-[#8f6f2a]/40 bg-[#050505] px-5 py-4">
                  <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#d6ad45]">
                    <Link href={`/map/${relationship.fromIdea.slug}`} className="hover:text-[#f4ead7]">{relationship.fromIdea.name}</Link>
                    <span>→</span>
                    <Link href={`/map/${relationship.toIdea.slug}`} className="hover:text-[#f4ead7]">{relationship.toIdea.name}</Link>
                  </div>
                  <p className="mt-3 text-xs leading-6 text-[#d8ccb2]">{relationship.note}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-5">
            {ideas.map((idea) => {
              const ideaWorlds = getWorldsByIdea(idea.name);
              const relatedIdeaLinks = getRelatedIdeaLinks(idea);

              return (
                <section key={idea.slug} id={idea.slug} className="scroll-mt-8 rounded-lg border border-[#8f6f2a]/40 px-8 py-8">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Idea Cluster</p>
                      <Link href={`/map/${idea.slug}`} className="mt-3 block font-serif text-4xl font-light transition hover:text-[#d6ad45]">{idea.name}</Link>
                      <p className="mt-4 max-w-4xl text-sm leading-7 text-[#d8ccb2]">{idea.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {relatedIdeaLinks.map(({ idea: relatedIdea }) => (
                          <Link key={relatedIdea.slug} href={`/map/${relatedIdea.slug}`} className="border border-[#8f6f2a]/60 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-[#d6ad45] transition hover:border-[#d6ad45] hover:text-[#f4ead7]">
                            {relatedIdea.name}
                          </Link>
                        ))}
                      </div>
                      <Link href={`/map/${idea.slug}`} className="mt-5 inline-block text-[10px] uppercase tracking-[0.25em] text-[#d6ad45] hover:text-[#f4ead7]">Enter idea →</Link>
                    </div>
                    <p className="max-w-xl font-serif text-2xl italic leading-snug text-[#f4ead7]">{idea.question}</p>
                  </div>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {ideaWorlds.map((world) => (
                      <Link key={world.slug} href={`/worlds/${world.slug}`} className="group grid grid-cols-[92px_minmax(0,1fr)] gap-4 border border-[#8f6f2a]/50 bg-[#050505] p-3 transition hover:border-[#d6ad45]/70">
                        <div className="relative aspect-[2/3] overflow-hidden bg-[#111]">
                          {world.cover && (
                            <Image src={world.cover} alt={`${world.title} cover`} fill sizes="92px" className="object-cover transition duration-500 group-hover:scale-105" unoptimized />
                          )}
                        </div>
                        <div className="flex min-w-0 flex-col justify-center">
                          <h4 className="font-serif text-xl leading-tight">{world.title}</h4>
                          <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#d6ad45]">{world.market}</p>
                          <p className="mt-3 line-clamp-3 text-xs leading-5 text-[#d8ccb2]">{world.thesis}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
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
