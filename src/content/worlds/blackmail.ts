
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
    slug: "blackmail-black-male",
    title: "Blackmail, Black Male",
    subtitle: "The Extorted Self",
    market: "Minds",

    cover: "/covers/blackmail-black-male.jpg",
    hero: "/heroes/blackmail-black-male-hero.jpg",

    status: "draft",
    anthologyPosition: 1,

    logline:
      "A Black man enters the architecture of his own fractured mind and discovers that what he called survival was also a lifelong form of self-erasure.",

    premise:
      "Ilam, a Black man shaped by inherited silence, racialized vigilance, paternal fear, and emotional containment, begins encountering the inner figures who have governed his life: the Protector, Anger, the Child, Silent Self, and the Archivist. What first appears to be psychological collapse becomes a journey toward integration, as Ilam confronts the contract that taught him safety required the surrender of emotional truth.",

    synopsisShort:
      "Blackmail, Black Male follows Ilam through a symbolic and psychological descent into the rooms of his own mind. There he discovers that his calm, discipline, and silence were not simply virtues, but survival strategies built under pressure. The novella explores Black male identity as a form of lifelong coercion, asking what it costs to become acceptable in a world that fears your fullness.",

    synopsisLong: [
      "Ilam has built a life around composure. At work, in public, and within himself, he has learned how to be reassuring, measured, useful, and safe. But small disturbances begin to fracture that order: sounds flatten, time slows, old emotions surface, and voices inside him become impossible to ignore.",
      "Inside his psyche, Ilam encounters the figures who have been managing him for years. The Protector keeps him alive by enforcing caution. Anger has been buried because it was deemed dangerous. The Child carries the original wound. Silent Self embodies all that was swallowed. The Archivist preserves the memories Ilam could not face directly.",
      "The story becomes a therapeutic odyssey through memory-rooms, symbolic doors, internal councils, and inherited scripts. Ilam must confront not only his own trauma, but the father as internal law: the voice that taught him Black male survival meant silence, hardness, and emotional disappearance.",
      "The climax is not victory over an external villain, but the reorganization of the self. Ilam does not destroy his inner voices. He gives them rightful proportion. Healing becomes governance: no single fragment may rule, but every fragment must be heard."
    ],

    coreQuestion:
      "What if the experience of being a Black male in America is a form of lifelong blackmail — a coerced surrender of softness, anger, visibility, and emotional truth?",

    secondaryQuestions: [
      "When does survival become self-erasure?",
      "What happens when silence is mistaken for strength?",
      "Can anger become a boundary rather than a threat?",
      "What does healing look like when the wound is cultural, paternal, psychological, and internal?",
      "Can a man reclaim the parts of himself he was taught to bury without becoming ruled by them?"
    ],

    themes: [
      "Black masculinity",
      "emotional blackmail",
      "racialized vigilance",
      "internal fragmentation",
      "trauma integration",
      "silence as survival",
      "anger as boundary",
      "the inner child",
      "fatherhood and inherited harm",
      "selfhood under coercion",
      "psychological reconstruction",
      "visibility and performance"
    ],

    ideas: [
      "Extorted selfhood",
      "Conditional permission to exist",
      "The father as internal law",
      "The psyche as a council",
      "Healing as integration rather than domination",
      "Safety as a transaction",
      "The commodification of emotional sovereignty",
      "Presence without performance"
    ],

    whyThisWorldExists:
      "To explore the psychological cost of Black male survival when silence, restraint, and emotional disappearance are rewarded as virtues. This world exists to dramatize wholeness not as the absence of wounds, but as the integration of every exiled part of the self.",

    worldEssayAngle:
      "This world is not about a man losing his mind; it is about a man finally meeting it. Its horror is not madness but recognition: the discovery that the self he called stable was built from negotiated disappearances.",

    worldEssaySubtitle:
      "A world where safety is sold back to the man who was first taught to fear his own fullness.",

    worldEssay: [],

    worldPressurePoint:
      "The moment survival strategies begin to cost more than they protect.",

    worldThreat:
      "The greatest danger is not external racism alone, but the internalized contract that teaches Ilam to survive by erasing himself.",

    worldReversal:
      "The inner voices Ilam once feared as evidence of collapse become the very architecture of his wholeness.",

    worldContradiction:
      "The world claims it is protecting Black men by teaching them restraint, but what it often protects is society’s comfort with their containment.",

    worldWound:
      "A child learns that softness, crying, anger, and visibility can endanger love, safety, and belonging — and grows into a man whose calm is built on abandonment of the self.",

    protagonist: "Ilam",

    centralConflict:
      "Ilam must decide whether to keep obeying the internal system that protected him through silence or risk reclaiming the exiled parts of himself that the system defined as dangerous.",

    moralDilemma:
      "If silence kept him alive, does he owe loyalty to the silence — or to the self that silence buried?",

    antagonistForce:
      "The inherited contract of Black male survival: paternal fear, racialized suspicion, institutional comfort, and the internal Protector who confuses control with care.",

    setting:
      "A contemporary urban world split between ordinary external spaces — apartment, bus, workplace, street — and the symbolic interior architecture of Ilam’s psyche.",

    systemLogic:
      "The system works by converting Black male safety into a behavioral contract. It rewards calm, emotional suppression, and usefulness while punishing softness, anger, and full presence as risks.",

    commodifiedElement:
      "Emotional sovereignty.",

    whatIsBeingPriced:
      "Safety, dignity, softness, anger, and the right to move through the world without suspicion.",

    whatIsBeingLost:
      "The ability to exist without negotiating permission; the continuity between the inner child, adult self, anger, memory, and voice.",

    whatIsBeingProtected:
      "The world’s comfort with a Black man who has been trained to be governable, reassuring, and non-disruptive.",

    compass: {
      market: "Minds",
      primaryIdeas: [
        "Black male interiority",
        "Survival as self-erasure",
        "Anger as boundary",
        "Integration of fragmented selves",
        "Safety as a transaction"
      ],
      pressurePoint:
        "The moment Ilam realizes the Protector has not merely saved him, but ruled him.",
      threat:
        "A lifetime of conditional safety that requires Ilam to remain smaller than his full self.",
      contradiction:
        "The same disciplines that preserve Ilam’s life also prevent him from fully living it."
    },

    atlasConnections: [
      {
        slug: "the-mirror-doesnt-work",
        title: "The Mirror Doesn’t Work",
        relationship:
          "Both worlds examine inherited self-oppression and the way external systems become internal reflexes."
      },
      {
        slug: "the-other-half",
        title: "The Other Half",
        relationship:
          "Both worlds explore identity under social design, asking what happens when people perform roles that systems reward but the self cannot survive."
      },
      {
        slug: "the-last-frequency",
        title: "The Last Frequency",
        relationship:
          "Both worlds investigate memory, inherited burdens, and whether cultural survival is possible without honest confrontation with the past."
      },
      {
        slug: "in-the-public-interest",
        title: "In the Public Interest",
        relationship:
          "Both worlds examine Black agency under systems that claim protection while demanding compliance."
      }
    ],

    relatedIdeas: [
      {
        idea: "Internalized governance",
        reason:
          "Ilam’s psyche has become a governing system designed around risk avoidance."
      },
      {
        idea: "Conditional safety",
        reason:
          "The world permits Ilam safety only when he presents himself as controlled and non-threatening."
      },
      {
        idea: "Trauma integration",
        reason:
          "The novella treats healing as the reassembly of divided inner voices rather than the elimination of pain."
      },
      {
        idea: "The father as legacy",
        reason:
          "The father’s fear becomes an inherited law inside Ilam’s nervous system."
      }
    ],

    relatedMarkets: [
      {
        market: "Souls",
        reason:
          "The story concerns the moral and spiritual cost of abandoning the self to survive."
      },
      {
        market: "Systems",
        reason:
          "The inner world mirrors external systems of racial discipline, workplace palatability, and institutional comfort."
      }
    ],

    authorNote:
      "This world belongs to The Commodified Self because it reveals a market older than technology: the exchange of emotional truth for conditional safety. Ilam’s journey shows how a Black man can become useful to the world precisely to the extent that he has been trained not to disturb it.",

    originNote:
      "The title arises from the homophonic symmetry between 'blackmail' and 'Black male,' using the sound-alike structure to expose identity as coercion: the Black male self pressured into silence, control, and narrow permission to exist.",

    excerpt: {
      status: "available",
      label: "Opening Interior Disturbance",
      teaser:
        "Ilam wakes with the feeling that something inside him has shifted — not broken, but begun.",
      text: [
        "He had opened his eyes with the familiar feeling of having arrived late to his own life.",
        "As if some conversation had been happening without him and went silent the moment he woke.",
        "The silence felt less like absence and more like interruption."
      ]
    },

    seoDescription:
      "Blackmail, Black Male is a psychological novella in The Commodified Self anthology about Black masculinity, silence, trauma integration, emotional sovereignty, and the cost of surviving by disappearing."
  }
];

export const getWorldBySlug = (slug: string) =>
  worlds.find((world) => world.slug === slug);
