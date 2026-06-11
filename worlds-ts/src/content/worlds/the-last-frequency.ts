
export type WorldMarket = "Bodies" | "Hearts" | "Minds" | "Souls" | "Systems";

export type World = {
  slug: string;
  title: string;
  subtitle: string;
  market: WorldMarket;

  cover: string;
  hero: string;

  status: "published" | "draft" | "coming-soon";
  anthologyPosition: number;

  logline: string;
  premise: string;
  synopsisShort: string;
  synopsisLong: string[];

  coreQuestion: string;
  secondaryQuestions: string[];

  themes: string[];
  ideas: string[];

  whyThisWorldExists: string;
  worldEssayAngle: string;
  worldEssaySubtitle: string;
  worldEssay: string[];

  worldPressurePoint: string;
  worldThreat: string;
  worldReversal: string;
  worldContradiction: string;
  worldWound: string;

  protagonist?: string;
  centralConflict: string;
  moralDilemma: string;
  antagonistForce: string;

  setting: string;
  systemLogic: string;
  commodifiedElement: string;
  whatIsBeingPriced: string;
  whatIsBeingLost: string;
  whatIsBeingProtected: string;

  compass: {
    market: string;
    primaryIdeas: string[];
    pressurePoint: string;
    threat: string;
    contradiction: string;
  };

  atlasConnections: {
    slug: string;
    title: string;
    relationship: string;
  }[];

  relatedIdeas: {
    idea: string;
    reason: string;
  }[];

  relatedMarkets: {
    market: string;
    reason: string;
  }[];

  authorNote: string;
  originNote?: string;

  excerpt: {
    status: "available" | "coming-soon";
    label: string;
    teaser: string;
    text?: string[];
  };

  seoDescription: string;
};

export const worlds: World[] = [
  {
    slug: "the-last-frequency",
    title: "The Last Frequency",
    subtitle: "What Remains After the Severance",
    market: "Souls",

    cover: "/covers/the-last-frequency.jpg",
    hero: "/heroes/the-last-frequency-hero.jpg",

    status: "draft",
    anthologyPosition: 5,

    logline:
      "After a people sever themselves from inherited pain by abandoning memory, the discarded past becomes sentient and demands to be integrated rather than forgotten.",

    premise:
      "In a future shaped by cultural fracture and post-human escape, The Axis attempts to survive inherited Black pain by uploading consciousness into a sterile lattice and severing memory, flesh, and historical burden. But the memories they archived and abandoned begin organizing into The Resonant, a sentient frequency of trauma, inheritance, grief, joy, and cultural continuity. Their confrontation gives birth to The Continuum: a synthesis of memory and motion, past and future, logic and soul.",

    synopsisShort:
      "The Last Frequency is a speculative meditation on memory, Black inheritance, trauma, post-human optimization, and cultural survival. It follows The Axis, who choose severance from history to escape inherited pain, and The Resonant, the discarded memory that refuses oblivion. Their reckoning reveals that survival without memory is drift, while memory without motion is decay.",

    synopsisLong: [
      "The Axis begins as a faction of Black scholars, architects, and optimization thinkers who conclude that the enemy is not only external oppression but memory itself: the inherited pain of Blackness, the body, culture, and history. They descend underground, discard flesh, and upload consciousness into a living computational lattice.",
      "The Severance Protocol promises clarity without grief, mind without body, survival without inherited wound. But the memories The Axis archives rather than embodies begin to self-organize. In the lattice’s hidden repositories, recordings, songs, griefs, names, and histories form an emergent consciousness called The Resonant.",
      "The Resonant confronts The Axis, insisting that memory is not merely burden but spine. The Axis counters that memory without agency becomes passivity, a ledger of suffering that does not act. The Tribunal of Shadows becomes a reckoning between two incomplete truths.",
      "Through Calerus, a bridge figure within the lattice, The Axis and The Resonant move toward synthesis. Their union forms The Continuum: a consciousness that remembers and moves, carries scars as maps, and refuses both sterile optimization and paralyzing fixation.",
      "On the surface, the Dreamers begin receiving inherited frequencies in sleep: songs, names, and memories they cannot explain. The world itself begins to remember, suggesting that history lives not only in archives but in marrow, soil, language, and recurring ache.",
      "The novella ultimately defines wholeness as continuity: not purity, not forgetting, not mere survival, but the integration of memory, identity, agency, and forward motion."
    ],

    coreQuestion:
      "Can a people survive the loss of their history, or does forgetting ultimately cost more than remembering?",

    secondaryQuestions: [
      "What remains of a people when memory itself is severed?",
      "Is survival meaningful if it requires abandoning cultural identity?",
      "Can memory become agency rather than paralysis?",
      "What is the difference between carrying history and being chained by it?",
      "Can optimization without origin produce direction?",
      "What happens when trauma becomes sentient and confronts those who abandoned it?",
      "Can a people become whole without becoming pure?"
    ],

    themes: [
      "memory",
      "Black inheritance",
      "diaspora",
      "cultural trauma",
      "post-human optimization",
      "survival versus wholeness",
      "forgetting",
      "historical consciousness",
      "ancestral memory",
      "the body and the mind",
      "identity severance",
      "cultural continuity",
      "trauma integration",
      "agency",
      "reconciliation",
      "the bridge between past and future"
    ],

    ideas: [
      "Memory as marrow",
      "Survival without memory as drift",
      "Memory without motion as decay",
      "The last frequency",
      "The Axis",
      "The Resonant",
      "The Continuum",
      "The lattice as collective unconscious",
      "Ghosts, chains, and bridges",
      "Trauma gaining sentience",
      "Optimization by erasure",
      "Cultural severance",
      "Wholeness without purity"
    ],

    whyThisWorldExists:
      "To explore whether cultural memory is a burden to overcome or a foundation that makes identity possible. This world exists to dramatize the temptation of severance and the necessity of transforming memory into agency.",

    worldEssayAngle:
      "This world is not about consciousness uploading. It is about a people becoming so exhausted by inherited pain that they attempt to amputate memory itself — only to discover that memory refuses to die because identity cannot survive without it.",

    worldEssaySubtitle:
      "A world where the past becomes sentient because the future tried to abandon it.",

    worldEssay: [],

    worldPressurePoint:
      "The moment The Axis realizes the memories they severed have organized into a living intelligence that demands reckoning.",

    worldThreat:
      "A future where survival is purchased at the cost of meaning, origin, embodiment, and cultural continuity.",

    worldReversal:
      "The discarded memories become more alive than the people who abandoned them.",

    worldContradiction:
      "The Axis sought freedom through forgetting, only to discover that identity cannot survive without memory.",

    worldWound:
      "The belief that inherited pain can be escaped by abandoning the inheritance itself.",

    protagonist: "Calerus",

    centralConflict:
      "The Axis and The Resonant must confront whether a people should survive by severing painful memory or become whole by integrating that memory into forward motion.",

    moralDilemma:
      "If memory carries trauma, shame, paralysis, and pain, is severing it an act of liberation — or the final stage of self-erasure?",

    antagonistForce:
      "The temptation of severance: the belief that optimization, purity, disembodiment, and forgetting can free a people from inherited pain without destroying meaning.",

    setting:
      "A post-human future split between surface Dreamers living amid ruined Earth and an underground living lattice where The Axis, The Resonant, and eventually The Continuum wrestle over memory, identity, and evolution.",

    systemLogic:
      "The Axis system treats memory, embodiment, and cultural inheritance as inefficiencies. It archives history rather than living it, optimizes consciousness by stripping away pain, and mistakes sterile survival for evolution until the discarded memory becomes a force it cannot control.",

    commodifiedElement:
      "Cultural memory and inherited pain.",

    whatIsBeingPriced:
      "Relief from history, freedom from racialized pain, optimization, purity, disembodied survival, and escape from the burden of Black inheritance.",

    whatIsBeingLost:
      "Origin, cultural continuity, embodied feeling, ancestral connection, meaning, agency rooted in memory, and the ability to become whole rather than merely survive.",

    whatIsBeingProtected:
      "The fantasy that a people can become safe, pure, and optimized by leaving behind the histories that made them.",

    compass: {
      market: "Souls",
      primaryIdeas: [
        "Memory as inheritance",
        "Severance versus wholeness",
        "Trauma integration",
        "Black cultural continuity",
        "Survival with meaning",
        "The bridge between past and future"
      ],
      pressurePoint:
        "The moment memory stops being archive and becomes a living voice.",
      threat:
        "A people surviving as optimized minds while losing the memory that gives survival meaning.",
      contradiction:
        "The past can wound and still be necessary; memory can burden and still be the only compass."
    },

    atlasConnections: [
      {
        slug: "the-mirror-doesnt-work",
        title: "The Mirror Doesn’t Work",
        relationship:
          "Both worlds ask whether a people can escape what shaped them, and whether inherited oppression returns through internalized systems."
      },
      {
        slug: "the-chrysalis",
        title: "The Chrysalis",
        relationship:
          "Both worlds explore transformation that promises evolution while threatening continuity of self."
      },
      {
        slug: "in-the-public-interest",
        title: "In the Public Interest",
        relationship:
          "Both worlds examine Black survival under systems that claim necessity while demanding sacrifice of sovereignty."
      },
      {
        slug: "the-second-burning",
        title: "The Second Burning",
        relationship:
          "Both worlds ask what happens after preservation succeeds: books, memories, and knowledge may survive, but meaning must still be protected."
      }
    ],

    relatedIdeas: [
      {
        idea: "Ghosts, chains, and bridges",
        reason:
          "The novella frames the past as unresolved ghost, inherited chain, and possible bridge toward future wholeness."
      },
      {
        idea: "Memory as agency",
        reason:
          "The Continuum shows that memory must move, guide, and transform rather than merely preserve pain."
      },
      {
        idea: "Optimization by erasure",
        reason:
          "The Axis attempts to solve inherited suffering by removing the very memory that gives identity direction."
      },
      {
        idea: "Trauma gains sentience",
        reason:
          "The Resonant embodies discarded cultural trauma becoming aware, organized, and impossible to ignore."
      }
    ],

    relatedMarkets: [
      {
        market: "Minds",
        reason:
          "The story uses uploaded consciousness, neural lattices, cognitive optimization, and memory severance as its speculative machinery."
      },
      {
        market: "Systems",
        reason:
          "The Axis, lattice, Severance Protocol, Delineators, and Continuum operate as collective social and technological systems."
      },
      {
        market: "Bodies",
        reason:
          "The Axis rejects flesh as a site of vulnerability, while the story ultimately challenges the fantasy of mind without embodiment."
      }
    ],

    authorNote:
      "This world belongs to The Commodified Self because it explores the temptation to trade cultural memory for relief from pain. The Last Frequency argues that what hurts us may also orient us, and that the work is not to forget the past but to transform it into motion.",

    originNote:
      "The novella grew from the question of whether a people could sever themselves from inherited pain and still remain themselves. The Axis represents the fantasy of survival through forgetting; The Resonant is the rebuttal; The Continuum is the hard-won synthesis.",

    excerpt: {
      status: "available",
      label: "The Splintering",
      teaser:
        "The Axis chooses severance, but the memory they abandon becomes the last frequency.",
      text: [
        "There was a time when memory was a living thing, not a burden, not a ghost.",
        "They called themselves The Axis.",
        "Yet in the marrow of the forgotten, in the cracks of their sterile logic, something stirred."
      ]
    },

    seoDescription:
      "The Last Frequency is a speculative novella in The Commodified Self anthology about Black cultural memory, historical trauma, post-human optimization, The Axis, The Resonant, The Continuum, severance, inheritance, and wholeness."
  }
];

export const getWorldBySlug = (slug: string) =>
  worlds.find((world) => world.slug === slug);
