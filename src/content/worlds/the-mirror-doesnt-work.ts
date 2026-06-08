
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
    slug: "the-mirror-doesnt-work",
    title: "The Mirror Doesn’t Work",
    subtitle: "The Gaze We Inherited",
    market: "Minds",

    cover: "/covers/the-mirror-doesnt-work.jpg",
    hero: "/heroes/the-mirror-doesnt-work-hero.jpg",

    status: "draft",
    anthologyPosition: 7,

    logline:
      "In a society where state-issued mirrors algorithmically distort Black reflections for public safety, a technician begins restoring true images and discovers that truth can heal, destabilize, and destroy.",

    premise:
      "All mirrors are controlled by the Department of Visual Wellness, which claims to optimize social cohesion by calibrating reflections. For Black citizens, these calibrations subtly intensify threat: darker shadows, harder eyes, sharper jaws, muted softness. Naya Mbeki, a Reflection Technician, begins secretly resetting mirrors to show true reflections, while Omari Fisher, a school resource officer whose identity depends on curated hardness, begins unraveling when his own softness is returned to him.",

    synopsisShort:
      "The Mirror Doesn’t Work is a speculative dystopian novella about algorithmic reflection, internalized anti-Blackness, and the inherited gaze. It follows Naya, a technician who restores true reflections, Omari, an enforcer whose identity collapses when softness returns, and children like Malik who must learn to separate themselves from the monster the mirror trained them to see.",

    synopsisLong: [
      "In a future society, mirrors are no longer neutral objects. State-issued reflective systems are managed by the Department of Visual Wellness, which uses Emotional Harmonization Filters to optimize behavior, reduce conflict, and preserve social order.",
      "Naya Mbeki, a Level III Reflection Technician, notices that Black children’s reflections are being subtly altered: shadows deepened, skin desaturated, eyes sharpened, mouths curved downward. The changes are small enough to be denied but powerful enough to shape self-perception.",
      "After witnessing a girl describe feeling like someone expected to fight, and later seeing a boy named Isaiah smile after a true reflection reset, Naya begins secretly restoring mirrors to Default Neutral using buried baseline recovery code.",
      "Omari Fisher, a Black school resource officer who has built his life around control, discipline, and hardness, encounters his unfiltered reflection and is destabilized by the softness he thought he had erased. His identity, built on institutional approval and fear of vulnerability, begins to collapse.",
      "Malik, an eleven-year-old in juvenile intake, sees his real face after a reset and briefly experiences recognition. When the system restores the distorted mirror, he learns to name the projected monster as separate from himself.",
      "The Department audits Naya, frames her resets as psychological danger, and uses data to argue that truth produces instability. Students eventually discover and spread her patch, turning true reflection into a quiet contagion.",
      "Naya’s final act is to release Reflex Zero, a system-wide reset that returns all mirrors to authentic reflection for twenty-four hours. The results are ambiguous: some people heal, some break, some riot, and some disappear. The world must confront what it has been trained to see."
    ],

    coreQuestion:
      "What happens when the image you inherit of yourself was designed to make you fear your own reflection?",

    secondaryQuestions: [
      "Can truth heal people who have built survival around a lie?",
      "What happens when oppression becomes internalized through repeated self-image?",
      "Is stability worth preserving if it requires distorted identity?",
      "Who owns the right to decide how a person sees themselves?",
      "Can softness return without causing collapse?",
      "What if violence begins as a projection taught by the mirror?",
      "When does correction become control?"
    ],

    themes: [
      "algorithmic anti-Blackness",
      "internalized oppression",
      "self-image",
      "racialized perception",
      "the inherited gaze",
      "commodified perception",
      "identity collapse",
      "truth versus stability",
      "softness and Black masculinity",
      "surveillance",
      "state wellness language",
      "youth conditioning",
      "respectability and authority",
      "self-recognition",
      "rebellion through truth"
    ],

    ideas: [
      "The mirror as policy",
      "The inherited gaze",
      "Reflection as behavioral programming",
      "Truth as destabilization",
      "The monster as projection",
      "Softness as forbidden selfhood",
      "Calibration as control",
      "Identity-as-trajectory",
      "Internalized anti-Blackness",
      "The commodification of perception",
      "Reflex Zero",
      "The unfiltered self"
    ],

    whyThisWorldExists:
      "To explore how perception becomes a system of control when people are trained to see themselves through hostile projections. This world exists to dramatize internalized oppression as a literal reflective technology and to ask whether truth can restore the self after the lie has become identity.",

    worldEssayAngle:
      "This world is not about broken mirrors. It is about a society that makes the mirror work too well as an instrument of racial conditioning, until true reflection becomes the most dangerous malfunction.",

    worldEssaySubtitle:
      "A world where the reflected self is edited before it reaches the soul.",

    worldEssay: [],

    worldPressurePoint:
      "The moment a true reflection heals one person and destabilizes another, revealing that the lie has become load-bearing.",

    worldThreat:
      "The greatest danger is not only being misseen by others, but being trained to missee yourself until you participate in your own containment.",

    worldReversal:
      "The mirrors begin failing only when they start showing the truth.",

    worldContradiction:
      "The system claims distorted reflection prevents danger, while manufacturing the very enemy-image it then manages as proof of necessity.",

    worldWound:
      "A people are taught to see threat, hardness, and suspicion in their own faces before they can recognize softness, innocence, or grief.",

    protagonist: "Naya Mbeki",

    centralConflict:
      "Naya must decide whether to preserve a calibrated system that maintains social order or restore true reflection even when truth may destabilize people who have built identities around distortion.",

    moralDilemma:
      "If authentic self-recognition causes confusion, rage, or collapse in people conditioned by lies, does that make truth dangerous — or does it reveal the violence of the lie?",

    antagonistForce:
      "The Department of Visual Wellness, algorithmic calibration, racialized perception systems, and the internalized gaze that makes distorted identity feel safer than truth.",

    setting:
      "A near-future urban society of state-issued smart mirrors, schools, juvenile facilities, compliance centers, technician routes, visual wellness audits, and communities shaped by algorithmic self-perception.",

    systemLogic:
      "The system treats reflection as behavioral infrastructure. It uses subtle visual edits to produce predictable self-concepts, reduce visible conflict, and guide people toward approved trajectories, while framing true reflection as psychologically destabilizing.",

    commodifiedElement:
      "Perception.",

    whatIsBeingPriced:
      "The right to see oneself clearly, emotional safety, social compliance, softness, innocence, Black self-recognition, and the difference between visibility and sovereignty.",

    whatIsBeingLost:
      "Authentic self-image, trust in one’s own face, access to vulnerability, childhood softness, and the ability to distinguish the self from the projected enemy-image.",

    whatIsBeingProtected:
      "A social order that prefers predictable, calibrated identities over sovereign, unfiltered selves.",

    compass: {
      market: "Minds",
      primaryIdeas: [
        "Algorithmic perception",
        "Internalized anti-Blackness",
        "Self-image as control",
        "Truth as rupture",
        "Softness and identity",
        "The inherited gaze"
      ],
      pressurePoint:
        "The moment true reflection reveals not only the person, but the psychological damage caused by years of distortion.",
      threat:
        "A society that can edit the self before the self sees itself.",
      contradiction:
        "The mirrors are justified as protection, but their protection depends on making people afraid of their own humanity."
    },

    atlasConnections: [
      {
        slug: "blackmail-black-male",
        title: "Blackmail, Black Male",
        relationship:
          "Both worlds explore how Black identity is shaped by coercive survival scripts that make softness feel dangerous."
      },
      {
        slug: "the-last-frequency",
        title: "The Last Frequency",
        relationship:
          "Both worlds ask whether a people can survive severance from what shaped them, and whether what is discarded returns as reckoning."
      },
      {
        slug: "proxy",
        title: "Proxy",
        relationship:
          "Both worlds examine the self through external response systems: Proxy through desire and visibility, The Mirror Doesn’t Work through reflection and racialized perception."
      },
      {
        slug: "the-number",
        title: "The Number",
        relationship:
          "Both worlds turn intimate selfhood into legible public data, showing how measurement changes identity."
      }
    ],

    relatedIdeas: [
      {
        idea: "The inherited gaze",
        reason:
          "The mirror reproduces the hostile social gaze until it becomes internal self-perception."
      },
      {
        idea: "Truth as destabilization",
        reason:
          "The story refuses the easy belief that truth always comforts; sometimes it ruptures identities built on lies."
      },
      {
        idea: "The monster as projection",
        reason:
          "Malik’s arc shows how a child can be trained to see a monster, then reclaim the boundary between projection and self."
      },
      {
        idea: "Calibration as control",
        reason:
          "The Department frames identity manipulation as wellness, safety, and social harmony."
      }
    ],

    relatedMarkets: [
      {
        market: "Systems",
        reason:
          "The story is driven by state infrastructure, compliance protocols, audits, predictive behavior systems, and institutional language."
      },
      {
        market: "Bodies",
        reason:
          "The face, skin tone, eyes, jaw, posture, and bodily presentation become sites of algorithmic management."
      },
      {
        market: "Souls",
        reason:
          "The deeper question is whether a person can recover dignity and softness after learning to hate their own reflection."
      }
    ],

    authorNote:
      "This world belongs to The Commodified Self because it makes perception itself the marketplace. The Mirror Doesn’t Work asks what happens when self-image is curated for public consumption, and when the most radical act is seeing yourself without the system’s permission.",

    originNote:
      "The novella grew from the idea of visualizing internalized oppression through a literal broken mirror: a society where Black people’s reflections are calibrated to confirm the pain, danger, and suspicion projected onto them.",

    excerpt: {
      status: "available",
      label: "A Little Off",
      teaser:
        "Naya discovers that a school mirror has been subtly teaching a girl to see herself as harder than she is.",
      text: [
        "The mirrors did most of the talking.",
        "The girl shrugged. \"Like I’m not me. Like... I’m someone people expect to fight.\"",
        "Naya nodded. \"It was never broken.\""
      ]
    },

    seoDescription:
      "The Mirror Doesn’t Work is a speculative dystopian novella in The Commodified Self anthology about algorithmic anti-Blackness, state-issued mirrors, internalized oppression, perception, racialized self-image, and the inherited gaze."
  }
];

export const getWorldBySlug = (slug: string) =>
  worlds.find((world) => world.slug === slug);
