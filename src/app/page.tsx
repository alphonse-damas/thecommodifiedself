"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { featuredWorlds, worlds } from "@/lib/worlds";
import { marketNav } from "@/lib/markets";

export default function Home() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [rotationKey, setRotationKey] = useState(0);

  useEffect(() => {
    if (isPaused || featuredWorlds.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveHeroIndex((currentIndex) =>
        currentIndex === featuredWorlds.length - 1 ? 0 : currentIndex + 1,
      );
    }, 7000);

    return () => window.clearInterval(interval);
  }, [isPaused, rotationKey]);

  const activeHero = featuredWorlds[activeHeroIndex];
  const previewWorlds = worlds.slice(0, 6);
  const visibleHeroStartIndex = Math.floor(activeHeroIndex / 5) * 5;
  const visibleHeroIndexes = featuredWorlds
    .map((_, index) => index)
    .slice(visibleHeroStartIndex, visibleHeroStartIndex + 5);

  const resetRotation = () => setRotationKey((currentKey) => currentKey + 1);

  const goToHero = (index: number) => {
    setActiveHeroIndex(index);
    resetRotation();
  };

  const goToFirstHero = () => {
    setActiveHeroIndex(0);
    resetRotation();
  };

  const goToLastHero = () => {
    setActiveHeroIndex(featuredWorlds.length - 1);
    resetRotation();
  };

  const goToPreviousHero = () => {
    setActiveHeroIndex((currentIndex) =>
      currentIndex === 0 ? featuredWorlds.length - 1 : currentIndex - 1,
    );
    resetRotation();
  };

  const goToNextHero = () => {
    setActiveHeroIndex((currentIndex) =>
      currentIndex === featuredWorlds.length - 1 ? 0 : currentIndex + 1,
    );
    resetRotation();
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#050505] text-[#f4ead7]">
      <header className="border-b border-[#8f6f2a]/30 px-6 py-3">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="block">
            <p className="font-serif text-2xl tracking-[0.18em]">
              THE COMMODIFIED SELF
            </p>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d6ad45]">
              The Anthology
            </p>
          </Link>

          <nav className="hidden gap-8 text-[10px] uppercase tracking-[0.25em] text-[#cdbf9f] lg:flex">
            <a href="#overview">Overview</a>
            <Link href="/thesis">Thesis</Link>
            <Link href="/map">Map</Link>
            <Link href="/worlds">Explore the Worlds</Link>
            <Link href="/markets">Markets</Link>
            <a href="#author">About the Author</a>
          </nav>
        </div>
      </header>

      <section id="overview" className="grid w-full gap-5 px-6 py-5 xl:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="flex h-full flex-col space-y-6">
          <div>
            <p className="font-serif text-2xl uppercase tracking-[0.12em]">Enter</p>
            <h1 className="mt-1 font-serif text-4xl uppercase leading-none">The Anthology</h1>
            <div className="mt-5 h-px w-20 bg-[#d6ad45]" />
            <p className="mt-5 text-sm leading-6 text-[#cdbf9f]">
              Fourteen interconnected novellas.
              <br />
              One publishing universe.
            </p>
          </div>

          <div className="border-t border-[#8f6f2a]/40 pt-5">
            <Link href="/thesis" className="text-xs uppercase tracking-[0.3em] text-[#d6ad45] transition hover:text-[#f4ead7]">Anthology Thesis</Link>
            <p className="mt-4 text-sm leading-6 text-[#d8ccb2]">
              What remains of the self when love, memory, labor, identity, belief, and desire become markets?
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

        <div className="min-w-0">
          <div className="grid overflow-hidden rounded-lg border border-[#8f6f2a]/60 bg-gradient-to-br from-[#111] to-[#050505] shadow-2xl lg:grid-cols-[1.25fr_0.75fr]">
            <div className="relative min-h-[280px] lg:min-h-[360px]">
              <Image
                key={activeHero.hero}
                src={activeHero.hero}
                alt={`${activeHero.title} hero artwork`}
                fill
                priority
                quality={100}
                sizes="100vw"
                className="object-cover object-left"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/5 to-black/70" />
            </div>

            <div className="flex flex-col justify-center px-7 py-7">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">
                Featured World {activeHeroIndex + 1} of {featuredWorlds.length}
              </p>

              <h2 className="mt-3 font-serif text-4xl font-light leading-tight">{activeHero.title}</h2>

              {activeHero.subtitle && (
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[#d6ad45]">{activeHero.subtitle}</p>
              )}

              <div className="mt-5 max-w-3xl space-y-3 text-sm leading-6 text-[#d8ccb2]">
                {activeHero.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="font-serif text-lg italic text-[#f4ead7]">{activeHero.thesis}</p>
              </div>

              <div className="mt-5 flex flex-nowrap gap-2 overflow-hidden">
                {activeHero.tags.map((tag) => (
                  <span key={tag} className="whitespace-nowrap border border-[#8f6f2a] px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-[#d6ad45]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-nowrap items-center gap-2">
                <Link href={`/worlds/${activeHero.slug}`} className="whitespace-nowrap border border-[#d6ad45] bg-[#d6ad45] px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-black">
                  Enter This World
                </Link>

                <button onClick={() => setIsPaused(!isPaused)} className="whitespace-nowrap border border-[#8f6f2a] px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[#d6ad45] transition hover:bg-[#8f6f2a]/20">
                  <span className="hidden 2xl:inline">{isPaused ? "Resume Showcase" : "Pause Showcase"}</span>
                  <span className="2xl:hidden">{isPaused ? "Resume" : "Pause"}</span>
                </button>

                <div className="flex shrink-0 items-center gap-1 text-[10px] uppercase tracking-[0.18em] text-[#d6ad45]">
                  <button onClick={goToFirstHero} aria-label="First featured world" className="px-1 text-[#cdbf9f] transition hover:text-[#d6ad45]">&lt;&lt;</button>
                  <button onClick={goToPreviousHero} aria-label="Previous featured world" className="px-1 text-[#cdbf9f] transition hover:text-[#d6ad45]">&lt;</button>

                  {visibleHeroIndexes.map((index) => {
                    const world = featuredWorlds[index];
                    return (
                      <button key={world.title} onClick={() => goToHero(index)} aria-label={`Show ${world.title}`} className={`px-2 py-1 transition ${index === activeHeroIndex ? "bg-[#d6ad45] text-black" : "text-[#cdbf9f] hover:text-[#d6ad45]"}`}>
                        {index + 1}
                      </button>
                    );
                  })}

                  <button onClick={goToNextHero} aria-label="Next featured world" className="px-1 text-[#cdbf9f] transition hover:text-[#d6ad45]">&gt;</button>
                  <button onClick={goToLastHero} aria-label="Last featured world" className="px-1 text-[#cdbf9f] transition hover:text-[#d6ad45]">&gt;&gt;</button>
                </div>
              </div>
            </div>
          </div>

          <section className="pt-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">Selected Worlds</p>
              <Link href="/worlds" className="text-[10px] uppercase tracking-[0.25em] text-[#cdbf9f] transition hover:text-[#d6ad45]">View Full Catalog</Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
              {previewWorlds.map((world) => (
                <Link key={world.title} href={`/worlds/${world.slug}`} className="group overflow-hidden border border-[#8f6f2a]/60 bg-[#0b0b0b]">
                  {world.cover && (
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <Image src={world.cover} alt={`${world.title} cover`} fill quality={100} sizes="(max-width: 768px) 50vw, 14vw" className="object-cover transition duration-500 group-hover:scale-105" unoptimized />
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
<footer id="author" className="border-t border-[#8f6f2a]/30 px-6 py-7 text-[10px] text-[#9f8f70]">
        <div className="flex w-full justify-between">
          <p>© 2026 The Commodified Self Press</p>
          <p>Alphonse Damas</p>
        </div>
      </footer>
    </main>
  );
}
