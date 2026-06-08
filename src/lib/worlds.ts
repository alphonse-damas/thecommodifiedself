export type World = {
  title: string;
  slug: string;
  subtitle?: string;
  cover: string | null;
  hero: string | null;
  featured: boolean;
  market: "Bodies" | "Hearts" | "Minds" | "Souls" | "Systems";
  description: string[];
  thesis: string;
  tags: string[];
  ideas: string[];
  related: string[];
};

export const worlds: World[] = [
  {
    title: "The Other Half",
    slug: "the-other-half",
    subtitle: "A Novella of Dual Mating and Choice",
    cover: "/covers/the-other-half.png",
    hero: "/heroes/the-other-half-hero.png",
    featured: true,
    market: "Hearts",
    description: [
      "In a society shaped by divided desire, love and reproduction no longer belong to the same choice.",
      "Selene must decide what truth costs when biology, stability, and longing pull in different directions.",
      "What began as a private arrangement becomes a question the whole world must answer:",
    ],
    thesis:
      "What happens when love, parenting, and desire are separated into different economies?",
    tags: ["Love", "Choice", "Parenting", "Truth"],
    ideas: ["Desire", "Choice", "Parenting", "Truth", "Belonging"],
    related: ["the-number", "proxy", "the-long-goodbye"],
  },
  {
    title: "The Number",
    slug: "the-number",
    subtitle: "Every Body Keeps Count",
    cover: "/covers/the-number.png",
    hero: "/heroes/the-number-hero.png",
    featured: true,
    market: "Bodies",
    description: [
      "Everyone carries a number.",
      "Some wear it as proof. Others hide it as shame.",
      "But when intimacy becomes a public ledger, no one is untouched by the count:",
    ],
    thesis: "What does a number reveal about us — and what does it erase?",
    tags: ["Desire", "Judgment", "Gender", "Value"],
    ideas: ["Identity", "Desire", "Judgment", "Value", "Truth"],
    related: ["proxy", "the-other-half", "the-mirror-doesnt-work"],
  },
  {
    title: "The Chrysalis",
    slug: "the-chrysalis",
    subtitle: "Evolution Had Terms and Conditions",
    cover: "/covers/the-chrysalis.png",
    hero: "/heroes/the-chrysalis-hero.png",
    featured: true,
    market: "Bodies",
    description: [
      "Every age has its miracles. Ours were simply more efficient.",
      "Humanity turned evolution into a subscription—renewable, customizable, and conveniently financed.",
      "What began as a promise to transcend decay became a question no civilization had ever faced:",
    ],
    thesis:
      "What happens when the desire to become more costs us the very thing that made us human?",
    tags: ["Evolution", "Identity", "Transcendence", "Assimilation"],
    ideas: ["Identity", "Transcendence", "Technology", "Assimilation", "Choice"],
    related: ["proxy", "the-second-burning", "the-last-frequency"],
  },
  {
    title: "When Gods Stay Quiet",
    slug: "when-gods-stay-quiet",
    subtitle: "Silence Is Never Neutral",
    cover: "/covers/when-gods-stay-quiet.png",
    hero: "/heroes/when-gods-stay-quiet-hero.png",
    featured: true,
    market: "Souls",
    description: [
      "He could stop hurricanes. Catch bullets. Reverse disasters.",
      "But when a child needed him most, he did nothing.",
      "Stripped of his divinity and condemned to live as one of the people his silence failed, Halion must confront a question few heroes ever face:",
    ],
    thesis:
      "What if the greatest sin was not what you did — but what you refused to do?",
    tags: ["Silence", "Power", "Witness", "Accountability"],
    ideas: ["Power", "Accountability", "Silence", "Witness", "Meaning"],
    related: ["in-the-public-interest", "who-cleans-galts-toilets", "the-second-burning"],
  },
  {
    title: "The Vanishing Variable",
    slug: "the-vanishing-variable",
    subtitle: "When Absence Becomes Evidence",
    cover: "/covers/the-vanishing-variable.png",
    hero: "/heroes/the-vanishing-variable-hero.png",
    featured: true,
    market: "Systems",
    description: [
      "A population begins disappearing from the systems that once measured them.",
      "At first, the world calls it error. Then anomaly. Then crisis.",
      "But disappearance may not be the end of the story:",
    ],
    thesis:
      "What happens when the people a system depends on can no longer be found?",
    tags: ["Race", "Absence", "Memory", "Extinction"],
    ideas: ["Absence", "Race", "Memory", "Power", "Erasure"],
    related: ["blackmail-black-male", "the-mirror-doesnt-work", "in-the-public-interest"],
  },
  {
    title: "Blackmail, Black Male",
    slug: "blackmail-black-male",
    subtitle: "The Cost of Being Safe",
    cover: "/covers/blackmail-black-male.png",
    hero: "/heroes/blackmail-black-male-hero.png",
    featured: true,
    market: "Minds",
    description: [
      "Safety is never free when fear becomes a market.",
      "A Black man discovers survival has a price.",
      "The question is no longer whether he is guilty:",
    ],
    thesis:
      "What does protection mean when the threat is built into the world around you?",
    tags: ["Race", "Fear", "Control", "Survival"],
    ideas: ["Race", "Fear", "Control", "Protection", "Survival"],
    related: ["the-vanishing-variable", "the-mirror-doesnt-work", "in-the-public-interest"],
  },
  {
    title: "Who Cleans Galt's Toilets?",
    slug: "who-cleans-galts-toilets",
    subtitle: "What Happens After the Revolution Wins",
    cover: "/covers/Who-Cleans-Galts-Toilets.png",
    hero: "/heroes/Who-Cleans-Galts-Toilets-hero.png",
    featured: true,
    market: "Systems",
    description: [
      "The revolution succeeded.",
      "The architects escaped.",
      "But paradise still needed someone to clean up after it.",
    ],
    thesis: "Who serves the dream after the dreamers declare themselves free?",
    tags: ["Class", "Labor", "Power", "Collapse"],
    ideas: ["Labor", "Class", "Power", "Value", "Dependency"],
    related: ["in-the-public-interest", "when-gods-stay-quiet", "the-robbery"],
  },
  {
    title: "Proxy",
    slug: "proxy",
    subtitle: "Borrowed Desire, Borrowed Memory",
    cover: "/covers/proxy.png",
    hero: "/heroes/proxy-hero.png",
    featured: true,
    market: "Minds",
    description: [
      "Desire became a subscription.",
      "Men who could not live the fantasy could now rent the memory of someone who could.",
      "But borrowed pleasure leaves behind a question no platform can answer:",
    ],
    thesis:
      "What happens when a life you never lived begins to feel more real than your own?",
    tags: ["Desire", "Technology", "Identity", "Memory"],
    ideas: ["Desire", "Memory", "Technology", "Identity", "Simulation"],
    related: ["the-number", "the-chrysalis", "the-other-half"],
  },
  {
    title: "The Last Frequency",
    slug: "the-last-frequency",
    subtitle: "The Signal Beneath the Noise",
    cover: "/covers/the-last-frequency.png",
    hero: "/heroes/the-last-frequency-hero.png",
    featured: true,
    market: "Minds",
    description: [
      "A signal appears where none should exist.",
      "Some hear salvation. Others hear a warning.",
      "As the frequency spreads, humanity must decide what it is really listening to:",
    ],
    thesis: "What truths become audible when the noise finally disappears?",
    tags: ["Signal", "Truth", "Consciousness", "Meaning"],
    ideas: ["Truth", "Signal", "Consciousness", "Meaning", "Memory"],
    related: ["the-second-burning", "the-chrysalis", "the-mirror-doesnt-work"],
  },
  {
    title: "The Robbery",
    slug: "the-robbery",
    subtitle: "What Remains After Value Is Taken",
    cover: "/covers/the-robbery.png",
    hero: "/heroes/the-robbery-hero.png",
    featured: true,
    market: "Hearts",
    description: [
      "A theft occurs in a world where ownership is already uncertain.",
      "What was taken is less important than what the act reveals.",
      "As the loss spreads, everyone is forced to ask what they were protecting:",
    ],
    thesis: "What does a society lose when everything has already been priced?",
    tags: ["Value", "Theft", "Power", "Loss"],
    ideas: ["Loss", "Value", "Attachment", "Regret", "Freedom"],
    related: ["who-cleans-galts-toilets", "the-long-goodbye", "the-other-half"],
  },
  {
    title: "The Long Goodbye",
    slug: "the-long-goodbye",
    subtitle: "Losing Someone Twice",
    cover: "/covers/the-long-goodbye.png",
    hero: "/heroes/the-long-goodbye-hero.png",
    featured: true,
    market: "Hearts",
    description: [
      "A love story stretched across memory and loss.",
      "He mourned her long before she died.",
      "When the end finally arrives, grief has already changed shape.",
    ],
    thesis: "How do you say goodbye to someone who has been leaving for years?",
    tags: ["Memory", "Love", "Loss", "Grief"],
    ideas: ["Memory", "Grief", "Love", "Loss", "Care"],
    related: ["the-other-half", "the-robbery", "the-number"],
  },
  {
    title: "The Mirror Doesn’t Work",
    slug: "the-mirror-doesnt-work",
    subtitle: "The Gaze We Inherited",
    cover: "/covers/the-mirror-doesnt-work.png",
    hero: "/heroes/the-mirror-doesnt-work-hero.png",
    featured: true,
    market: "Minds",
    description: [
      "The mirror shattered long ago, but its gaze remains.",
      "A people escape the system that defined them only to recreate it themselves.",
      "Freedom proves harder than rebellion.",
    ],
    thesis: "What if the prison survives because we carry it with us?",
    tags: ["Identity", "Race", "Power", "Inheritance"],
    ideas: ["Identity", "Race", "Inheritance", "Selfhood", "Power"],
    related: ["blackmail-black-male", "the-vanishing-variable", "the-number"],
  },
  {
    title: "In the Public Interest",
    slug: "in-the-public-interest",
    subtitle: "Consent Was Never the Same as Choice",
    cover: "/covers/in-the-public-interest.png",
    hero: "/heroes/in-the-public-interest-hero.png",
    featured: true,
    market: "Systems",
    description: [
      "The state discovered a new language for control.",
      "Everything could be justified if it served the public good.",
      "But the people asked to sacrifice were rarely the ones who benefited:",
    ],
    thesis:
      "What happens when the public interest becomes a market for private power?",
    tags: ["Power", "Consent", "Governance", "Control"],
    ideas: ["Consent", "Power", "Governance", "Control", "Protection"],
    related: ["when-gods-stay-quiet", "blackmail-black-male", "who-cleans-galts-toilets"],
  },
  {
    title: "The Second Burning",
    slug: "the-second-burning",
    subtitle: "When the Fire Learned to Hide",
    cover: "/covers/the-second-burning.png",
    hero: "/heroes/the-second-burning-hero.png",
    featured: true,
    market: "Minds",
    description: [
      "The books were saved.",
      "The firemen were defeated.",
      "But civilization learned that censorship no longer needed flames:",
    ],
    thesis:
      "What happens after knowledge survives, but meaning is quietly rewritten?",
    tags: ["Memory", "Censorship", "Knowledge", "Power"],
    ideas: ["Memory", "Knowledge", "Censorship", "Meaning", "Control"],
    related: ["the-last-frequency", "the-chrysalis", "when-gods-stay-quiet"],
  },
];

export const featuredWorlds = worlds.filter(
  (world): world is World & { hero: string } => world.featured && Boolean(world.hero),
);

export const markets = [
  ["All Worlds", String(worlds.length)],
  ["Bodies", String(worlds.filter((world) => world.market === "Bodies").length)],
  ["Hearts", String(worlds.filter((world) => world.market === "Hearts").length)],
  ["Minds", String(worlds.filter((world) => world.market === "Minds").length)],
  ["Souls", String(worlds.filter((world) => world.market === "Souls").length)],
  ["Systems", String(worlds.filter((world) => world.market === "Systems").length)],
] as const;

export const themes = [
  "Identity & Selfhood",
  "Love & Relationships",
  "Race & Society",
  "Memory & Trauma",
  "Technology & Control",
  "Morality & Meaning",
];

export function getWorldBySlug(slug: string) {
  return worlds.find((world) => world.slug === slug);
}

export function getRelatedWorlds(slug: string, limit = 3) {
  const currentWorld = getWorldBySlug(slug);

  if (!currentWorld) return [];

  const explicitRelatedWorlds = currentWorld.related
    .map((relatedSlug) => getWorldBySlug(relatedSlug))
    .filter((world): world is World => Boolean(world));

  if (explicitRelatedWorlds.length >= limit) {
    return explicitRelatedWorlds.slice(0, limit);
  }

  const fallbackWorlds = worlds
    .filter(
      (world) =>
        world.slug !== slug &&
        !explicitRelatedWorlds.some((relatedWorld) => relatedWorld.slug === world.slug),
    )
    .map((world) => {
      const sharedTags = world.tags.filter((tag) => currentWorld.tags.includes(tag));
      const marketMatch = world.market === currentWorld.market ? 1 : 0;

      return {
        world,
        score: sharedTags.length + marketMatch,
      };
    })
    .sort((a, b) => b.score - a.score)
    .map(({ world }) => world);

  return [...explicitRelatedWorlds, ...fallbackWorlds].slice(0, limit);
}
