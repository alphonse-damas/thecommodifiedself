
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
    slug: "the-other-half",
    title: "The Other Half",
    subtitle: "A Novella of Desire, Design, and the Cost of Truth",
    market: "Hearts",

    cover: "/covers/the-other-half.jpg",
    hero: "/heroes/the-other-half-hero.jpg",

    status: "draft",
    anthologyPosition: 9,

    logline:
      "In a society that separates genetic fathers from social fathers, a woman, her Beta partner, and the Alpha donor she secretly desires discover that optimized family design cannot protect love from truth.",

    premise:
      "The Other Half takes place in a future governed by the Dual Strategy, a reproductive system that divides family formation between Alpha donors, selected for superior genetic profiles, and Beta partners, selected for stability, caregiving, and domestic compatibility. Selene chooses Greg as her life partner and Tyson as the genetic source for her child, believing this arrangement offers the best of both worlds. But the system’s emotional costs surface through guilt, jealousy, longing, paternal uncertainty, and the realization that love cannot be cleanly separated from desire, biology, and dignity.",

    synopsisShort:
      "The Other Half is a speculative novella about reproductive optimization, dual-mating strategy, and the emotional consequences of splitting love, desire, genetics, and parenthood across different people. Through Selene, Greg, and Tyson, it asks what happens when a society optimizes family design at the cost of relational wholeness.",

    synopsisLong: [
      "Selene signs an Alpha donor contract using Tyson Kaneshiro’s genetic material while remaining partnered with Greg, a Beta man who offers love, stability, and caregiving. The choice is framed as rational, responsible, and socially approved, but it immediately exposes emotional fractures neither partner can fully name.",
      "Greg initiates and accepts the donor contract because he believes sacrifice proves love. Yet beneath his nobility is fear: fear of not being enough, fear that Selene desires what he can never be, and fear that the child he raises will always reflect another man’s value.",
      "Selene’s own interior life is divided between loyalty to Greg, desire for Tyson, and the society’s insistence that reproductive optimization is empowerment. Her pregnancy becomes a site where design, desire, guilt, and maternal hope collide.",
      "Tyson, the celebrated Alpha donor, appears to possess the highest status in the system, but his life reveals another form of commodification. His genome is requested, marketed, and reproduced, while his emotional self is excluded from the children he helps create.",
      "As the costs of the system become visible, Betas begin organizing Rootstate, a breakaway social movement built around dignity, paternal recognition, and the refusal to remain domestic utilities inside optimized family structures.",
      "Tyson begins to withdraw from donor contracts, confronting the emptiness of genetic legacy without relationship. Greg ultimately chooses dignity over pedestalized love, while Selene must face the consequences of a choice that was both socially rational and emotionally devastating."
    ],

    coreQuestion:
      "What happens when society splits love, desire, genetics, and parenthood into separate roles and calls the result progress?",

    secondaryQuestions: [
      "Can love survive when biology and emotional partnership are assigned to different people?",
      "Is a choice still free when society has already ranked the options?",
      "What is fatherhood without genetic origin, and what is genetic legacy without relationship?",
      "Does optimization erase human dignity?",
      "Can sacrifice become self-erasure when it is called love?",
      "What happens to desire when it is converted into reproductive design?",
      "Who is made dispensable when a society defines what is optimal?"
    ],

    themes: [
      "love and desire",
      "dual-mating strategy",
      "reproductive optimization",
      "genetic hierarchy",
      "fatherhood",
      "Beta dignity",
      "Alpha commodification",
      "female choice",
      "sacrifice",
      "jealousy",
      "emotional labor",
      "parenthood",
      "eugenics masked as empowerment",
      "relational truth",
      "family design",
      "the cost of optimization"
    ],

    ideas: [
      "The Managed Mating Economy",
      "Alpha donors",
      "Beta partners",
      "Rootstate",
      "Genetic father versus social father",
      "Choice without freedom",
      "Design versus desire",
      "Optimization as emotional violence",
      "The utility of the Beta",
      "The extraction of the Alpha",
      "Pedestalized love",
      "Legacy without intimacy",
      "Fatherhood as daily presence"
    ],

    whyThisWorldExists:
      "To explore how a society that optimizes reproduction can still fracture the human heart. This world exists to test whether love can remain whole when desire, genetics, caregiving, and social legitimacy are divided into separate market functions.",

    worldEssayAngle:
      "This world is not about a love triangle in the ordinary sense. It is about a society that turns the love triangle into policy, then asks the people inside it to call their wounds rational progress.",

    worldEssaySubtitle:
      "A world where love is stable, desire is optimized, and no one is allowed to be whole.",

    worldEssay: [],

    worldPressurePoint:
      "The moment a rational donor contract becomes an irreversible child, forcing everyone to live inside the emotional consequences of optimized choice.",

    worldThreat:
      "A future where people are divided into useful romantic, reproductive, and domestic functions, then judged by how well they accept their assigned role.",

    worldReversal:
      "The Alpha who appears most valued is emotionally extracted, while the Beta who appears secondary becomes the clearest witness to the system’s moral failure.",

    worldContradiction:
      "The system claims to strengthen families by optimizing their parts, but it weakens love by making every person wonder which part of them was not enough.",

    worldWound:
      "The belief that being useful in love is not the same as being fully chosen.",

    protagonist: "Selene Vale",

    centralConflict:
      "Selene, Greg, and Tyson must confront the emotional truth that a society can optimize reproduction while leaving love, fatherhood, desire, and dignity divided against themselves.",

    moralDilemma:
      "If reproductive optimization offers children better biological outcomes, does that justify the emotional demotion of Beta fathers, the extraction of Alpha donors, and the compartmentalization of women’s desire?",

    antagonistForce:
      "The Dual Strategy itself: GenHarvest Biotech, reproductive optimization protocols, genetic rankings, public opinion, Alpha/Beta hierarchies, and the internal belief that rational design can outrank relational truth.",

    setting:
      "A near-future society organized around biotech reproductive centers, GenHarvest donor contracts, Alpha lounges, Beta family structures, public registries, social media discourse, optimized clinics, domestic apartments, and the emerging separatist community of Rootstate.",

    systemLogic:
      "The system decouples genetic value from relational value. Alpha donors provide superior genes at scale, Beta partners provide emotional and economic stability, women are encouraged to optimize family design, and children are publicly categorized through biological and social parentage records.",

    commodifiedElement:
      "Relational wholeness.",

    whatIsBeingPriced:
      "Genes, reproductive access, desirability, fatherhood, caregiving, emotional stability, social legitimacy, and the right to be considered enough.",

    whatIsBeingLost:
      "Unified parenthood, romantic dignity, unfragmented desire, relational truth, and the ability to love without being sorted into reproductive usefulness or domestic utility.",

    whatIsBeingProtected:
      "The fantasy that rational design can produce stronger families without creating emotional casualties.",

    compass: {
      market: "Hearts",
      primaryIdeas: [
        "Love and desire",
        "Reproductive hierarchy",
        "Fatherhood",
        "Choice without freedom",
        "Optimization versus dignity",
        "Relational wholeness"
      ],
      pressurePoint:
        "The moment design becomes life and emotional abstraction becomes irreversible family reality.",
      threat:
        "A society that makes people useful in parts and then calls the arrangement love.",
      contradiction:
        "Optimization can improve biological outcomes while degrading the dignity of the people asked to live inside the optimized structure."
    },

    atlasConnections: [
      {
        slug: "the-number",
        title: "The Number",
        relationship:
          "Both worlds examine intimacy as a sorting mechanism, revealing how sexual and romantic value becomes public hierarchy."
      },
      {
        slug: "proxy",
        title: "Proxy",
        relationship:
          "Both worlds explore desirability, sexual selection, and the wound of being valued or ignored according to erotic and social hierarchy."
      },
      {
        slug: "the-mirror-doesnt-work",
        title: "The Mirror Doesn’t Work",
        relationship:
          "Both worlds examine externally imposed identity systems that teach people what they are allowed to be before they can define themselves."
      },
      {
        slug: "in-the-public-interest",
        title: "In the Public Interest",
        relationship:
          "Both worlds ask whether bodies can be made socially useful without violating consent, dignity, and personhood."
      }
    ],

    relatedIdeas: [
      {
        idea: "Choice without freedom",
        reason:
          "Selene chooses, but her choice is shaped by a social hierarchy that already ranks Tyson’s genes above Greg’s."
      },
      {
        idea: "Utility versus dignity",
        reason:
          "Greg is useful as a caregiver and partner, but his usefulness does not protect him from emotional demotion."
      },
      {
        idea: "Legacy without intimacy",
        reason:
          "Tyson’s genome becomes widely reproduced while his relational self remains excluded from fatherhood."
      },
      {
        idea: "Optimization as emotional violence",
        reason:
          "The system’s measurable benefits hide the unmeasured grief of those divided into functions."
      }
    ],

    relatedMarkets: [
      {
        market: "Bodies",
        reason:
          "The story depends on reproduction, genetics, pregnancy, donor contracts, implantation, and inherited biological traits."
      },
      {
        market: "Systems",
        reason:
          "The Dual Strategy is institutionalized through GenHarvest, policy, registries, contracts, public rankings, and reproductive infrastructure."
      },
      {
        market: "Souls",
        reason:
          "The deepest wound concerns dignity, enoughness, sacrifice, love, and the moral cost of being only partially chosen."
      }
    ],

    authorNote:
      "This world belongs to The Commodified Self because it reveals how love itself can be separated into market functions: genes, care, desire, stability, and legacy. The Other Half asks whether people can remain whole when society rewards them for accepting only the part of love assigned to them.",

    originNote:
      "The novella began as a question about dual-mating strategy: what happens when people split the work of love and desire across different partners? It evolved into a story about family design, Beta dignity, Alpha extraction, and the emotional inheritance of optimized reproduction.",

    excerpt: {
      status: "available",
      label: "Agreement",
      teaser:
        "Selene signs the Alpha donor contract and realizes that choice does not feel like freedom.",
      text: [
        "Selene sat in the waiting room of the Central Biotech Reproductive Center, tapping her thumb against the digital signature pad.",
        "She signed her name with a trembling hand.",
        "This is what choice feels like, she thought. And it doesn’t feel like freedom at all."
      ]
    },

    seoDescription:
      "The Other Half is a speculative novella in The Commodified Self anthology about dual-mating strategy, reproductive optimization, Alpha donors, Beta partners, love, desire, fatherhood, genetic hierarchy, and the cost of splitting family into functions."
  }
];

export const getWorldBySlug = (slug: string) =>
  worlds.find((world) => world.slug === slug);
