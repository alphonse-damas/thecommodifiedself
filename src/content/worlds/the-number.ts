
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
    slug: "the-number",
    title: "The Number",
    subtitle: "When Intimacy Becomes Public Property",
    market: "Hearts",

    cover: "/covers/the-number.jpg",
    hero: "/heroes/the-number-hero.jpg",

    status: "draft",
    anthologyPosition: 8,

    logline:
      "In a world where every person’s sexual history glows on their forehead, a professor with a zero and a therapist with a 367 discover that visibility does not create understanding — it often destroys it.",

    premise:
      "In a near-future society, every person bears a glowing Number on their forehead representing their lifetime sexual encounters. The Number cannot be hidden, altered, or ignored, and society reorganizes itself around this single intimate metric. Elijah Stray, an anthropology professor whose Number is 0, and Tala Reeve, a former adult performer and therapist whose Number is 367, become entangled in a political and emotional crisis over transparency, shame, desire, social ranking, and whether human beings can ever be understood through measurement alone.",

    synopsisShort:
      "The Number explores what happens when intimacy becomes public data and people are judged by statistics instead of stories. Through Elijah, Tala, Junah, and The Veil, the novella examines sexual double standards, race, gender, reputation, privacy, and the difference between numerical truth and human understanding.",

    synopsisLong: [
      "The Number appears globally and without clear explanation, glowing on every person’s forehead as the public count of their sexual encounters. At first, society treats it as radical truth: no more lies, no more hidden pasts, no more uncertainty in intimacy.",
      "Over time, the Number becomes a new social caste system. Dating apps filter by it. Careers are shaped by it. Religious and political movements moralize it. A single metric becomes a substitute for character, reputation, desirability, purity, and trust.",
      "Elijah Stray, an anthropology professor with a Number of 0, teaches the social history of the Number while living under the suspicion, pity, and fascination that his own count provokes. His zero makes him both invisible and hypervisible.",
      "Tala Reeve, a former adult performer and therapist whose Number is 367, enters Elijah’s life as a counterpoint. She has been fetishized, condemned, and used as a symbol, but refuses to let her Number become the whole story of her life.",
      "Elijah and Tala become connected to The Veil, an underground movement dedicated to dismantling the Number’s power. But the movement fractures between those who want to restore story and those who want total erasure.",
      "Public trust collapses when Council officials are exposed for secretly altering or suppressing their own Numbers. Protests spread, people mask or falsify their Numbers, and biometric systems begin failing.",
      "Junah, a young woman whose Number is not zero but blank, discovers evidence that the Number system is not merely counting but calculating: profiling, curating, and routing social outcomes.",
      "As the system crashes, Elijah, Tala, and Junah confront the central question: whether humanity can live without the false certainty of being reduced to a visible count."
    ],

    coreQuestion:
      "If the most intimate part of your life became visible to everyone, would people finally know you — or would they stop seeing you altogether?",

    secondaryQuestions: [
      "Can a person be reduced to a statistic?",
      "Does transparency create honesty, or simply intensify judgment?",
      "What happens when reputation becomes permanent and visible?",
      "Can love survive radical public visibility?",
      "What is the difference between data and understanding?",
      "Who benefits when intimacy becomes measurable?",
      "Can a painful number still be part of a person’s story without becoming their prison?"
    ],

    themes: [
      "intimacy",
      "sexuality",
      "reputation",
      "privacy",
      "transparency",
      "social judgment",
      "quantification",
      "sexual double standards",
      "race and gender",
      "purity culture",
      "love beyond metrics",
      "story versus statistics",
      "dignity",
      "public shame",
      "the quantified self",
      "human complexity"
    ],

    ideas: [
      "Intimacy as public data",
      "Truth without story",
      "The quantified self",
      "Moral metrics",
      "Sexual caste systems",
      "Public reputation economies",
      "The Number as scar",
      "The Veil",
      "Unnumbered identity",
      "Data versus meaning",
      "The gaze as judgment",
      "Radical visibility",
      "A metric mistaken for a person"
    ],

    whyThisWorldExists:
      "To explore what happens when society mistakes visibility for understanding and replaces human stories with measurable statistics. This world exists to challenge the modern fantasy that enough data can finally explain a person.",

    worldEssayAngle:
      "This world is not about sexual history alone. It is about the moment society turns intimacy into a permanent public metric and then mistakes that metric for moral knowledge.",

    worldEssaySubtitle:
      "A world where the most private ledger becomes everyone’s first impression.",

    worldEssay: [],

    worldPressurePoint:
      "The meeting between Elijah’s 0 and Tala’s 367, where the system’s opposite judgments collide and reveal that both absence and abundance can become cages.",

    worldThreat:
      "The belief that data can fully explain a person, and that numerical truth is superior to story, context, mercy, and lived experience.",

    worldReversal:
      "The Number appears to reveal truth but ultimately conceals the human beings beneath it.",

    worldContradiction:
      "The more visible people become, the less they are actually seen.",

    worldWound:
      "Every person is reduced to a single intimate metric that cannot carry the weight of a life.",

    protagonist: "Elijah Stray",

    centralConflict:
      "Elijah, Tala, and Junah must defend human complexity against a society that treats sexual history as destiny and numerical visibility as truth.",

    moralDilemma:
      "Is radical transparency worth the loss of privacy, ambiguity, forgiveness, reinvention, and narrative context?",

    antagonistForce:
      "The social belief that numerical truth is superior to lived experience, reinforced by the Council, purity culture, biometric systems, dating markets, public shame, and extremist factions within The Veil.",

    setting:
      "A near-future global society where glowing sexual-history Numbers shape universities, dating apps, political institutions, religious movements, biometric tribunals, protests, underground resistance cells, and everyday intimacy.",

    systemLogic:
      "The Number creates universal visibility, which society converts into universal judgment. Institutions reorganize around measurable intimacy, treating sexual history as moral truth, social risk, desirability index, and predictive identity profile.",

    commodifiedElement:
      "Intimacy.",

    whatIsBeingPriced:
      "Sexual history, reputation, desirability, purity, trustworthiness, moral legitimacy, romantic access, social status, and the right to be considered lovable.",

    whatIsBeingLost:
      "Privacy, ambiguity, reinvention, forgiveness, personal narrative, sexual complexity, and the possibility of being seen before being judged.",

    whatIsBeingProtected:
      "Society’s desire for certainty in matters of desire, trust, purity, and relational risk.",

    compass: {
      market: "Hearts",
      primaryIdeas: [
        "Intimacy",
        "Reputation",
        "Transparency",
        "Judgment",
        "Love beyond metrics",
        "Story versus statistics"
      ],
      pressurePoint:
        "The reduction of intimate history into a public ranking system.",
      threat:
        "A world where statistics replace stories and visibility becomes another form of shame.",
      contradiction:
        "Perfect information creates deeper misunderstanding because it eliminates the need to listen."
    },

    atlasConnections: [
      {
        slug: "the-mirror-doesnt-work",
        title: "The Mirror Doesn’t Work",
        relationship:
          "Both worlds explore imposed identity systems that turn visibility into judgment and selfhood into something read by others before it is lived."
      },
      {
        slug: "proxy",
        title: "Proxy",
        relationship:
          "Both worlds commodify desire and expose how social and erotic validation can become systems of identity control."
      },
      {
        slug: "the-other-half",
        title: "The Other Half",
        relationship:
          "Both worlds examine mating, desirability, sexual selection, and the social consequences of turning intimacy into a sorting mechanism."
      },
      {
        slug: "blackmail-black-male",
        title: "Blackmail, Black Male",
        relationship:
          "Both worlds investigate how public narratives distort private identity and force people into roles they did not choose."
      }
    ],

    relatedIdeas: [
      {
        idea: "Truth without story",
        reason:
          "The Number may be accurate, but accuracy without context becomes a weapon."
      },
      {
        idea: "Sexual double standards",
        reason:
          "High Numbers are interpreted differently across gender, race, and social position."
      },
      {
        idea: "The quantified self",
        reason:
          "The novella turns the most intimate part of personal life into a public metric."
      },
      {
        idea: "Visibility as judgment",
        reason:
          "People become more visible but less understood, because the visible metric replaces listening."
      }
    ],

    relatedMarkets: [
      {
        market: "Minds",
        reason:
          "The story critiques society’s faith in metrics, data, legibility, and statistical explanation."
      },
      {
        market: "Systems",
        reason:
          "The Number reorganizes institutions, dating markets, politics, biometric surveillance, and social enforcement."
      },
      {
        market: "Souls",
        reason:
          "The deeper question is whether dignity and personhood can survive when intimate life becomes public judgment."
      }
    ],

    authorNote:
      "This world belongs to The Commodified Self because it literalizes the reduction of personhood into a metric. The Number began as a thought experiment about sexual transparency, but becomes a meditation on quantification, dignity, judgment, and the need to be seen as more than data.",

    originNote:
      "The novella grew from the speculative premise of a society where everyone’s sexual history is publicly visible. Its deeper purpose is to examine how quickly information becomes hierarchy, and how numerical truth can erase the human story it claims to reveal.",

    excerpt: {
      status: "available",
      label: "Zero Meets 367",
      teaser:
        "Elijah and Tala share tea beneath numbers neither of them asked for.",
      text: [
        "The first thing people notice is the Number.",
        "Tala Reeve. Number glowing on her forehead: 367.",
        "And just like that, the man with the 0, and the woman with the 367, share tea—beneath digital rain, behind numbers neither of them asked for."
      ]
    },

    seoDescription:
      "The Number is a speculative novella in The Commodified Self anthology about intimacy, sexual history, public reputation, transparency, privacy, love, social judgment, race, gender, and the danger of reducing human beings to statistics."
  }
];

export const getWorldBySlug = (slug: string) =>
  worlds.find((world) => world.slug === slug);
