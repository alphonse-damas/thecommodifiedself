
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
    slug: "the-robbery",
    title: "The Robbery",
    subtitle: "A Study in Love, Loss, and the Autopsy of Nothing",
    market: "Souls",

    cover: "/covers/the-robbery.jpg",
    hero: "/heroes/the-robbery-hero.jpg",

    status: "draft",
    anthologyPosition: 10,

    logline:
      "A man stands trial inside his own heart for defending empty space, only to discover that the real robbery was not what love took from him, but what fear taught him to take from himself.",

    premise:
      "The Robbery is a metaphysical four-act novella about a man who believes love has robbed him of trust, calm, and hope. In an imagined courtroom beneath the ribs, he defends his isolation as necessary protection. Across the trial, the verdict, the appeal, and the visitation of Emptiness itself, he discovers that self-protection can become self-imprisonment, and that the emptiness he defended was not peace but abandoned freedom.",

    synopsisShort:
      "The Robbery is an interior allegory about heartbreak, emotional defense, loneliness, and the strange comfort of emptiness. It follows a man who turns grief into a legal case, wins and loses by the same verdict, and eventually performs an autopsy on the nothing he spent his life protecting.",

    synopsisLong: [
      "The novella begins in a symbolic courtroom inside the man’s own body, where he is accused of isolation in the first degree: defending empty space. He pleads not guilty, insisting that past loves robbed him of trust, calm, laughter, and hope.",
      "The court acknowledges that he was wounded, but challenges the purpose of his defenses. The thieves are gone, yet he continues guarding the room. He is found guilty not of cruelty, but of mourning too long, and sentenced to return to the world unarmored.",
      "An alternate verdict imagines him winning his case. Years later, as an old man in Brooklyn, his perfect safety has become unbearable. The locks remain, the silence holds, and his victory reveals itself as a slow form of loss.",
      "In The Appeal, the man writes to the Court of the Heart, not to reverse the verdict but to reconsider its meaning. He begins to suspect that he was preserving only the outline of what once was.",
      "In The Visitation, Emptiness appears as a loyal companion that has been with him since the first heartbreak. It reveals that it did not steal his freedom; he abandoned it, and Emptiness merely guarded what he left behind.",
      "The epilogue performs the autopsy of nothing. The man discovers that emptiness was not an enemy but the shape left behind by the life he refused to risk. He dies not alone, but unguarded — his own form of resurrection."
    ],

    coreQuestion:
      "What happens when self-protection becomes the thing that robs you of freedom?",

    secondaryQuestions: [
      "Can heartbreak make emptiness feel like peace?",
      "When does solitude become self-imprisonment?",
      "Is emotional withdrawal protection, punishment, or both?",
      "Can a person be right about being wounded and still wrong about what the wound means?",
      "What do we steal from ourselves in the name of safety?",
      "Can emptiness be both companion and captor?",
      "What does it mean to stop defending empty space?"
    ],

    themes: [
      "heartbreak",
      "loneliness",
      "self-protection",
      "emotional withdrawal",
      "emptiness",
      "grief",
      "trust",
      "freedom",
      "vulnerability",
      "regret",
      "self-imprisonment",
      "inner economy",
      "love and defense",
      "nothingness",
      "forgiveness",
      "unarmored living"
    ],

    ideas: [
      "The court of the heart",
      "Defending empty space",
      "The economics of emptiness",
      "The self as vault",
      "Emptiness as companion",
      "Safety as possession",
      "The appeal of meaning",
      "The autopsy of nothing",
      "Victory as loss",
      "The robber as fear",
      "Emotional accounting",
      "Freedom traded for control"
    ],

    whyThisWorldExists:
      "To explore the inner economy of the self: how people convert heartbreak into evidence, vulnerability into liability, emptiness into property, and self-protection into a form of captivity. This world exists to show what the self takes from itself in the name of survival.",

    worldEssayAngle:
      "This world is not about a man who was not hurt. It is about a man who was hurt and then built an entire legal, emotional, and spiritual architecture around the wound until the defense became the larger theft.",

    worldEssaySubtitle:
      "A world where emptiness becomes loyal enough to be mistaken for peace.",

    worldEssay: [],

    worldPressurePoint:
      "The moment the man realizes the thieves are gone, yet he is still guarding the room.",

    worldThreat:
      "The danger that self-protection will become so valuable that the self begins mistaking isolation for freedom.",

    worldReversal:
      "The man wins his case and loses his life to the emptiness he successfully defended.",

    worldContradiction:
      "He protects himself from being robbed again by surrendering the very freedom and vulnerability that made him alive.",

    worldWound:
      "The belief that because love once took something from him, the safest life is one in which nothing can enter and nothing can be taken.",

    protagonist: "The Man",

    centralConflict:
      "The man must confront whether the emptiness he defended is truly peace or a self-made prison built from unresolved grief.",

    moralDilemma:
      "If past love genuinely wounded him, is he justified in withdrawing from future risk — or does that withdrawal become a second, self-inflicted robbery?",

    antagonistForce:
      "Fear disguised as wisdom, grief hardened into law, and Emptiness transformed from coping mechanism into companion and governing presence.",

    setting:
      "A symbolic interior courtroom beneath the ribs, an aging Brooklyn apartment, the Court of the Heart, and the metaphysical domestic space where Emptiness becomes a living companion.",

    systemLogic:
      "The inner system converts emotional injury into legal evidence, turns vulnerability into liability, treats silence as insurance, and rewards isolation as proof of self-possession until the protected self becomes unreachable.",

    commodifiedElement:
      "Vulnerability.",

    whatIsBeingPriced:
      "Trust, openness, love, emotional risk, silence, solitude, control, safety, and the right to remain unhurt.",

    whatIsBeingLost:
      "Freedom, aliveness, intimacy, surprise, responsiveness, joy, and the ability to want more than nothing.",

    whatIsBeingProtected:
      "The illusion that an untouched heart is a free heart, and that emptiness can offer the permanence love could not.",

    compass: {
      market: "Souls",
      primaryIdeas: [
        "Heartbreak",
        "Emptiness",
        "Self-protection",
        "Vulnerability",
        "Freedom",
        "The inner economy of the self"
      ],
      pressurePoint:
        "The discovery that guarding the wound has become more costly than the wound itself.",
      threat:
        "A life so protected from loss that it becomes protected from life.",
      contradiction:
        "The defense built to preserve the self becomes the mechanism by which the self disappears."
    },

    atlasConnections: [
      {
        slug: "the-long-goodbye",
        title: "The Long Goodbye",
        relationship:
          "Both worlds explore grief, absence, and the difference between preserving what is gone and continuing to live after loss."
      },
      {
        slug: "proxy",
        title: "Proxy",
        relationship:
          "Both worlds examine loneliness and the temptation to choose relief over inhabited vulnerability."
      },
      {
        slug: "the-number",
        title: "The Number",
        relationship:
          "Both worlds treat intimate history as evidence, asking whether a person can survive being reduced to a ledger."
      },
      {
        slug: "blackmail-black-male",
        title: "Blackmail, Black Male",
        relationship:
          "Both worlds stage an internal reckoning where survival strategies become prisons that must be reorganized into wholeness."
      }
    ],

    relatedIdeas: [
      {
        idea: "Emotional accounting",
        reason:
          "The man turns heartbreak into a ledger of what was taken and uses that ledger to justify isolation."
      },
      {
        idea: "Safety as captivity",
        reason:
          "The locks protect him from intrusion but also prevent life from entering."
      },
      {
        idea: "Emptiness as companion",
        reason:
          "The story personifies nothingness as loyal, domestic, and comforting before revealing its cost."
      },
      {
        idea: "The appeal of meaning",
        reason:
          "The man does not deny the wound; he appeals the meaning he gave it."
      }
    ],

    relatedMarkets: [
      {
        market: "Hearts",
        reason:
          "The story begins with love, heartbreak, intimacy, and the fear of romantic injury."
      },
      {
        market: "Minds",
        reason:
          "The courtroom structure dramatizes self-justification, internal argument, memory, and rationalization."
      },
      {
        market: "Systems",
        reason:
          "The novella turns the psyche into a legal system with evidence, verdicts, appeals, and sentencing."
      }
    ],

    authorNote:
      "This world belongs to The Commodified Self because it shows commodification without external machinery. The Robbery is about the inner market of the heart: how grief becomes a ledger, safety becomes possession, and emptiness becomes the most loyal thing a wounded self owns.",

    originNote:
      "The novella grew from the idea of treating heartbreak as a trial, where a man claims he was robbed by love and defends the locks, chains, and walls he built afterward. It later expanded by personifying Emptiness as the companion who kept him alive while also revealing what he had abandoned.",

    excerpt: {
      status: "available",
      label: "The Indictment",
      teaser:
        "A man stands trial inside his own heart, accused of defending empty space.",
      text: [
        "The courtroom was not in any building the city could claim.",
        "You stand accused of isolation in the first degree.",
        "Not guilty, he said. I was robbed."
      ]
    },

    seoDescription:
      "The Robbery is a metaphysical novella in The Commodified Self anthology about heartbreak, loneliness, emotional self-protection, emptiness, vulnerability, freedom, and the inner economy of the self."
  }
];

export const getWorldBySlug = (slug: string) =>
  worlds.find((world) => world.slug === slug);
