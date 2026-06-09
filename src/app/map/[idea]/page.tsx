import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIdeaEssayBySlug } from "@/content/idea-essays";
import AtlasCompass from "@/components/AtlasCompass";
import {
  getIdeaBySlug,
  getMarketsByIdea,
  getRelatedIdeaLinks,
  getWorldsByIdea,
  ideaNav,
  ideas,
} from "@/lib/ideas";

export function generateStaticParams() {
  return ideas.map((idea) => ({ idea: idea.slug }));
}

type IdeaPageProps = {
  params: Promise<{
    idea: string;
  }>;
};

export default async function IdeaPage({ params }: IdeaPageProps) {
  const { idea: ideaSlug } = await params;
  const idea = getIdeaBySlug(ideaSlug);

  if (!idea) {
    notFound();
  }

  const relatedIdeaLinks = getRelatedIdeaLinks(idea);
  const essay = getIdeaEssayBySlug(idea.slug);
  const relatedMarkets = getMarketsByIdea(idea.name);
  const relatedWorlds = getWorldsByIdea(idea.name);

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
            <p className="font-serif text-2xl uppercase tracking-[0.12em]">Idea</p>
            <h1 className="mt-1 font-serif text-4xl uppercase leading-none">{idea.name}</h1>
            <div className="mt-5 h-px w-20 bg-[#d6ad45]" />
            <p className="mt-5 text-sm leading-6 text-[#cdbf9f]">
              {relatedWorlds.length} connected worlds.
              <br />
              {relatedMarkets.length} markets touched.
            </p>
          </div>

          <div className="border-t border-[#8f6f2a]/40 pt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Browse by Idea</p>
            <div className="mt-4 space-y-2">
              {ideaNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex w-full items-center justify-between border px-3 py-2 text-xs transition ${
                    item.label === idea.name
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
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Architecture</p>
            <div className="mt-4 space-y-2 text-xs uppercase tracking-[0.18em] text-[#d8ccb2]">
              <Link href="/thesis" className="block transition hover:text-[#d6ad45]">Thesis</Link>
              <p className="text-[#d6ad45]">â†“</p>
              <Link href="/map" className="block transition hover:text-[#d6ad45]">Atlas</Link>
              <p className="text-[#d6ad45]">â†“</p>
              <p className="text-[#d6ad45]">Ideas</p>
              <p className="text-[#d6ad45]">â†“</p>
              <Link href="/worlds" className="block transition hover:text-[#d6ad45]">Worlds</Link>
            </div>
          </div>

          <div className="flex-1 border-t border-[#8f6f2a]/40" />
        </aside>

        <section className="min-w-0 space-y-5">
          <div className="rounded-lg border border-[#8f6f2a]/40 bg-gradient-to-br from-[#111] to-[#050505] px-8 py-9">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Idea Cluster</p>
            <h2 className="mt-4 max-w-5xl font-serif text-6xl font-light leading-tight">{idea.name}</h2>
            <p className="mt-6 max-w-5xl font-serif text-3xl italic leading-snug text-[#f4ead7]">
              {idea.question}
            </p>
            <p className="mt-6 max-w-4xl text-sm leading-7 text-[#d8ccb2]">{idea.description}</p>
          </div>

          {essay && (
            <section className="rounded-lg border border-[#8f6f2a]/40 bg-gradient-to-br from-[#111] to-[#050505] px-8 py-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Atlas Essay</p>
                  <h3 className="mt-3 font-serif text-4xl font-light">{essay.title}</h3>
                  <p className="mt-4 max-w-4xl font-serif text-2xl italic leading-snug text-[#f4ead7]">
                    {essay.deck}
                  </p>
                </div>
              </div>

              <details className="group mt-7 border-t border-[#8f6f2a]/30 pt-6" open>
                <summary className="cursor-pointer list-none text-[10px] uppercase tracking-[0.25em] text-[#d6ad45] transition hover:text-[#f4ead7]">
                  <span className="group-open:hidden">Read Essay +</span>
                  <span className="hidden group-open:inline">Hide Essay âˆ’</span>
                </summary>
                <div className="mt-6 max-w-4xl space-y-4 text-sm leading-8 text-[#d8ccb2]">
                  {essay.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </details>
            </section>
          )}

          <AtlasCompass
            idea={idea}
            relatedIdeaLinks={relatedIdeaLinks}
            connectedWorldCount={relatedWorlds.length}
            marketCount={relatedMarkets.length}
          />

          <section className="rounded-lg border border-[#8f6f2a]/40 px-8 py-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Idea Pathways</p>
                <h3 className="mt-3 font-serif text-4xl font-light">Where {idea.name} leads</h3>
              </div>
              <Link href="/map" className="text-[10px] uppercase tracking-[0.25em] text-[#d6ad45] hover:text-[#f4ead7]">
                Back to Atlas â†’
              </Link>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {relatedIdeaLinks.map(({ idea: relatedIdea, note }) => (
                <Link key={relatedIdea.slug} href={`/map/${relatedIdea.slug}`} className="group border border-[#8f6f2a]/40 bg-[#050505] px-5 py-5 transition hover:border-[#d6ad45]/70">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#d6ad45]">{idea.name} â†’ {relatedIdea.name}</p>
                  <h4 className="mt-4 font-serif text-2xl leading-tight group-hover:text-[#d6ad45]">{relatedIdea.question}</h4>
                  <p className="mt-4 text-xs leading-6 text-[#d8ccb2]">{note}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-[#8f6f2a]/40 px-8 py-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Related Markets</p>
                <h3 className="mt-3 font-serif text-4xl font-light">Where {idea.name} appears</h3>
              </div>
              <Link href="/markets" className="text-[10px] uppercase tracking-[0.25em] text-[#d6ad45] hover:text-[#f4ead7]">
                View markets â†’
              </Link>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {relatedMarkets.map((market) => (
                <Link
                  key={market.slug}
                  href={`/markets/${market.slug}`}
                  className="group rounded-lg border border-[#8f6f2a]/40 bg-[#050505] px-6 py-6 transition hover:border-[#d6ad45]/70"
                >
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">{market.title}</p>
                  <h4 className="mt-4 font-serif text-3xl font-light group-hover:text-[#d6ad45]">{market.shortTitle}</h4>
                  <p className="mt-4 text-sm leading-7 text-[#d8ccb2]">{market.question}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-[#8f6f2a]/40 px-8 py-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Related Worlds</p>
                <h3 className="mt-3 font-serif text-4xl font-light">Stories that carry this idea</h3>
              </div>
              <Link href="/worlds" className="text-[10px] uppercase tracking-[0.25em] text-[#d6ad45] hover:text-[#f4ead7]">
                View all worlds â†’
              </Link>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {relatedWorlds.map((world) => (
                <Link key={world.slug} href={`/worlds/${world.slug}`} className="group overflow-hidden border border-[#8f6f2a]/60 bg-[#0b0b0b] transition hover:border-[#d6ad45]/70">
                  <div className="relative aspect-[2/3] overflow-hidden bg-[#111]">
                    {world.cover && (
                      <Image src={world.cover} alt={`${world.title} cover`} fill quality={100} sizes="(max-width: 768px) 50vw, 18vw" className="object-cover transition duration-500 group-hover:scale-105" unoptimized />
                    )}
                  </div>
                  <div className="border-t border-[#8f6f2a]/40 px-4 py-4">
                    <h4 className="font-serif text-2xl leading-tight group-hover:text-[#d6ad45]">{world.title}</h4>
                    <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#d6ad45]">{world.market}</p>
                    <p className="mt-3 line-clamp-3 text-xs leading-5 text-[#d8ccb2]">{world.thesis}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-[#8f6f2a]/40 bg-gradient-to-br from-[#111] to-[#050505] px-8 py-8">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Continue Exploring</p>
            <h3 className="mt-4 font-serif text-4xl font-light">Return to the Atlas or follow the worlds.</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/map" className="border border-[#d6ad45] bg-[#d6ad45] px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-black">
                Back to Atlas
              </Link>
              <Link href="/worlds" className="border border-[#8f6f2a] px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-[#d6ad45] transition hover:bg-[#8f6f2a]/20">
                Explore Worlds
              </Link>
            </div>
          </section>
        </section>
      </section>

      <footer className="border-t border-[#8f6f2a]/30 px-6 py-7 text-[10px] text-[#9f8f70]">
        <div className="flex w-full justify-between">
          <p>Â© 2026 The Commodified Self Press</p>
          <p>Alphonse Damas</p>
        </div>
      </footer>
    </main>
  );
}
