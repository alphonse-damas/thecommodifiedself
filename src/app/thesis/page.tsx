import Link from "next/link";
import { marketDetails } from "@/lib/markets";
import { worlds } from "@/lib/worlds";

const thesisSections = [
  {
    eyebrow: "What Is The Commodified Self?",
    title: "A theory of personhood under market pressure.",
    body:
      "The Commodified Self is a speculative anthology about what happens when the human experience becomes measurable, tradable, governable, rentable, inherited, optimized, or consumed. Each novella isolates one pressure point in the self and asks what remains when that pressure becomes normal.",
  },
  {
    eyebrow: "Why Speculative Fiction?",
    title: "Because an idea becomes clearer when it has consequences.",
    body:
      "The anthology does not treat fiction as escape. It treats fiction as a testing ground. Each world exaggerates a market already present in ordinary life so the reader can see the bargain more clearly: what was gained, what was surrendered, and who profited from the exchange.",
  },
  {
    eyebrow: "How The Worlds Connect",
    title: "The novellas are not sequels. They are mirrors.",
    body:
      "The stories can stand alone, but together they form a map. Bodies, hearts, minds, souls, and systems are not genres; they are domains where the self can be priced, divided, engineered, protected, or erased.",
  },
];

export default function ThesisPage() {
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
            <h1 className="mt-1 font-serif text-4xl uppercase leading-none">The Thesis</h1>
            <div className="mt-5 h-px w-20 bg-[#d6ad45]" />
            <p className="mt-5 text-sm leading-6 text-[#cdbf9f]">
              One theory.
              <br />
              Fourteen worlds.
            </p>
          </div>

          <div className="border-t border-[#8f6f2a]/40 pt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Anthology Map</p>
            <div className="mt-4 space-y-2 text-xs uppercase tracking-[0.18em] text-[#d8ccb2]">
              <p>Thesis</p>
              <p className="text-[#d6ad45]">↓</p>
              <p>Markets</p>
              <p className="text-[#d6ad45]">↓</p>
              <p>Worlds</p>
              <p className="text-[#d6ad45]">↓</p>
              <p>Related Worlds</p>
            </div>
          </div>

          <div className="border-t border-[#8f6f2a]/40 pt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">Explore</p>
            <div className="mt-4 space-y-2">
              <Link href="/markets" className="block text-xs text-[#d8ccb2] transition hover:text-[#d6ad45]">The Five Markets</Link>
              <Link href="/worlds" className="block text-xs text-[#d8ccb2] transition hover:text-[#d6ad45]">All Worlds</Link>
              <Link href="/map" className="block text-xs text-[#d8ccb2] transition hover:text-[#d6ad45]">The Atlas</Link>
            </div>
          </div>

          <div className="flex-1 border-t border-[#8f6f2a]/40" />
        </aside>

        <section className="min-w-0 space-y-5">
          <div className="rounded-lg border border-[#8f6f2a]/40 bg-gradient-to-br from-[#111] to-[#050505] px-8 py-9">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Anthology Thesis</p>
            <h2 className="mt-4 max-w-5xl font-serif text-5xl font-light leading-tight">
              What remains of the self when everything that once made us human becomes a market?
            </h2>
            <p className="mt-6 max-w-4xl text-sm leading-7 text-[#d8ccb2]">
              The Commodified Self is a universe organized around a theory of commodification, and the novellas are evidence explored from different angles.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {thesisSections.map((section) => (
              <article key={section.eyebrow} className="rounded-lg border border-[#8f6f2a]/40 bg-[#0b0b0b] px-7 py-7">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">{section.eyebrow}</p>
                <h3 className="mt-4 font-serif text-2xl font-light leading-snug">{section.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#d8ccb2]">{section.body}</p>
              </article>
            ))}
          </div>

          <div className="rounded-lg border border-[#8f6f2a]/40 px-8 py-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">The Five Markets</p>
                <h3 className="mt-3 font-serif text-4xl font-light">Domains of Commodification</h3>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-[#d8ccb2]">
                  The anthology is organized around five domains where personhood becomes legible to systems of value.
                </p>
              </div>
              <Link href="/markets" className="hidden whitespace-nowrap text-[10px] uppercase tracking-[0.25em] text-[#cdbf9f] transition hover:text-[#d6ad45] md:block">
                Explore Markets →
              </Link>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {marketDetails.map((market) => (
                <Link key={market.slug} href={`/markets/${market.slug}`} className="group border border-[#8f6f2a]/50 bg-[#050505] px-5 py-5 transition hover:border-[#d6ad45]/70">
                  <p className="text-[9px] uppercase tracking-[0.28em] text-[#d6ad45]">{market.title}</p>
                  <h4 className="mt-3 font-serif text-2xl font-light">{market.shortTitle}</h4>
                  <p className="mt-4 text-xs leading-6 text-[#d8ccb2]">{market.description}</p>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-[#cdbf9f] transition group-hover:text-[#d6ad45]">Enter Market →</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#8f6f2a]/40 px-8 py-8">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Explore The Worlds</p>
            <h3 className="mt-3 font-serif text-4xl font-light">{worlds.length} Worlds, One Argument</h3>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-[#d8ccb2]">
              Each novella asks a different question, but the shared concern is the same: what does the self become when the world learns how to price it?
            </p>
            <Link href="/worlds" className="mt-7 inline-block border border-[#d6ad45] bg-[#d6ad45] px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-black">
              View All Worlds
            </Link>
            <Link href="/map" className="ml-3 mt-7 inline-block border border-[#8f6f2a] px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[#d6ad45] transition hover:bg-[#8f6f2a]/20">
              Explore The Atlas
            </Link>
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
