import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMarketBySlug, getWorldsByMarket, marketDetails, marketNav } from "@/lib/markets";

export function generateStaticParams() {
  return marketDetails.map((market) => ({ slug: market.slug }));
}

export default async function MarketPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const market = getMarketBySlug(slug);

  if (!market) {
    notFound();
  }

  const marketWorlds = getWorldsByMarket(market.name);

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
            <p className="font-serif text-2xl uppercase tracking-[0.12em]">Market</p>
            <h1 className="mt-1 font-serif text-4xl uppercase leading-none">{market.shortTitle}</h1>
            <div className="mt-5 h-px w-20 bg-[#d6ad45]" />
            <p className="mt-5 text-sm leading-6 text-[#cdbf9f]">{marketWorlds.length} interconnected worlds.</p>
          </div>

          <div className="border-t border-[#8f6f2a]/40 pt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Browse by Market</p>
            <div className="mt-4 space-y-2">
              {marketNav.map((item) => {
                const isActive = item.href === `/markets/${market.slug}`;
                return (
                  <Link key={item.label} href={item.href} className={`flex w-full items-center justify-between border px-3 py-2 text-xs transition ${isActive ? "border-[#d6ad45]/70 bg-[#d6ad45]/10 text-[#d6ad45]" : "border-transparent text-[#d8ccb2] hover:border-[#8f6f2a]/60 hover:text-[#d6ad45]"}`}>
                    <span>{item.label}</span>
                    <span>{item.count}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex-1 border-t border-[#8f6f2a]/40" />
        </aside>

        <section className="min-w-0">
          <div className="rounded-lg border border-[#8f6f2a]/40 px-8 py-7">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">{market.title}</p>
            <h2 className="mt-3 font-serif text-4xl font-light">{market.shortTitle}</h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-[#d8ccb2]">{market.description}</p>
            <div className="mt-7 border-t border-[#8f6f2a]/40 pt-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Market Question</p>
              <p className="mt-3 font-serif text-2xl italic leading-snug text-[#f4ead7]">{market.question}</p>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-[#d8ccb2]">{market.thesis}</p>
            </div>
          </div>

          <div className="grid gap-3 pt-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6">
            {marketWorlds.map((world) => (
              <Link key={world.slug} href={`/worlds/${world.slug}`} className="group overflow-hidden border border-[#8f6f2a]/60 bg-[#0b0b0b]">
                {world.cover && (
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <Image src={world.cover} alt={`${world.title} cover`} fill quality={100} sizes="(max-width: 768px) 50vw, 16vw" className="object-cover transition duration-500 group-hover:scale-105" unoptimized />
                  </div>
                )}
                <div className="border-t border-[#8f6f2a]/40 p-3">
                  <p className="font-serif text-lg leading-tight">{world.title}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[#d6ad45]">{world.market}</p>
                  <p className="mt-3 line-clamp-3 text-xs leading-5 text-[#cdbf9f]">{world.thesis}</p>
                </div>
              </Link>
            ))}
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
