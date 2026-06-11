
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
  atlasConnections: { slug: string; title: string; relationship: string }[];
  relatedIdeas: { idea: string; reason: string }[];
  relatedMarkets: { market: string; reason: string }[];
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
    slug: "who-cleans-galts-toilets",
    title: "Who Cleans Galt’s Toilets?",
    subtitle: "What Happens After the Revolution Wins",
    market: "Systems",

    cover: "/covers/who-cleans-galts-toilets.jpg",
    hero: "/heroes/who-cleans-galts-toilets-hero.jpg",

    status: "draft",
    anthologyPosition: 14,

    logline:
      "After the most capable build a perfect civilization, a maintenance worker notices that the same families keep leading it — and the same families keep cleaning beneath it.",

    premise:
      "In a civilization descended from victorious Founders who withdrew from a collapsing old world to build a meritocratic paradise, Elias Vale works in Civic Continuity maintaining the unseen sanitation, water, and waste systems that make the city possible. When he notices that Founder-descended surnames dominate leadership while maintenance families remain clustered beneath the infrastructure, a crude question becomes a civilizational crisis: who cleans Galt’s toilets?",

    synopsisShort:
      "Who Cleans Galt’s Toilets? is a speculative systems novella about meritocracy after victory. Through Elias Vale, the Maintenance Class, the Founders, the Darwinians, and the Successors, it explores how revolutions become establishments, how merit compounds into inheritance, and why no civilization permanently solves history.",

    synopsisLong: [
      "The Founders’ revolution succeeded. They withdrew from the old world, built a new civilization around excellence, contribution, and freedom from unearned obligation, and became revered ancestors.",
      "Generations later, Elias Vale, a sanitation and infrastructure maintenance worker, loves the city from below. While repairing Founder Hall’s waste systems, he notices that the families who speak above the marble halls are not the families who maintain the pipes behind them.",
      "Elias begins examining public records: academy admissions, leadership positions, research institutions, council appointments, marriage patterns, and maintenance assignments. The same elite surnames appear repeatedly in positions of prestige, while the same continuity surnames cluster in maintenance and support roles.",
      "The pattern is not simple corruption. Many Founder descendants are genuinely capable. But capability is cultivated through inherited proximity, marriage markets, mentorship, assumptions, education, and social permission.",
      "Elias publishes his findings and becomes a heretic. The society divides between meritocrats, reformers, traditionalists, genealogists, and Darwinians who argue that hierarchy may emerge naturally from human variation and compounding advantage.",
      "A forgotten Founder’s private writings reveal that the danger was foreseen: meritocracy might eventually harden into aristocracy if descendants inherited the conditions of excellence.",
      "A younger generation challenges the Founders’ assumptions. They become Counter-Galts, new rebels within the civilization founded by old rebels.",
      "Elias finally realizes the question was never only about toilets, sanitation, labor, or class. It was about succession: every successful civilization creates descendants who ask different questions than its founders.",
      "The old order gives way not through conquest, but through transformation. The Successors become the next Founders, and the cycle begins again."
    ],

    coreQuestion:
      "What happens after the revolution wins and its descendants inherit the hierarchy it claimed to defeat?",

    secondaryQuestions: [
      "When does merit become inheritance?",
      "Can a civilization built on excellence prevent excellence from becoming lineage?",
      "Who maintains paradise after the founders become statues?",
      "Is mobility the same as openness?",
      "Can hierarchy emerge without conspiracy?",
      "What does a society owe to the people whose labor makes its freedom visible?",
      "Can any civilization permanently solve history?"
    ],

    themes: [
      "meritocracy",
      "aristocracy",
      "inheritance",
      "maintenance labor",
      "human variation",
      "founding myths",
      "succession",
      "class without class language",
      "revolution becoming establishment",
      "infrastructure",
      "mate selection",
      "compounding advantage",
      "social mobility",
      "institutional legitimacy",
      "history as cycle"
    ],

    ideas: [
      "The maintenance class",
      "Founder mythology",
      "Merit becoming inheritance",
      "Inherited proximity",
      "The invisible law",
      "Marriage markets",
      "Children of excellence",
      "The Forgotten Founder",
      "The Darwinians",
      "The Counter-Galts",
      "The Successors",
      "The toilet as civilizational aperture",
      "Victory creates descendants"
    ],

    whyThisWorldExists:
      "To explore what happens after a meritocratic revolution succeeds and becomes a civilization with descendants, institutions, marriage markets, inherited proximity, and maintenance classes. This world exists to ask whether any system can permanently prevent its own success from becoming a new hierarchy.",

    worldEssayAngle:
      "This world is not about toilets. It is about succession, hidden labor, and the way a civilization founded by rebels becomes the establishment its descendants must one day question.",

    worldEssaySubtitle:
      "A world where paradise works because someone unseen maintains the pipes.",

    worldEssay: [],

    worldPressurePoint:
      "The moment Elias realizes that the Founders once performed necessary labor, but their descendants inherited reverence while other families inherited maintenance.",

    worldThreat:
      "The greatest danger is that a civilization mistakes its founding success for permanent exemption from history, hierarchy, inheritance, and future rebellion.",

    worldReversal:
      "The revolutionaries who escaped the old establishment become ancestors of a new establishment, and the next rebels arise from the civilization they built.",

    worldContradiction:
      "The system claims to reward merit, yet merit is increasingly cultivated, recognized, and transmitted through inherited proximity, family continuity, and social expectation.",

    worldWound:
      "A maintenance civilization is praised for usefulness while being excluded from authorship, power, and the right to define what excellence means.",

    protagonist: "Elias Vale",

    centralConflict:
      "Elias must determine whether the civilization he loves is still a true meritocracy or whether its success has allowed merit to compound into inherited hierarchy.",

    moralDilemma:
      "If unequal outcomes arise from genuine variation, family cultivation, and accumulated advantage rather than explicit oppression, what does justice require without denying reality?",

    antagonistForce:
      "The invisible law of compounding advantage: Founder mythology, inherited proximity, elite marriage markets, institutional trust, vocational inheritance, and the belief that success proves the system’s innocence.",

    setting:
      "A post-revolutionary meritocratic city of Founder Halls, civic archives, design academies, executive councils, maintenance tunnels, sanitation grids, continuity quarters, genealogical records, public hearings, and successor movements.",

    systemLogic:
      "The civilization begins by rewarding excellence and rejecting unearned obligation. Over generations, excellent families transmit conditions of excellence through education, marriage, mentorship, proximity, reputation, and institutional expectation, while maintenance families inherit usefulness through vocational continuity.",

    commodifiedElement:
      "Meritocratic legitimacy.",

    whatIsBeingPriced:
      "Excellence, family name, inherited proximity, maintenance labor, aptitude, status, social trust, leadership access, and the right to author the future.",

    whatIsBeingLost:
      "Open authorship, social imagination, mobility beyond inherited usefulness, honest recognition of maintenance labor, and the ability to distinguish merit from accumulated advantage.",

    whatIsBeingProtected:
      "The Founders’ myth that the civilization escaped history and that hierarchy now reflects contribution rather than inherited conditions.",

    compass: {
      market: "Systems",
      primaryIdeas: [
        "Meritocracy",
        "Inheritance",
        "Maintenance labor",
        "Human variation",
        "Succession",
        "Revolution becoming establishment"
      ],
      pressurePoint:
        "The moment Elias’s sanitation question becomes a question about who inherits authorship over civilization.",
      threat:
        "A successful society becoming unable to see the hierarchy produced by its own success.",
      contradiction:
        "A civilization founded against unearned claims gradually depends on inherited advantages it refuses to name."
    },

    atlasConnections: [
      {
        slug: "the-other-half",
        title: "The Other Half",
        relationship:
          "Both worlds examine how selection, inheritance, and family formation convert advantage into future social structure."
      },
      {
        slug: "the-number",
        title: "The Number",
        relationship:
          "Both worlds critique simplified measures of human worth: one through sexual metrics, the other through meritocratic outcomes."
      },
      {
        slug: "the-second-burning",
        title: "The Second Burning",
        relationship:
          "Both worlds examine what happens after a founding victory succeeds and later generations inherit systems they no longer understand as choices."
      },
      {
        slug: "the-vanishing-variable",
        title: "The Vanishing Variable",
        relationship:
          "Both worlds expose hidden social equations by removing or questioning the variable that makes the system’s story comfortable."
      }
    ],

    relatedIdeas: [
      {
        idea: "Merit becoming inheritance",
        reason:
          "The novella’s central pattern is that earned excellence, once institutionalized, creates conditions that descendants inherit."
      },
      {
        idea: "Invisible labor",
        reason:
          "The city’s glory depends on maintenance work that is praised collectively but excluded from real authorship."
      },
      {
        idea: "Human variation",
        reason:
          "The story refuses simplistic equality narratives by asking how differences compound through families and institutions."
      },
      {
        idea: "Succession",
        reason:
          "The toilet question ultimately becomes a question about who inherits the right to shape the future."
      }
    ],

    relatedMarkets: [
      {
        market: "Minds",
        reason:
          "The novella is driven by ideology, social theory, Founder doctrine, data analysis, and interpretation of patterns."
      },
      {
        market: "Bodies",
        reason:
          "The title grounds abstract meritocracy in sanitation, waste, physical maintenance, inherited labor, and bodily equality."
      },
      {
        market: "Souls",
        reason:
          "The deeper moral question concerns dignity, usefulness, reverence, gratitude, resentment, and the spiritual cost of being praised but not heard."
      }
    ],

    authorNote:
      "This world belongs to The Commodified Self because it exposes how a society can commodify usefulness, excellence, lineage, and legitimacy. Who Cleans Galt’s Toilets? asks what happens when the self is valued according to the civilizational function it inherits — founder, leader, maintainer, successor — and whether any victory can escape becoming history.",

    originNote:
      "The novella grew from the unanswered practical question beneath Atlas Shrugged: after the productive withdraw and build their ideal society, who performs the necessary maintenance labor? The question expanded into a broader meditation on meritocracy, aristocracy, human variation, and the cyclical nature of civilization.",

    excerpt: {
      status: "available",
      label: "The Question Nobody Asked",
      teaser:
        "Elias repairs Founder Hall’s sanitation line while a lecture above praises the dignity of achievement.",
      text: [
        "Founder Hall lavatory pressure irregularity.",
        "Priority: ceremonial.",
        "Assigned technician: Elias Vale."
      ]
    },

    seoDescription:
      "Who Cleans Galt’s Toilets? is a speculative novella in The Commodified Self anthology about meritocracy, Atlas Shrugged, maintenance labor, inherited hierarchy, human variation, Founder mythology, succession, and what happens after the revolution wins."
  }
];

export const getWorldBySlug = (slug: string) =>
  worlds.find((world) => world.slug === slug);
