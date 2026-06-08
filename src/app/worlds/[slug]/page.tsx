import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorldDetail } from "@/content/worldDetails";
import { getWorldConnections, getWorldEssay, getWorldRelationship } from "@/content/worldEssays";
import { getIdeaByName, type Idea } from "@/lib/ideas";
import { getMarketForWorld } from "@/lib/markets";
import { getRelatedWorlds, getWorldBySlug, worlds } from "@/lib/worlds";

export function generateStaticParams() {
  return worlds.map((world) => ({ slug: world.slug }));
}

export default async function WorldPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const world = getWorldBySlug(slug);

  if (!world) {
    notFound();
  }

  const detail = getWorldDetail(world.slug);
  const worldEssay = getWorldEssay(world.slug);
  const atlasConnections = getWorldConnections(world.slug);
  const relatedWorldsFromAtlas = atlasConnections
    .map((connection) => getWorldBySlug(connection.slug))
    .filter((relatedWorld): relatedWorld is NonNullable<ReturnType<typeof getWorldBySlug>> => Boolean(relatedWorld));
  const relatedWorlds = relatedWorldsFromAtlas.length > 0 ? relatedWorldsFromAtlas.slice(0, 3) : getRelatedWorlds(world.slug, 3);
  const market = getMarketForWorld(world);
  const atlasIdeas = world.ideas
    .map((ideaName) => getIdeaByName(ideaName))
    .filter((idea): idea is Idea => Boolean(idea));

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

      <section className="grid w-full gap-5 px-6 py-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
        <div className="relative min-h-[340px] overflow-hidden rounded-lg border border-[#8f6f2a]/60 bg-[#0b0b0b] lg:min-h-[520px]">
          {world.hero && (
            <Image
              src={world.hero}
              alt={`${world.title} hero artwork`}
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-left"
              unoptimized
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-black/75" />
        </div>

        <article className="flex flex-col justify-center rounded-lg border border-[#8f6f2a]/40 bg-gradient-to-br from-[#111] to-[#050505] px-8 py-8">
          {market ? (
            <Link
              href={`/markets/${market.slug}`}
              className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45] transition hover:text-[#f4ead7]"
            >
              {world.market} Market
            </Link>
          ) : (
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">{world.market} Market</p>
          )}

          <h1 className="mt-3 font-serif text-5xl font-light leading-tight">{world.title}</h1>

          {world.subtitle && (
            <p className="mt-3 text-xs uppercase tracking-[0.28em] text-[#d6ad45]">{world.subtitle}</p>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {world.tags.map((tag) => (
              <span
                key={tag}
                className="border border-[#8f6f2a] px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-[#d6ad45]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-7 space-y-3 text-sm leading-7 text-[#d8ccb2]">
            {world.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 border-t border-[#8f6f2a]/40 pt-6">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">The Question</p>
            <p className="mt-3 font-serif text-2xl italic leading-snug text-[#f4ead7]">{world.thesis}</p>
          </div>
        </article>
      </section>

      <section className="grid w-full gap-5 px-6 pb-5 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <article className="rounded-lg border border-[#8f6f2a]/40 bg-gradient-to-br from-[#111] to-[#050505] px-8 py-7">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">World Synopsis</p>
          <h2 className="mt-3 font-serif text-3xl font-light">The story inside the world.</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[#d8ccb2]">
            {(detail?.synopsis ?? world.description).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-[#8f6f2a]/40 bg-gradient-to-br from-[#111] to-[#050505] px-8 py-7">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Atlas Reflection</p>
          <h2 className="mt-3 font-serif text-3xl font-light">Why this world exists.</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[#d8ccb2]">
            {(detail?.reflection ?? [world.thesis]).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>

      <section className="px-6 pb-5">
        <article className="rounded-lg border border-[#8f6f2a]/40 bg-gradient-to-br from-[#111] to-[#050505] px-8 py-7">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">World Essay</p>
              <h2 className="mt-3 font-serif text-3xl font-light">{worldEssay?.title ?? world.title}</h2>
              <p className="mt-3 max-w-4xl font-serif text-xl italic leading-snug text-[#f4ead7]">
                {worldEssay?.subtitle ?? "The story becomes an argument inside the anthology."}
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-4 border-t border-[#8f6f2a]/40 pt-6 text-sm leading-7 text-[#d8ccb2]">
            {(worldEssay?.paragraphs ?? detail?.reflection ?? [world.thesis]).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>

      <section className="px-6 pb-5">
        <div className="rounded-lg border border-[#8f6f2a]/40 bg-gradient-to-br from-[#111] to-[#050505] px-8 py-7">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">World Compass</p>
              <h2 className="mt-3 font-serif text-3xl font-light">Where this world sits in the anthology.</h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-[#d8ccb2]">
                {worldEssay?.compassNote ?? "This world is one coordinate in the anthology's larger argument."}
              </p>
            </div>
            <div className="text-right text-[10px] uppercase leading-6 tracking-[0.25em] text-[#9f8f70]">
              <p>{atlasIdeas.length || world.ideas.length} Ideas</p>
              <p>{world.market} Market</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-4">
            <Link
              href={market ? `/markets/${market.slug}` : "/markets"}
              className="rounded border border-[#8f6f2a]/40 bg-[#090909] p-5 transition hover:border-[#d6ad45]/70"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#d6ad45]">Primary Market</p>
              <p className="mt-3 font-serif text-3xl">{world.market}</p>
              <p className="mt-3 text-xs leading-5 text-[#cdbf9f]">
                {market?.question ?? "Explore the market this world belongs to."}
              </p>
            </Link>

            <div className="rounded border border-[#8f6f2a]/40 bg-[#090909] p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#d6ad45]">Primary Ideas</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {world.ideas.slice(0, 5).map((ideaName) => {
                  const idea = getIdeaByName(ideaName);
                  const label = (
                    <span className="inline-block border border-[#8f6f2a]/70 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-[#d6ad45]">
                      {ideaName}
                    </span>
                  );

                  return idea ? (
                    <Link key={ideaName} href={`/map/${idea.slug}`} className="transition hover:opacity-80">
                      {label}
                    </Link>
                  ) : (
                    <span key={ideaName}>{label}</span>
                  );
                })}
              </div>
            </div>

            <div className="rounded border border-[#8f6f2a]/40 bg-[#090909] p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#d6ad45]">Pressure Point</p>
              <p className="mt-3 text-sm leading-6 text-[#d8ccb2]">{worldEssay?.pressurePoint ?? world.thesis}</p>
            </div>

            <div className="rounded border border-[#8f6f2a]/40 bg-[#090909] p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#d6ad45]">Threat</p>
              <p className="mt-3 text-sm leading-6 text-[#d8ccb2]">{worldEssay?.threat ?? "The self becomes easier to manage than to understand."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid w-full gap-5 px-6 pb-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <article className="rounded-lg border border-[#8f6f2a]/40 bg-gradient-to-br from-[#111] to-[#050505] px-8 py-7">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Read an Excerpt</p>
          <h2 className="mt-3 font-serif text-3xl font-light">{detail?.excerptLabel ?? "Opening pages coming soon"}</h2>
          <p className="mt-5 text-sm leading-7 text-[#d8ccb2]">
            {detail?.excerptNote ?? "This world will eventually include a first excerpt or opening chapter preview."}
          </p>
          {detail?.excerptText?.length ? (
            <div className="mt-5 space-y-3 border-t border-[#8f6f2a]/30 pt-5 text-sm leading-7 text-[#d8ccb2]">
              {detail.excerptText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}
          <button className="mt-6 cursor-not-allowed border border-[#8f6f2a] px-5 py-2.5 text-[10px] uppercase tracking-[0.22em] text-[#9f8f70]">
            {detail?.excerptStatus === "available" ? "Preview Only" : "Coming Soon"}
          </button>
        </article>

        <article className="rounded-lg border border-[#8f6f2a]/40 bg-gradient-to-br from-[#111] to-[#050505] px-8 py-7">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Author Note</p>
          <h2 className="mt-3 font-serif text-3xl font-light">A note from the anthology.</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[#d8ccb2]">
            {(detail?.authorNote ?? ["This world will continue to expand as the anthology moves from architecture into the stories themselves."]).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>

      <section className="px-6 pb-14">
        <div className="rounded-lg border border-[#8f6f2a]/40 px-8 py-7">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Atlas Connections</p>
            <Link href="/worlds" className="text-[10px] uppercase tracking-[0.25em] text-[#cdbf9f] transition hover:text-[#d6ad45]">
              Back to Catalog
            </Link>
          </div>

          <h2 className="mb-5 font-serif text-3xl font-light">Why these worlds are nearby.</h2>

          <div className="grid gap-4 md:grid-cols-3">
            {relatedWorlds.map((relatedWorld) => {
              const relationship = getWorldRelationship(world.slug, relatedWorld.slug);

              return (
                <Link
                  key={relatedWorld.slug}
                  href={`/worlds/${relatedWorld.slug}`}
                  className="group grid grid-cols-[88px_1fr] gap-4 border border-[#8f6f2a]/40 bg-[#0b0b0b] p-3 transition hover:border-[#d6ad45]/70"
                >
                  {relatedWorld.cover && (
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <Image
                        src={relatedWorld.cover}
                        alt={`${relatedWorld.title} cover`}
                        fill
                        quality={100}
                        sizes="88px"
                        className="object-cover transition duration-500 group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="flex flex-col justify-center">
                    <p className="font-serif text-xl leading-tight">{relatedWorld.title}</p>
                    <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#d6ad45]">{relatedWorld.market}</p>
                    <p className="mt-3 line-clamp-4 text-xs leading-5 text-[#cdbf9f]">
                      {relationship ?? relatedWorld.thesis}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
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
