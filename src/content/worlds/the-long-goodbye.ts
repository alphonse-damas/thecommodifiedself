
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
    slug: "the-long-goodbye",
    title: "The Long Goodbye",
    subtitle: "The Atlas of Forgetting",
    market: "Souls",

    cover: "/covers/the-long-goodbye.jpg",
    hero: "/heroes/the-long-goodbye-hero.jpg",

    status: "draft",
    anthologyPosition: 6,

    logline:
      "A linguist losing his wife to early-onset Alzheimer’s tries to preserve her through language, recordings, and data, only to learn that love survives not by keeping, but by listening.",

    premise:
      "Gabriel, a middle-aged linguist, watches his wife Elara, a former poet, slowly disappear into early-onset Alzheimer’s. As her words, memories, and recognition fade, he begins recording and cataloging her decline, hoping to preserve her. What begins as rational documentation becomes an intimate confrontation with grief, caregiving, mercy, guilt, art, silence, and the discovery that memory cannot be owned without being changed.",

    synopsisShort:
      "The Long Goodbye is a literary novella about compound grief: losing someone once while they are still alive, then again after death. Through Gabriel and Elara, the story explores the limits of logic, the body as final language, art as witness, the guilt of mercy, and the realization that the opposite of forgetting is not remembering, but listening.",

    synopsisLong: [
      "Gabriel, a linguist, first notices Elara’s decline when she forgets the word window and calls it a clear wall. Terrified by what this means, he turns her illness into notes, charts, recordings, and spreadsheets, believing that if he can document the erosion of language, he might preserve the woman he loves.",
      "As Elara’s speech deteriorates, Gabriel’s faith in logic begins to fail. Words give way to gestures. Touch becomes syntax. Feeding, bathing, holding, and listening become the last surviving grammar between them.",
      "Gabriel then turns to art, editing Elara’s fragments, breath, household sounds, and invented phrases into sound compositions. At first, art becomes another attempt to rescue her, but gradually he learns that creation cannot save what is vanishing; it can only witness it.",
      "The novella enters the silent period between two deaths: Elara remains physically alive, but much of the person Gabriel knew has disappeared. Exhaustion and devotion merge. Gabriel feels guilty for wishing her suffering would end, exposing the painful contradiction many caregivers carry.",
      "After Elara’s death, Gabriel revisits the recordings and discovers that her fragmented language still forms rhythm, pattern, and presence. He begins building an Atlas of Forgetting, not to preserve what was lost, but to understand how love continues in altered form.",
      "By the end, Gabriel abandons ownership of memory and learns to listen without needing to keep. Elara remains not as data, ghost, or artifact, but as rhythm — a continuity beyond comprehension."
    ],

    coreQuestion:
      "If memory disappears, what remains of love?",

    secondaryQuestions: [
      "Is remembering an act of devotion, or can it become possession?",
      "Can logic help us grieve, or does it merely organize the debris?",
      "What happens when language fails but love remains?",
      "Can forgetting be grace rather than betrayal?",
      "How does a caregiver survive the guilt of wishing suffering would end?",
      "What is the difference between preserving someone and continuing to be changed by them?",
      "Can silence become a language?"
    ],

    themes: [
      "compound grief",
      "Alzheimer’s",
      "memory",
      "caregiving",
      "language",
      "loss",
      "mercy and guilt",
      "the body as communication",
      "art as witness",
      "silence",
      "forgetting",
      "love after comprehension",
      "documentation versus devotion",
      "grief and integration",
      "listening"
    ],

    ideas: [
      "The double grief of dementia",
      "The atlas of forgetting",
      "The poverty of logic",
      "The body as final syntax",
      "Memory as currency",
      "Recording as reliquary",
      "Art as witness, not rescue",
      "Silence as language",
      "Mercy guilt",
      "Forgetting as grace",
      "Listening after logic",
      "Love without possession"
    ],

    whyThisWorldExists:
      "To explore what happens when memory, language, and recognition vanish, and to ask whether love can survive after comprehension fails. This world exists to move the anthology from the market of minds into the market of souls, where what is commodified is not intelligence but memory, mercy, grief, and devotion.",

    worldEssayAngle:
      "This world is not about Alzheimer’s as disease alone. It is about the grieving mind’s attempt to turn love into a preservable artifact, and the soul’s eventual discovery that love survives through listening rather than ownership.",

    worldEssaySubtitle:
      "A world where memory becomes currency, grief becomes archive, and love must learn to listen after language ends.",

    worldEssay: [],

    worldPressurePoint:
      "The silent period between two deaths, when Elara is alive but largely unreachable and Gabriel must confront the guilt of wanting her suffering to end.",

    worldThreat:
      "The danger that love, terrified of loss, will turn memory into possession and documentation into a substitute for presence.",

    worldReversal:
      "Gabriel begins by recording Elara to keep her alive, but the recordings ultimately teach him how to let her change and how to keep living.",

    worldContradiction:
      "Gabriel tries to honor Elara by preserving her, but love requires him to stop owning memory and allow meaning to survive in altered form.",

    worldWound:
      "The unbearable experience of losing a beloved twice: first through the slow disappearance of mind, and again through bodily death.",

    protagonist: "Gabriel",

    centralConflict:
      "Gabriel must move from documenting Elara’s decline as a way to control loss toward listening to her remaining presence without demanding that memory stay intact.",

    moralDilemma:
      "When a loved one is suffering and vanishing before death, is wishing for release an act of mercy, selfishness, or both?",

    antagonistForce:
      "The combined force of Alzheimer’s, grief, Gabriel’s faith in logic, the urge to preserve, and the modern impulse to turn memory into data.",

    setting:
      "An intimate domestic world centered on Gabriel and Elara’s house, including the kitchen, bedroom, garden, recordings, notebooks, university seminars, and the quiet rooms where language slowly gives way to touch and silence.",

    systemLogic:
      "The system begins inside Gabriel’s mind: loss becomes data, memory becomes archive, love becomes documentation, and grief becomes something to be organized. The story dismantles that logic until Gabriel learns that presence cannot be preserved by measurement.",

    commodifiedElement:
      "Memory.",

    whatIsBeingPriced:
      "Elara’s words, voice, gestures, recordings, fragments, breath, and the illusion that preservation can purchase permanence.",

    whatIsBeingLost:
      "Recognition, shared language, mutual memory, the old marriage, Gabriel’s certainty, and the belief that understanding can save love.",

    whatIsBeingProtected:
      "Gabriel’s hope that if he records enough, measures enough, and archives enough, he will not have to fully surrender the woman he is losing.",

    compass: {
      market: "Souls",
      primaryIdeas: [
        "Memory as love and possession",
        "Compound grief",
        "The body as final language",
        "Art as witness",
        "Silence as communion",
        "Listening after logic"
      ],
      pressurePoint:
        "The moment Gabriel realizes preserving Elara is not the same as loving her in the form she now inhabits.",
      threat:
        "A grief so afraid of forgetting that it turns the beloved into data.",
      contradiction:
        "Memory can honor love, but the attempt to keep memory unchanged can become a refusal to let love continue changing."
    },

    atlasConnections: [
      {
        slug: "the-last-frequency",
        title: "The Last Frequency",
        relationship:
          "Both worlds ask what survives when memory changes, fades, or is severed, and both argue that continuity is more important than perfect preservation."
      },
      {
        slug: "proxy",
        title: "Proxy",
        relationship:
          "Both worlds examine memory without stable ownership: Proxy through borrowed intimacy, The Long Goodbye through recorded grief and fading recognition."
      },
      {
        slug: "the-chrysalis",
        title: "The Chrysalis",
        relationship:
          "Both worlds explore transformation through loss of self, but The Long Goodbye renders that dissolution through intimate caregiving rather than biotech evolution."
      },
      {
        slug: "the-mirror-doesnt-work",
        title: "The Mirror Doesn’t Work",
        relationship:
          "Both worlds examine the failure of reflection and recognition, asking what remains when the self can no longer be seen in familiar ways."
      }
    ],

    relatedIdeas: [
      {
        idea: "The double grief of dementia",
        reason:
          "Gabriel loses Elara gradually while she is alive, then mourns again after her physical death."
      },
      {
        idea: "Documentation versus devotion",
        reason:
          "The novella asks whether recording a loved one honors them or turns them into something owned."
      },
      {
        idea: "The body as syntax",
        reason:
          "As words fail, care, touch, breath, and gesture become the remaining language of intimacy."
      },
      {
        idea: "Forgetting as grace",
        reason:
          "The story ultimately suggests that allowing memory to change is not betrayal but part of love’s continuation."
      }
    ],

    relatedMarkets: [
      {
        market: "Minds",
        reason:
          "The story begins with cognition, language, memory loss, and Gabriel’s analytic attempt to understand decline."
      },
      {
        market: "Hearts",
        reason:
          "The emotional center is marital love, devotion, grief, and the endurance of intimacy after recognition fails."
      },
      {
        market: "Bodies",
        reason:
          "Caregiving transforms the body into the last language after speech and memory begin to disappear."
      }
    ],

    authorNote:
      "This world belongs to The Commodified Self because it examines what happens when memory becomes something to archive, preserve, manage, and possess. The Long Goodbye asks whether love can survive after language fails, and whether the soul’s final act of devotion is not keeping, but listening.",

    originNote:
      "The novella grew from the experience of compound grief associated with dementia: losing someone once while they are alive and again after death. It also carries the author’s reflection on grief, memory, Roxie’s absence, and the act of writing as an attempt to translate the wound without exploiting it.",

    excerpt: {
      status: "available",
      label: "The Cowardice of Hope",
      teaser:
        "Gabriel records the first lost word and begins mistaking documentation for devotion.",
      text: [
        "The first time Elara forgot the word window, Gabriel wrote it down.",
        "He told himself the note was for the neurologist, but the line on the page looked too careful, too deliberate.",
        "Logic had become a museum he could only curate, never inhabit."
      ]
    },

    seoDescription:
      "The Long Goodbye is a literary novella in The Commodified Self anthology about Alzheimer’s, memory, grief, caregiving, language, love, silence, mercy, and listening after comprehension fails."
  }
];

export const getWorldBySlug = (slug: string) =>
  worlds.find((world) => world.slug === slug);
