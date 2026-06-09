// src/app/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Novella = {
  title: string;
  subtitle?: string;
  cover: string | null;
  hero: string | null;
  featured: boolean;
  description?: string[];
  thesis?: string;
  tags?: string[];
};

const novellas: Novella[] = [
  {
    title: "The Other Half",
    subtitle: "A Novella of Dual Mating and Choice",
    cover: "/covers/the-other-half.png",
    hero: "/heroes/the-other-half-hero.png",
    featured: true,
    description: [
      "In a society shaped by divided desire, love and reproduction no longer belong to the same choice.",
      "Selene must decide what truth costs when biology, stability, and longing pull in different directions.",
      "What began as a private arrangement becomes a question the whole world must answer:",
    ],
    thesis:
      "What happens when love, parenting, and desire are separated into different economies?",
    tags: ["Love", "Choice", "Parenting", "Truth"],
  },
  {
    title: "The Number",
    subtitle: "Every Body Keeps Count",
    cover: "/covers/the-number.png",
    hero: "/heroes/the-number-hero.png",
    featured: true,
    description: [
      "Everyone carries a number.",
      "Some wear it as proof. Others hide it as shame.",
      "But when intimacy becomes a public ledger, no one is untouched by the count:",
    ],
    thesis:
      "What does a number reveal about us — and what does it erase?",
    tags: ["Desire", "Judgment", "Gender", "Value"],
  },
  {
    title: "The Chrysalis",
    subtitle: "Evolution Had Terms and Conditions",
    cover: "/covers/the-chrysalis.png",
    hero: "/heroes/the-chrysalis-hero.png",
    featured: true,
    description: [
      "Every age has its miracles. Ours were simply more efficient.",
      "Humanity turned evolution into a subscription—renewable, customizable, and conveniently financed.",
      "What began as a promise to transcend decay became a question no civilization had ever faced:",
    ],
    thesis:
      "What happens when the desire to become more costs us the very thing that made us human?",
    tags: ["Evolution", "Identity", "Transcendence", "Assimilation"],
  },
  {
    title: "When Gods Stay Quiet",
    subtitle: "Silence Is Never Neutral",
    cover: "/covers/when-gods-stay-quiet.png",
    hero: "/heroes/when-gods-stay-quiet-hero.png",
    featured: true,
    description: [
      "He could stop hurricanes. Catch bullets. Reverse disasters.",
      "But when a child needed him most, he did nothing.",
      "Stripped of his divinity and condemned to live as one of the people his silence failed, Halion must confront a question few heroes ever face:",
    ],
    thesis:
      "What if the greatest sin was not what you did — but what you refused to do?",
    tags: ["Silence", "Power", "Witness", "Accountability"],
  },
  {
    title: "The Vanishing Variable",
    subtitle: "When Absence Becomes Evidence",
    cover: "/covers/the-vanishing-variable.png",
    hero: "/heroes/the-vanishing-variable-hero.png",
    featured: true,
    description: [
      "A population begins disappearing from the systems that once measured them.",
      "At first, the world calls it error. Then anomaly. Then crisis.",
      "But disappearance may not be the end of the story:",
    ],
    thesis:
      "What happens when the people a system depends on can no longer be found?",
    tags: ["Race", "Absence", "Memory", "Extinction"],
  },
  {
    title: "Blackmail, Black Male",
    subtitle: "The Cost of Being Safe",
    cover: "/covers/blackmail-black-male.png",
    hero: "/heroes/blackmail-black-male-hero.png",
    featured: true,
    description: [
      "Safety is never free when fear becomes a market.",
      "A Black man discovers survival has a price.",
      "The question is no longer whether he is guilty:",
    ],
    thesis:
      "What does protection mean when the threat is built into the world around you?",
    tags: ["Race", "Fear", "Control", "Survival"],
  },
  {
    title: "Who Cleans Galt's Toilets?",
    subtitle: "What Happens After the Revolution Wins",
    cover: "/covers/Who-Cleans-Galts-Toilets.png",
    hero: "/heroes/Who-Cleans-Galts-Toilets-hero.png",
    featured: true,
    description: [
      "The revolution succeeded.",
      "The architects escaped.",
      "But paradise still needed someone to clean up after it.",
    ],
    thesis:
      "Who serves the dream after the dreamers declare themselves free?",
    tags: ["Class", "Labor", "Power", "Collapse"],
  },
  {
    title: "Proxy",
    subtitle: "Borrowed Desire, Borrowed Memory",
    cover: "/covers/proxy.png",
    hero: "/heroes/proxy-hero.png",
    featured: true,
    description: [
      "Desire became a subscription.",
      "Men who could not live the fantasy could now rent the memory of someone who could.",
      "But borrowed pleasure leaves behind a question no platform can answer:",
    ],
    thesis:
      "What happens when a life you never lived begins to feel more real than your own?",
    tags: ["Desire", "Technology", "Identity", "Memory"],
  },
  {
    title: "The Last Frequency",
    subtitle: "The Signal Beneath the Noise",
    cover: "/covers/the-last-frequency.png",
    hero: "/heroes/the-last-frequency-hero.png",
    featured: true,
    description: [
      "A signal appears where none should exist.",
      "Some hear salvation. Others hear a warning.",
      "As the frequency spreads, humanity must decide what it is really listening to:",
    ],
    thesis:
      "What truths become audible when the noise finally disappears?",
    tags: ["Signal", "Truth", "Consciousness", "Meaning"],
  },
  {
    title: "The Robbery",
    subtitle: "What Remains After Value Is Taken",
    cover: "/covers/the-robbery.png",
    hero: "/heroes/the-robbery-hero.png",
    featured: true,
    description: [
      "A theft occurs in a world where ownership is already uncertain.",
      "What was taken is less important than what the act reveals.",
      "As the loss spreads, everyone is forced to ask what they were protecting:",
    ],
    thesis:
      "What does a society lose when everything has already been priced?",
    tags: ["Value", "Theft", "Power", "Loss"],
  },
  {
    title: "The Long Goodbye",
    subtitle: "Losing Someone Twice",
    cover: "/covers/the-long-goodbye.png",
    hero: "/heroes/the-long-goodbye-hero.png",
    featured: true,
    description: [
      "A love story stretched across memory and loss.",
      "He mourned her long before she died.",
      "When the end finally arrives, grief has already changed shape.",
    ],
    thesis:
      "How do you say goodbye to someone who has been leaving for years?",
    tags: ["Memory", "Love", "Loss", "Grief"],
  },
  {
    title: "The Mirror Doesn’t Work",
    subtitle: "The Gaze We Inherited",
    cover: "/covers/the-mirror-doesnt-work.png",
    hero: "/heroes/the-mirror-doesnt-work-hero.png",
    featured: true,
    description: [
      "The mirror shattered long ago, but its gaze remains.",
      "A people escape the system that defined them only to recreate it themselves.",
      "Freedom proves harder than rebellion.",
    ],
    thesis:
      "What if the prison survives because we carry it with us?",
    tags: ["Identity", "Race", "Power", "Inheritance"],
  },
  {
    title: "In the Public Interest",
    subtitle: "Consent Was Never the Same as Choice",
    cover: "/covers/in-the-public-interest.png",
    hero: "/heroes/in-the-public-interest-hero.png",
    featured: true,
    description: [
      "The state discovered a new language for control.",
      "Everything could be justified if it served the public good.",
      "But the people asked to sacrifice were rarely the ones who benefited:",
    ],
    thesis:
      "What happens when the public interest becomes a market for private power?",
    tags: ["Power", "Consent", "Governance", "Control"],
  },
  {
    title: "The Second Burning",
    subtitle: "When the Fire Learned to Hide",
    cover: "/covers/the-second-burning.png",
    hero: "/heroes/the-second-burning-hero.png",
    featured: true,
    description: [
      "The books were saved.",
      "The firemen were defeated.",
      "But civilization learned that censorship no longer needed flames:",
    ],
    thesis:
      "What happens after knowledge survives, but meaning is quietly rewritten?",
    tags: ["Memory", "Censorship", "Knowledge", "Power"],
  },
];

const featuredNovellas = novellas.filter(
  (novella): novella is Novella & { hero: string } =>
    novella.featured && Boolean(novella.hero),
);

const markets = [
  ["All Worlds", "20"],
  ["Bodies", "5"],
  ["Hearts", "5"],
  ["Minds", "5"],
  ["Souls", "5"],
];

const themes = [
  "Identity & Selfhood",
  "Love & Relationships",
  "Race & Society",
  "Memory & Trauma",
  "Technology & Control",
  "Morality & Meaning",
];

export default function Home() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [rotationKey, setRotationKey] = useState(0);

  useEffect(() => {
    if (isPaused || featuredNovellas.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveHeroIndex((currentIndex) =>
        currentIndex === featuredNovellas.length - 1 ? 0 : currentIndex + 1,
      );
    }, 20000);

    return () => window.clearInterval(interval);
  }, [isPaused, rotationKey]);

  const activeHero = featuredNovellas[activeHeroIndex];
  const visibleHeroStartIndex = Math.floor(activeHeroIndex / 5) * 5;
  const visibleHeroIndexes = featuredNovellas
    .map((_, index) => index)
    .slice(visibleHeroStartIndex, visibleHeroStartIndex + 5);

  const goToHero = (index: number) => {
    setActiveHeroIndex(index);
    setRotationKey((currentKey) => currentKey + 1);
  };

  const goToFirstHero = () => {
    setActiveHeroIndex(0);
    setRotationKey((currentKey) => currentKey + 1);
  };

  const goToLastHero = () => {
    setActiveHeroIndex(featuredNovellas.length - 1);
    setRotationKey((currentKey) => currentKey + 1);
  };

  const goToPreviousHero = () => {
    setActiveHeroIndex((currentIndex) =>
      currentIndex === 0 ? featuredNovellas.length - 1 : currentIndex - 1,
    );
    setRotationKey((currentKey) => currentKey + 1);
  };

  const goToNextHero = () => {
    setActiveHeroIndex((currentIndex) =>
      currentIndex === featuredNovellas.length - 1 ? 0 : currentIndex + 1,
    );
    setRotationKey((currentKey) => currentKey + 1);
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#050505] text-[#f4ead7]">
      <header className="border-b border-[#8f6f2a]/30 px-6 py-3">
        <div className="flex w-full items-center justify-between">
          <div>
            <p className="font-serif text-2xl tracking-[0.18em]">
              THE COMMODIFIED SELF
            </p>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d6ad45]">
              The Anthology
            </p>
          </div>

          <nav className="hidden gap-8 text-[10px] uppercase tracking-[0.25em] text-[#cdbf9f] lg:flex">
            <a href="#overview">Overview</a>
            <a href="#worlds">Explore the Worlds</a>
            <a href="#themes">Themes</a>
            <a href="#author">About the Author</a>
          </nav>
        </div>
      </header>

      <section
        id="overview"
        className="grid w-full gap-5 px-6 py-5 xl:grid-cols-[240px_minmax(0,1fr)]"
      >
        <aside className="flex h-full flex-col space-y-6">
          <div>
            <p className="font-serif text-2xl uppercase tracking-[0.12em]">
              Explore
            </p>
            <h1 className="mt-1 font-serif text-4xl uppercase leading-none">
              The Worlds
            </h1>
            <div className="mt-5 h-px w-20 bg-[#d6ad45]" />
            <p className="mt-5 text-sm leading-6 text-[#cdbf9f]">
              Twenty interconnected novellas.
              <br />
              Infinite reflections.
            </p>
          </div>

          <div className="border-t border-[#8f6f2a]/40 pt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">
              Browse by Market
            </p>

            <div className="mt-4 space-y-2">
              {markets.map(([label, count], index) => (
                <button
                  key={label}
                  className={`flex w-full items-center justify-between border px-3 py-2 text-xs text-[#d8ccb2] ${
                    index === 0
                      ? "border-[#d6ad45]/70 bg-[#d6ad45]/10 text-[#d6ad45]"
                      : "border-transparent hover:border-[#8f6f2a]/60"
                  }`}
                >
                  <span>{label}</span>
                  <span>{count}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-[#8f6f2a]/40 pt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">
              Browse by Theme
            </p>

            <div className="mt-4 space-y-2">
              {themes.map((theme) => (
                <button
                  key={theme}
                  className="flex items-center gap-2 text-xs text-[#d8ccb2] transition hover:text-[#d6ad45]"
                >
                  <span className="h-2.5 w-2.5 rounded-full border border-[#d6ad45]" />
                  <span>{theme}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-[#8f6f2a]/40 pt-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d6ad45]">
              Sort By
            </p>

            <select className="mt-4 w-full border border-[#8f6f2a]/60 bg-[#080808] px-3 py-2.5 text-xs text-[#d8ccb2] outline-none">
              <option>Release Order</option>
              <option>Title</option>
              <option>Market</option>
              <option>Theme</option>
            </select>
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
                Featured Novella {activeHeroIndex + 1} of{" "}
                {featuredNovellas.length}
              </p>

              <h2 className="mt-3 font-serif text-4xl font-light leading-tight">
                {activeHero.title}
              </h2>

              {activeHero.subtitle && (
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[#d6ad45]">
                  {activeHero.subtitle}
                </p>
              )}

              <div className="mt-5 max-w-3xl space-y-3 text-sm leading-6 text-[#d8ccb2]">
                {activeHero.description?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <p className="font-serif text-lg italic text-[#f4ead7]">
                  {activeHero.thesis}
                </p>
              </div>

              <div className="mt-5 flex flex-nowrap gap-2 overflow-hidden">
                {activeHero.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="whitespace-nowrap border border-[#8f6f2a] px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-[#d6ad45]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-nowrap items-center gap-2">
                <button className="whitespace-nowrap border border-[#d6ad45] bg-[#d6ad45] px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-black">
                  Enter This World
                </button>

                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="whitespace-nowrap border border-[#8f6f2a] px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[#d6ad45] transition hover:bg-[#8f6f2a]/20"
                >
                  <span className="hidden 2xl:inline">
                    {isPaused ? "Resume Showcase" : "Pause Showcase"}
                  </span>
                  <span className="2xl:hidden">
                    {isPaused ? "Resume" : "Pause"}
                  </span>
                </button>

                <div className="flex shrink-0 items-center gap-1 text-[10px] uppercase tracking-[0.18em] text-[#d6ad45]">
                  <button
                    onClick={goToFirstHero}
                    aria-label="First featured novella"
                    className="px-1 text-[#cdbf9f] transition hover:text-[#d6ad45]"
                  >
                    &lt;&lt;
                  </button>

                  <button
                    onClick={goToPreviousHero}
                    aria-label="Previous featured novella"
                    className="px-1 text-[#cdbf9f] transition hover:text-[#d6ad45]"
                  >
                    &lt;
                  </button>

                  {visibleHeroIndexes.map((index) => {
                    const novella = featuredNovellas[index];

                    return (
                      <button
                        key={novella.title}
                        onClick={() => goToHero(index)}
                        aria-label={`Show ${novella.title}`}
                        className={`px-2 py-1 transition ${
                          index === activeHeroIndex
                            ? "bg-[#d6ad45] text-black"
                            : "text-[#cdbf9f] hover:text-[#d6ad45]"
                        }`}
                      >
                        {index + 1}
                      </button>
                    );
                  })}

                  <button
                    onClick={goToNextHero}
                    aria-label="Next featured novella"
                    className="px-1 text-[#cdbf9f] transition hover:text-[#d6ad45]"
                  >
                    &gt;
                  </button>

                  <button
                    onClick={goToLastHero}
                    aria-label="Last featured novella"
                    className="px-1 text-[#cdbf9f] transition hover:text-[#d6ad45]"
                  >
                    &gt;&gt;
                  </button>
                </div>
              </div>
            </div>
          </div>

          <section id="worlds" className="pt-5">
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-7">
              {novellas.map((world, index) => (
                <article
                  key={world.title}
                  className="group overflow-hidden border border-[#8f6f2a]/60 bg-[#0b0b0b]"
                >
                  {world.cover ? (
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <Image
                        src={world.cover}
                        alt={`${world.title} cover`}
                        fill
                        quality={100}
                        sizes="(max-width: 768px) 50vw, 14vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[2/3] flex-col justify-between bg-gradient-to-br from-[#111] to-[#020202] p-3">
                      <p className="text-[10px] text-[#d6ad45]">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <div>
                        <h3 className="font-serif text-xl leading-tight">
                          {world.title}
                        </h3>
                        <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#9f8f70]">
                          A novella
                        </p>
                        <p className="mt-4 text-[9px] uppercase tracking-[0.22em] text-[#d6ad45]/70">
                          Cover coming soon
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section id="themes" className="w-full px-6 pb-14">
        <div className="rounded-lg border border-[#8f6f2a]/40 px-8 py-7">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad45]">
            One Anthology. Twenty Worlds. Infinite Questions.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#d8ccb2]">
            Each novella explores a different market within the human
            experience. Together, they reveal the systems that commodify,
            control, and consume us — and the quiet ways we resist, remember,
            and reclaim what is ours.
          </p>
        </div>
      </section>

      <footer
        id="author"
        className="border-t border-[#8f6f2a]/30 px-6 py-7 text-[10px] text-[#9f8f70]"
      >
        <div className="flex w-full justify-between">
          <p>© 2026 The Commodified Self Press</p>
          <p>Alphonse Damas</p>
        </div>
      </footer>
    </main>
  );
}