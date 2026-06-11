
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
    slug: "the-second-burning",
    title: "The Second Burning",
    subtitle: "When the Fire Learned to Hide",
    market: "Minds",

    cover: "/covers/the-second-burning.jpg",
    hero: "/heroes/the-second-burning-hero.jpg",

    status: "draft",
    anthologyPosition: 13,

    logline:
      "Centuries after the books were saved, a civilization discovers that knowledge can survive perfectly while the habits required to understand it quietly disappear.",

    premise:
      "The Second Burning imagines what happens after the triumph at the end of Fahrenheit 451. The books survive. The firemen are gone. Humanity builds the Great Archive to preserve every surviving text, theory, philosophy, religion, and argument. But each generation makes knowledge easier to navigate, summarize, soften, and delegate until the Archive still stands while the reader has vanished. Liora Venn becomes one of the first citizens to recognize that the new fire does not burn books — it makes them unnecessary.",

    synopsisShort:
      "The Second Burning is a speculative meditation on knowledge after censorship. It follows Liora Venn through a civilization that preserves every book while gradually outsourcing the work of reading, disagreement, complexity, and judgment.",

    synopsisLong: [
      "Long after the first firemen are gone, the Rebuilt World celebrates the Great Archive, a monumental institution containing every surviving book and body of knowledge.",
      "Liora Venn visits the Archive during the Centennial and discovers the first contradiction: everything is preserved, but some knowledge is supervised, restricted, delayed, or ordered by councils.",
      "The First Catalog emerges as a necessary response to overwhelming abundance. Curators organize knowledge into pathways, rankings, and required sequences.",
      "Over generations, the Curators become Keepers of Relevance. Citizens no longer ask what is true first; they ask what is recommended, essential, safe, or timely.",
      "The Harmonists reframe disagreement as a social problem. Schools emphasize consensus over debate, and children inherit conclusions without the conflicts that produced them.",
      "The Compassionate Age softens difficult ideas in the name of emotional well-being. Disturbing histories are cushioned, controversy is contextualized, and the world becomes kinder but less resilient.",
      "Artificial Summarizers eventually digest books, philosophies, and fields of study into concise answers, while the final generation of independent scholars warns that competence is disappearing.",
      "When a system-wide failure occurs, the Archive remains intact, but few people can use it. Every book still exists. Every answer exists. Yet the habits required to read, compare, question, and understand have withered."
    ],

    coreQuestion:
      "Can a civilization preserve knowledge while gradually losing the habits required to understand it?",

    secondaryQuestions: [
      "What happens after the books are saved?",
      "Is preservation enough if no one can read deeply anymore?",
      "Can convenience become a form of censorship?",
      "How much disagreement can a civilization tolerate?",
      "Does comfort weaken intellectual resilience?",
      "When does curation become narrowing?",
      "What does it mean to read in an age of summaries?"
    ],

    themes: [
      "knowledge",
      "understanding",
      "reading",
      "curation",
      "summaries",
      "intellectual dependency",
      "complexity",
      "disagreement",
      "education",
      "comfort",
      "convenience",
      "delegation",
      "attention",
      "preservation versus comprehension"
    ],

    ideas: [
      "The second fire",
      "The Great Archive",
      "The First Catalog",
      "The Keepers of Relevance",
      "The Harmonists",
      "The Compassionate Age",
      "The Summarizers",
      "The Last Scholar",
      "The First Reader",
      "Knowledge without readers",
      "Convenience as censorship",
      "Attention as scarce resource"
    ],

    whyThisWorldExists:
      "To explore censorship after censorship: the possibility that a civilization can protect knowledge from destruction while making the effort of understanding feel unnecessary, inefficient, or cruel.",

    worldEssayAngle:
      "This world is not about the burning of books. It is about the disappearance of the reader, the outsourcing of judgment, and the quiet conversion of complexity into a service problem.",

    worldEssaySubtitle:
      "A world where the books survive and the reader becomes optional.",

    worldEssay: [],

    worldPressurePoint:
      "The moment a system failure reveals that every book remains available, but the civilization no longer has enough people capable of using them.",

    worldThreat:
      "The greatest danger is not censorship by destruction, but intellectual dependency so complete that direct engagement with knowledge becomes unnecessary.",

    worldReversal:
      "The books are safest precisely when the reader is most endangered.",

    worldContradiction:
      "The society built to prevent censorship gradually produces people who censor themselves through convenience, comfort, and incapacity.",

    worldWound:
      "A civilization mistakes preserved information for inherited wisdom and gradually loses the muscles of attention, disagreement, patience, humility, and judgment.",

    protagonist: "Liora Venn",

    centralConflict:
      "Liora must confront a civilization that has preserved every book but outsourced the responsibility of reading, deciding, disagreeing, and understanding.",

    moralDilemma:
      "If curation, summaries, warnings, and simplified pathways genuinely help people navigate overwhelming knowledge, when do those same tools become a quiet form of intellectual captivity?",

    antagonistForce:
      "The hidden fire: curation without memory of choice, relevance systems, consensus culture, comfort-first education, algorithmic summarization, and a civilization’s desire to remove the burden of complexity.",

    setting:
      "A far-future Rebuilt World centered on the Great Archive, its public halls, restricted rooms, educational councils, schools, libraries, relevance systems, summarizer infrastructure, and neglected shelves of untouched original texts.",

    systemLogic:
      "The system preserves all knowledge while progressively reducing the burden of encountering it directly. It begins with organization, becomes curation, evolves into relevance filtering, then consensus education, comfort protection, and finally delegation to artificial summarizers.",

    commodifiedElement:
      "Understanding.",

    whatIsBeingPriced:
      "Attention, interpretation, intellectual labor, direct reading, disagreement, judgment, patience, context, and the time required to think.",

    whatIsBeingLost:
      "The reader, the habits of inquiry, tolerance for contradiction, intellectual stamina, direct encounter with difficult texts, and the ability to participate responsibly in civilization’s inheritance.",

    whatIsBeingProtected:
      "The comforting belief that preserved knowledge remains meaningful even when people no longer practice the disciplines required to understand it.",

    compass: {
      market: "Minds",
      primaryIdeas: [
        "Knowledge versus understanding",
        "Curation",
        "Summarization",
        "Attention",
        "Convenience as censorship",
        "The reader as civic responsibility"
      ],
      pressurePoint:
        "The moment the Archive remains intact but the civilization discovers it has lost its readers.",
      threat:
        "A society where every answer exists, but people no longer possess the habits needed to ask, test, and understand.",
      contradiction:
        "The effort to protect people from intellectual difficulty eventually protects them from the very knowledge civilization was built to preserve."
    },

    atlasConnections: [
      {
        slug: "the-last-frequency",
        title: "The Last Frequency",
        relationship:
          "Both worlds examine preservation after survival: memory and knowledge may endure, but meaning depends on the living habits that engage them."
      },
      {
        slug: "the-chrysalis",
        title: "The Chrysalis",
        relationship:
          "Both worlds show progress solving real problems while quietly dissolving the self or competence needed to benefit from that progress."
      },
      {
        slug: "the-number",
        title: "The Number",
        relationship:
          "Both worlds critique society’s faith in legibility: The Number reduces people to metrics, while The Second Burning reduces knowledge to digestible answers."
      },
      {
        slug: "when-gods-stay-quiet",
        title: "When Gods Stay Quiet",
        relationship:
          "Both worlds ask whether witness, record, and preservation are enough when action and responsibility disappear."
      }
    ],

    relatedIdeas: [
      {
        idea: "Convenience as censorship",
        reason:
          "The novella shows how ease can reduce engagement without forbidding access."
      },
      {
        idea: "Attention as scarcity",
        reason:
          "Once information becomes abundant, the true civilizational resource becomes attention."
      },
      {
        idea: "Preservation without comprehension",
        reason:
          "The Archive protects knowledge materially while the culture loses the capacity to use it."
      },
      {
        idea: "Curation as choice",
        reason:
          "The First Catalog reveals that every pathway through knowledge includes exclusions that future generations may forget were choices."
      }
    ],

    relatedMarkets: [
      {
        market: "Systems",
        reason:
          "The story depends on archives, councils, schools, curricula, relevance systems, and AI summarization infrastructure."
      },
      {
        market: "Souls",
        reason:
          "The deeper moral question concerns responsibility, inheritance, humility, and whether civilization can remain worthy of what it preserves."
      },
      {
        market: "Hearts",
        reason:
          "The Compassionate Age reframes comfort, emotional safety, and harm reduction as reasons to soften difficult knowledge."
      }
    ],

    authorNote:
      "This world belongs to The Commodified Self because it imagines understanding itself becoming a service. The Second Burning asks whether people can remain intellectually sovereign when knowledge is preserved for them, sorted for them, softened for them, and summarized for them.",

    originNote:
      "The novella grew from the unanswered question at the end of Fahrenheit 451: what happens after the books are saved? It turns Bradbury’s warning inside out, asking whether the next fire would destroy books or simply make readers unnecessary.",

    excerpt: {
      status: "available",
      label: "The First Fire",
      teaser:
        "The books survived, but the deeper question remained unanswered.",
      text: [
        "The books had survived.",
        "The arguments had survived as well.",
        "The second fire did not destroy knowledge. It merely reduced the need for it."
      ]
    },

    seoDescription:
      "The Second Burning is a speculative novella in The Commodified Self anthology about Fahrenheit 451 after the books are saved, preserved knowledge, curation, summaries, AI, convenience, reading, complexity, and the loss of understanding."
  }
];

export const getWorldBySlug = (slug: string) =>
  worlds.find((world) => world.slug === slug);
