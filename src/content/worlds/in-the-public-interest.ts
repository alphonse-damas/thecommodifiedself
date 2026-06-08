
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
    slug: "in-the-public-interest",
    title: "In the Public Interest",
    subtitle: "The Price of Consent",
    market: "Bodies",

    cover: "/covers/in-the-public-interest.jpg",
    hero: "/heroes/in-the-public-interest-hero.jpg",

    status: "draft",
    anthologyPosition: 2,

    logline:
      "When a vaccine capable of saving alien civilizations can only be produced through continual extraction from living Black donors, humanity must decide whether consent is a principle or a luxury.",

    premise:
      "After alien civilizations arrive seeking help against a plague that erases civilizational memory, Earth discovers that the cure depends on a biological extract disproportionately found in Black bodies. What begins as humanitarian cooperation becomes a global crisis over consent, emergency power, bodily sovereignty, and whether the public interest can claim ownership over people it has not asked.",

    synopsisShort:
      "In the Public Interest is a speculative novella about a galactic medical crisis that exposes humanity’s unresolved relationship with Black bodies, consent, and state power. As dying worlds demand a cure, governments transform voluntary participation into compulsory extraction, forcing Black communities to confront an old question in a new form: who owns the body when everyone claims to need it?",

    synopsisLong: [
      "Alien vessels arrive in Earth’s orbit not as conquerors, but as petitioners. Their civilization is being destroyed by the Veil, a plague that erases knowledge, memory, and the ability of societies to sustain themselves. Humanity rallies around the mission to save billions across the stars.",
      "The breakthrough begins with Darius Bell, an incarcerated Black man identified as Subject 3471 in a federal biomedical trial. His biological sample produces the first viable pathway toward a vaccine. The discovery is celebrated globally, but the conditions under which the research was conducted are largely ignored.",
      "Scientists soon reveal that the vaccine cannot be synthesized. It requires continual extraction from living donors, primarily Black people across the diaspora. Governments, corporations, and alien representatives begin drafting logistics, trade arrangements, compensation structures, and donor systems before affected communities are meaningfully consulted.",
      "Black communities respond not by rejecting aid, but by rejecting assumption. They demand consent, representation, governance, and ownership over the terms of participation. As alien deaths rise and public pressure intensifies, the language of cooperation shifts toward obligation.",
      "Emergency powers are invoked. Voluntary programs become registration systems. Registration becomes mandatory extraction schedules. The public interest becomes the moral language through which bodily sovereignty is suspended.",
      "The crisis ultimately reveals that the biological extract was not Earth’s rarest resource. The rarest resource was consent — and humanity’s willingness to preserve it when freedom became expensive."
    ],

    coreQuestion:
      "What happens when the public interest demands something that does not belong to the public?",

    secondaryQuestions: [
      "Is freedom a principle, or merely a convenience preserved only when survival is not at stake?",
      "Can a society save lives without converting vulnerable people into resources?",
      "When does humanitarian necessity become coercion?",
      "Who has the authority to decide what another group must sacrifice?",
      "Can consent be real when refusal has already been planned around?",
      "What is the difference between being valued as a person and valued as a resource?"
    ],

    themes: [
      "bodily sovereignty",
      "consent",
      "emergency powers",
      "Black agency",
      "medical ethics",
      "state coercion",
      "utilitarian morality",
      "historical memory",
      "the legacy of slavery",
      "Tuskegee and medical distrust",
      "resource extraction",
      "collective survival versus individual autonomy",
      "public good as moral cover",
      "the politics of refusal"
    ],

    ideas: [
      "The public interest as a moral weapon",
      "Consent under emergency pressure",
      "Black bodies as civic inventory",
      "Humanitarian coercion",
      "Dependence mistaken for entitlement",
      "Emergency exceptions becoming policy",
      "The difference between consultation and assumption",
      "The body as resource",
      "Freedom when freedom becomes expensive"
    ],

    whyThisWorldExists:
      "To test whether a society’s commitment to freedom survives when freedom becomes costly. This world exists to expose how quickly consent can be reframed as obstruction when the body of a historically exploited people becomes necessary to collective survival.",

    worldEssayAngle:
      "This world is not about whether billions of lives are worth saving. It is about who possesses the authority to decide how those lives will be saved, and whose body may be converted into the instrument of rescue.",

    worldEssaySubtitle:
      "A world where emergency turns consent into an inconvenience and need begins to sound like ownership.",

    worldEssay: [],

    worldPressurePoint:
      "The moment the need for a cure becomes an assumed right of access to Black bodies.",

    worldThreat:
      "The greatest danger is that genuine compassion becomes indistinguishable from coercion once suffering is used to make refusal morally impossible.",

    worldReversal:
      "Humanity saves the galaxy, but the rescue reveals that its commitment to freedom was conditional all along.",

    worldContradiction:
      "The system claims to defend life while suspending the bodily sovereignty that gives life moral value.",

    worldWound:
      "A people historically treated as extractable are once again told that their bodies are needed for the good of others, and that refusal makes them morally suspect.",

    protagonist: "Darius Bell / Subject 3471",

    centralConflict:
      "Darius Bell and Black communities across the diaspora must confront a global emergency that needs their bodies while refusing to accept a framework that treats their consent as secondary to survival logistics.",

    moralDilemma:
      "If billions can be saved only through continual extraction from a specific population, does moral obligation justify overriding that population’s right to refuse?",

    antagonistForce:
      "The combined pressure of state emergency power, humanitarian urgency, corporate logistics, public opinion, and historical entitlement disguised as the public good.",

    setting:
      "A future Earth integrated into a wider interstellar crisis, moving between alien diplomatic spaces, biomedical research facilities, prisons, public protests, government chambers, and compulsory extraction centers.",

    systemLogic:
      "The system begins with voluntary cooperation, then uses urgency, suffering, legal language, public sentiment, and emergency authority to convert consent into obligation. It never calls itself coercive; it calls itself necessary.",

    commodifiedElement:
      "Bodily sovereignty.",

    whatIsBeingPriced:
      "Black biological extract, consent, participation, compensation, access to the body, and the moral cost of refusal.",

    whatIsBeingLost:
      "The right to say no without being treated as a threat to civilization; the distinction between personhood and resource value.",

    whatIsBeingProtected:
      "The survival of alien worlds, the legitimacy of human institutions, the appearance of humanitarian virtue, and the public’s belief that necessity can remain morally clean.",

    compass: {
      market: "Bodies",
      primaryIdeas: [
        "Bodily sovereignty",
        "Consent under pressure",
        "Emergency power",
        "Black agency",
        "The public good as moral cover",
        "Resource extraction"
      ],
      pressurePoint:
        "The moment voluntary participation becomes too insufficient for the scale of need.",
      threat:
        "A society discovering that it can suspend consent whenever the emergency is large enough.",
      contradiction:
        "The crisis is real, the suffering is real, and yet the reality of suffering does not automatically create ownership over another person’s body."
    },

    atlasConnections: [
      {
        slug: "blackmail-black-male",
        title: "Blackmail, Black Male",
        relationship:
          "Both worlds examine Black life under coercive systems that call containment protection and convert survival into compliance."
      },
      {
        slug: "the-last-frequency",
        title: "The Last Frequency",
        relationship:
          "Both worlds center memory, inheritance, and the danger of civilizations forgetting the moral histories that made the present possible."
      },
      {
        slug: "the-second-burning",
        title: "The Second Burning",
        relationship:
          "Both worlds examine what societies preserve and what they quietly rewrite when survival or order becomes the dominant value."
      },
      {
        slug: "proxy",
        title: "Proxy",
        relationship:
          "Both worlds explore the commodification of access to another person’s body or experience, though one does so through humanitarian necessity and the other through technological desire."
      }
    ],

    relatedIdeas: [
      {
        idea: "Consent is not selfish",
        reason:
          "The novella separates willingness to help from surrendering the right to decide the terms of help."
      },
      {
        idea: "Emergency as moral laundering",
        reason:
          "The crisis allows coercive policies to appear humane because the need is genuine."
      },
      {
        idea: "Historical memory",
        reason:
          "Black distrust is not paranoia; it is memory being treated as an obstacle by institutions."
      },
      {
        idea: "Being valued versus being owned",
        reason:
          "The donor population becomes indispensable, yet indispensability does not produce equal authority."
      }
    ],

    relatedMarkets: [
      {
        market: "Systems",
        reason:
          "The story is driven by state power, emergency law, bureaucratic euphemism, and institutional decision-making."
      },
      {
        market: "Souls",
        reason:
          "The crisis asks whether moral civilization can survive the temptation to sacrifice principle for survival."
      },
      {
        market: "Minds",
        reason:
          "Public opinion, propaganda, framing, and moral pressure reshape what people believe consent means."
      }
    ],

    authorNote:
      "This world belongs to The Commodified Self because it exposes one of the oldest forms of commodification: the conversion of a vulnerable population’s body into a public resource. The story does not deny the urgency of saving lives. It asks whether urgency can ever erase ownership of the self.",

    originNote:
      "The novella grew from the question of what happens when Black refusal is treated not as agency, but as obstruction. It extends the historical logic of slavery, medical exploitation, and emergency state power into a speculative future where humanity’s noblest mission revives its oldest moral failure.",

    excerpt: {
      status: "available",
      label: "The Good of the Many",
      teaser:
        "A future historian explains that the plague tested the galaxy, but the response tested humanity.",
      text: [
        "The question was never whether billions of lives were worth saving.",
        "The question was who possessed the authority to decide how those lives would be saved.",
        "A society's commitment to freedom is not measured when freedom is convenient. It is measured when freedom becomes expensive."
      ]
    },

    seoDescription:
      "In the Public Interest is a speculative novella in The Commodified Self anthology about Black bodily sovereignty, consent, emergency powers, medical ethics, alien plague, and the public good as moral coercion."
  }
];

export const getWorldBySlug = (slug: string) =>
  worlds.find((world) => world.slug === slug);
