
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
    slug: "the-vanishing-variable",
    title: "The Vanishing Variable",
    subtitle: "When the Scapegoat Disappears",
    market: "Systems",

    cover: "/covers/the-vanishing-variable.jpg",
    hero: "/heroes/the-vanishing-variable-hero.jpg",

    status: "draft",
    anthologyPosition: 11,

    logline:
      "When Black people begin vanishing according to a metaphysical contract, society discovers that removing the group it blamed does not remove the problems it projected onto them.",

    premise:
      "The Vanishing Variable imagines a society governed by an unseen Contract between the Burden-Bearer and the Beneficiary: Black people carry disproportionate punishment, scrutiny, fear, deprivation, and blame, while the broader society receives moral comfort, psychic relief, and the story that its failures live somewhere else. After Malik is killed by police and his family accepts a settlement that no one truly believes in, the Contract begins to fail. Black people vanish slowly, elegantly, and without spectacle, forcing the city to confront whether its old explanations were ever true.",

    synopsisShort:
      "The Vanishing Variable is a speculative structural allegory about blame, disappearance, race, denial, and projection. As Black people vanish from a city, institutions continue functioning, crime continues, schools continue failing, and society must face the forbidden conclusion that the scapegoat was never the cause.",

    synopsisLong: [
      "The novella begins in the Chamber, a metaphysical hall of contracts where the Burden-Bearer and the Beneficiary are bound by an old agreement. The Burden-Bearer absorbs fear, punishment, suspicion, deprivation, and blame; the Beneficiary receives psychic relief, moral comfort, and the illusion that society’s failures can be placed elsewhere.",
      "Malik is killed during a traffic stop by Officer Brandt. The city denies wrongdoing and pays a settlement to Malik’s family. In the background of the settlement room, a time-clock cartoon subliminally reveals the ritual nature of repeated harm: violence as shift work, denial as procedure.",
      "The first disappearance occurs quietly after the settlement. Then more disappearances follow: Denise, Jerome, coworkers, church members, students, elders, artists, barbers, nurses, and relatives. The Elegance Protocol ensures that departures happen with minimal disruption, allowing denial to continue.",
      "Years pass. Dr. Kline, Lionel, and others begin noticing that the demographic math no longer matches accepted explanations. People are not migrating in corresponding numbers. Death records do not explain the decline. The city is thinning, but institutions bury or soften the implications.",
      "Laila, who grows up amid absence, begins drawing negative-space people and mapping what has vanished. With Lionel, she becomes one of the first to perceive the pattern clearly: this is not attrition, but erasure.",
      "Officer Brandt, whose identity was built around policing Black bodies, becomes increasingly hollow as the population he was trained to fear and control disappears. His authority remains, but the story that gave it shape begins to collapse.",
      "As Black culture visibly hollows out, society transfers blame to new groups. The projection machinery remains intact; it simply searches for new surfaces. The absence of Black people does not heal the system. It exposes its appetite for scapegoats.",
      "The climax arrives with the Zero Percent Question: if Black people are almost gone and crime, poverty, educational failure, and democratic instability remain, what were they being blamed for?",
      "In the final chapter, Black people reach zero. Laila disappears last, not as sacrifice or punishment, but as the mathematical closing of the ledger. The Chamber closes the Contract. The city remains, stripped of its old mirror and forced to confront its own face."
    ],

    coreQuestion:
      "What remains when a society can no longer blame what it depends on?",

    secondaryQuestions: [
      "What happens when the scapegoat disappears but the problems remain?",
      "Can a society survive the collapse of its favorite explanation?",
      "Is blame a form of social infrastructure?",
      "What does a beneficiary owe to those who carried its moral burden?",
      "Can absence expose truth more clearly than protest?",
      "What happens to authority when its enemy-image dissolves?",
      "If the variable is removed and the equation still fails, what must be examined next?"
    ],

    themes: [
      "structural racism",
      "projection",
      "scapegoating",
      "Black disappearance",
      "institutional denial",
      "police violence",
      "ritualized harm",
      "demographic erasure",
      "cultural hollowing",
      "blame as infrastructure",
      "bureaucratic language",
      "collective denial",
      "the failure of explanation",
      "absence as revelation",
      "systems accountability",
      "the psychology of beneficiaries"
    ],

    ideas: [
      "The Contract",
      "The Burden-Bearer",
      "The Beneficiary",
      "The Elegance Protocol",
      "The Chamber",
      "The Vanishing Variable",
      "The projection economy",
      "The Zero Percent Question",
      "The World Without Us",
      "Cultural ghosting",
      "The scapegoat machine",
      "The mirror disappeared",
      "Truth without belief",
      "Denial as maintenance"
    ],

    whyThisWorldExists:
      "To explore whether Blackness has functioned in America as a structural projection surface: a place where fear, guilt, disorder, and contradiction can be placed so that the larger system does not have to confront itself. This world exists to ask what happens when that projection surface vanishes and the system’s problems remain.",

    worldEssayAngle:
      "This world is not about mystery, rescue, or disappearance as spectacle. It is about a society losing the people it depended on blaming, and discovering that the removal of the scapegoat does not repair the system — it exposes it.",

    worldEssaySubtitle:
      "A world where the blamed variable disappears and the equation still fails.",

    worldEssay: [],

    worldPressurePoint:
      "The Zero Percent Question: if Black people are almost gone and the old problems remain, what were they being blamed for?",

    worldThreat:
      "The greatest danger is that the projection machinery survives the disappearance of its preferred scapegoat and simply finds new targets.",

    worldReversal:
      "The disappearance of Black people does not vindicate society; it indicts the society that needed them as an explanation.",

    worldContradiction:
      "The Beneficiary depends on the Burden-Bearer as culture, labor, mirror, and blame-surface while refusing to recognize the Burden-Bearer’s full personhood or authority.",

    worldWound:
      "A people are made to carry fear, guilt, punishment, suspicion, and cultural contradiction so the wider society can preserve the story that it is not the problem.",

    protagonist: "Laila",

    centralConflict:
      "Laila, Lionel, Dr. Kline, Malik’s mother, and even Brandt witness the collapse of old explanations as Black people vanish and the systems that blamed them continue producing the same harms.",

    moralDilemma:
      "If a people’s presence has been used as a container for another society’s guilt and disorder, is withdrawal liberation, boundary, indictment, or another wound carried by those who remain?",

    antagonistForce:
      "The Contract itself: a metaphysical and social system of projection, denial, ritualized harm, bureaucratic absorption, and beneficiary comfort that turns Black suffering into explanatory infrastructure.",

    setting:
      "A contemporary-to-near-future American city observed across decades through police stops, settlement rooms, churches, schools, hospitals, transit systems, demographic offices, neighborhoods, art spaces, precincts, and the metaphysical Chamber of contracts.",

    systemLogic:
      "The system operates by assigning social disorder, fear, guilt, and moral contradiction to Black people as a burden-bearing population. When harm occurs, institutions convert it into procedure, settlement, data, familiar explanation, and denial. Once the Contract fails, the Elegance Protocol subtracts Black people slowly enough for society to continue functioning while its explanations collapse.",

    commodifiedElement:
      "Blame.",

    whatIsBeingPriced:
      "Psychic relief, moral comfort, cultural vitality, social explanation, political deflection, police purpose, and the right to believe the problem lives elsewhere.",

    whatIsBeingLost:
      "Black lives, Black presence, cultural rhythm, community density, memory, ritual, accountability, and the social mirror that forced the Beneficiary to see what it had displaced.",

    whatIsBeingProtected:
      "The Beneficiary’s story that it is not the source of its own disorder, violence, poverty, failure, and fear.",

    compass: {
      market: "Systems",
      primaryIdeas: [
        "Projection economy",
        "Scapegoating",
        "Institutional denial",
        "Demographic erasure",
        "Blame as infrastructure",
        "Absence as revelation"
      ],
      pressurePoint:
        "The moment the old explanations fail because the blamed population is nearly gone and the problems remain.",
      threat:
        "A society that would rather rotate blame to new targets than confront itself.",
      contradiction:
        "The system needs Black people present as resource and absent as authority, visible as blame and invisible as full participants."
    },

    atlasConnections: [
      {
        slug: "in-the-public-interest",
        title: "In the Public Interest",
        relationship:
          "Both worlds examine Black communities as structurally useful to broader society while questioning whether usefulness produces autonomy or deeper extraction."
      },
      {
        slug: "the-last-frequency",
        title: "The Last Frequency",
        relationship:
          "Both worlds explore disappearance, memory, cultural continuity, and what remains when a people’s presence is severed from the world that shaped them."
      },
      {
        slug: "the-mirror-doesnt-work",
        title: "The Mirror Doesn’t Work",
        relationship:
          "Both worlds center projection: one through visual self-image, the other through society’s need to project disorder onto Blackness."
      },
      {
        slug: "blackmail-black-male",
        title: "Blackmail, Black Male",
        relationship:
          "Both worlds examine coercive systems that make Black people carry fear, containment, and responsibility for meanings imposed on them."
      }
    ],

    relatedIdeas: [
      {
        idea: "The projection economy",
        reason:
          "The novella argues that blame operates as a social economy, distributing guilt away from the Beneficiary and onto the Burden-Bearer."
      },
      {
        idea: "Absence as revelation",
        reason:
          "Black disappearance reveals that the blamed problems were never caused by Black presence."
      },
      {
        idea: "Denial as maintenance",
        reason:
          "Institutions preserve familiar explanations even after the math begins contradicting them."
      },
      {
        idea: "The scapegoat machine",
        reason:
          "When the original scapegoat dissolves, the apparatus does not stop; it searches for new targets."
      }
    ],

    relatedMarkets: [
      {
        market: "Souls",
        reason:
          "The story concerns burden-bearing, grief, spiritual vacancy, moral exposure, and the cost of a society losing its mirror."
      },
      {
        market: "Minds",
        reason:
          "The collapse of explanation, denial, myth-making, data interpretation, and cognitive dissonance drives the novella’s intellectual structure."
      },
      {
        market: "Bodies",
        reason:
          "The Contract is enforced through policing, disappearance, demographic subtraction, and the material vulnerability of Black bodies."
      }
    ],

    authorNote:
      "This world belongs to The Commodified Self because it treats blame as a commodity and Black presence as a structural resource. The Vanishing Variable asks what happens when a people refuse to remain the explanation for problems they did not create, and whether society can survive losing the mirror it depended on distorting.",

    originNote:
      "The novella grew from the thought experiment of taking social scapegoating to its logical limit: if Black people disappeared and the same social problems remained, what would the broader society be forced to admit about itself?",

    excerpt: {
      status: "available",
      label: "The Accord",
      teaser:
        "Before the first disappearance, the Burden-Bearer and the Beneficiary sit across from the Contract.",
      text: [
        "Before the first disappearance, there was only paperwork.",
        "One was called, for the convenience of language, the Burden-Bearer.",
        "The other, because there had to be a name, the Beneficiary."
      ]
    },

    seoDescription:
      "The Vanishing Variable is a speculative novella in The Commodified Self anthology about Black disappearance, structural racism, blame, scapegoating, projection, police violence, institutional denial, demographic erasure, and what happens when the scapegoat disappears but the system remains."
  }
];

export const getWorldBySlug = (slug: string) =>
  worlds.find((world) => world.slug === slug);
