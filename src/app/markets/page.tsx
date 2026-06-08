import Link from "next/link";
import { marketDetails, marketNav } from "@/lib/markets";

export default function MarketsPage() {
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
            <h1 className="mt-1 font-serif text-4xl uppercase leading-none">The Markets</h1>
            <div className="mt-5 h-px w-20 bg-[#d6ad45]" />
            <p className="mt-5 text-sm leading-6 text-[#cdbf9f]">
              Five domains of commodification.
              <br />
              One anthology universe.
            </p>
          </div>

          <div className="border-t border-[#8f6f2a]/40 pt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Browse by Market</p>
            <div className="mt-4 space-y-2">
              {marketNav.map((item) => (
                <Link key={item.label} href={item.href} className="flex w-full items-center justify-between border border-transparent px-3 py-2 text-xs text-[#d8ccb2] transition hover:border-[#8f6f2a]/60 hover:text-[#d6ad45]">
                  <span>{item.label}</span>
                  <span>{item.count}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-1 border-t border-[#8f6f2a]/40" />
        </aside>

        <section className="min-w-0">
          <div className="rounded-lg border border-[#8f6f2a]/40 px-8 py-7">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Anthology Architecture</p>
            <h2 className="mt-3 font-serif text-4xl font-light">The Five Markets</h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-[#d8ccb2]">
              The Commodified Self organizes its worlds around five domains where the self becomes measurable, exchangeable, governable, or consumable: bodies, hearts, minds, souls, and systems.
            </p>
          </div>

          <div className="grid gap-4 pt-5 md:grid-cols-2 xl:grid-cols-3">
            {marketDetails.map((market) => (
              <Link key={market.slug} href={`/markets/${market.slug}`} className="group rounded-lg border border-[#8f6f2a]/40 bg-[#0b0b0b] px-7 py-7 transition hover:border-[#d6ad45]/70">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">{market.title}</p>
                <h3 className="mt-4 font-serif text-3xl font-light">{market.shortTitle}</h3>
                <p className="mt-4 text-sm leading-7 text-[#d8ccb2]">{market.description}</p>
                <p className="mt-6 font-serif text-xl italic leading-snug text-[#f4ead7]">{market.question}</p>
                <p className="mt-6 text-[10px] uppercase tracking-[0.25em] text-[#cdbf9f] transition group-hover:text-[#d6ad45]">Explore Market →</p>
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
