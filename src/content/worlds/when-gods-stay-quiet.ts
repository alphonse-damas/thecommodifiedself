
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
    slug: "when-gods-stay-quiet",
    title: "When Gods Stay Quiet",
    subtitle: "The Harm of Inaction",
    market: "Souls",

    cover: "/covers/when-gods-stay-quiet.jpg",
    hero: "/heroes/when-gods-stay-quiet-hero.jpg",

    status: "draft",
    anthologyPosition: 12,

    logline:
      "A godlike protector who stayed silent during a racial murder is summoned before a cosmic tribunal and forced to confront the spiritual cost of unused power.",

    premise:
      "Halion, a godlike being raised in Iowa to value politeness, restraint, and noninterference, becomes a celebrated hero while avoiding the moral risk of confronting human racism. In 1955 Mississippi, he watches the lynching of a young Black boy echoing Emmett Till and chooses not to intervene. Years later, the Varkari summon him before the Council of Reckoning, where he is tried not for violence, but for the harm of inaction.",

    synopsisShort:
      "When Gods Stay Quiet is a speculative moral tribunal about silence, complicity, power, witness, and unused capacity. Through Halion, Aruun, Vael, and the Council of Reckoning, the novella asks whether neutrality is ever innocent when one has the power to act.",

    synopsisLong: [
      "The story opens with Halion witnessing a lynching in Mississippi in 1955. He has the power to stop the murder but remains still, telling himself that gods should not interfere with human affairs.",
      "The narrative then traces Halion’s upbringing on the Langston farm in Iowa, where he learns that goodness is associated with calmness, politeness, distance, and staying quiet. He becomes a public hero who saves people from natural disasters while avoiding morally charged human injustice.",
      "Halion’s internal wound deepens through jealousy, belonging, racial conditioning, and the discovery that power cannot command desire. His silence in Mississippi is revealed not as pure restraint, but as fear, self-preservation, and unresolved resentment.",
      "The Varkari arrive and summon Halion before the Tribunal of Observed Harm. The Council of Reckoning charges him with the harm of inaction, placing his memories into evidence.",
      "The trial becomes a philosophical battle between responsibility and mercy. Aruun insists that power creates obligation, while Vael argues that Halion’s failure was learned from the world that raised him.",
      "Halion eventually confesses that his silence was not neutrality. He stayed still because acting would have shattered the identity and belonging he was trying to protect.",
      "The Tribunal itself is then challenged. Halion and Vael expose the hypocrisy of cosmic watchers who record harm after the fact while claiming nonintervention as duty.",
      "Halion is sentenced not to death, but to awareness. He returns to Earth as an ordinary Black man, forced to live with the gravity of every silence he once ignored.",
      "The epilogue leaves Halion neither healed nor absolved, but awake to the truth that peace is not innocence and restraint is not always virtue."
    ],

    coreQuestion:
      "When power is present but unused, who pays the price?",

    secondaryQuestions: [
      "Is silence ever neutral in the presence of injustice?",
      "Can restraint become complicity?",
      "Does upbringing explain moral failure, or only contextualize it?",
      "What is the responsibility of a witness who has the power to intervene?",
      "Can memory without action become another form of cruelty?",
      "Is judgment possible when every judge is also implicated?",
      "What does mercy look like when awareness cannot undo harm?"
    ],

    themes: [
      "silence",
      "complicity",
      "moral responsibility",
      "unused power",
      "witness",
      "neutrality",
      "racial violence",
      "Emmett Till",
      "cosmic judgment",
      "memory as evidence",
      "mercy and accountability",
      "restraint",
      "self-deception",
      "belonging",
      "the cost of civility",
      "awareness as punishment"
    ],

    ideas: [
      "The harm of inaction",
      "Silence as consent",
      "The Council of Reckoning",
      "The Varkari",
      "The Tribunal of Observed Harm",
      "Memory as evidence",
      "Power without moral courage",
      "Neutrality as strategy",
      "Witness without intervention",
      "Plausible deniability",
      "Gravity as ethics",
      "Peace without absolution",
      "The mirror of conscience"
    ],

    whyThisWorldExists:
      "To examine the moral cost of silence when someone has the capacity to intervene. This world exists to challenge the comforting belief that doing nothing is harmless, especially when stillness protects the powerful and abandons the vulnerable.",

    worldEssayAngle:
      "This world is not about whether a god can stop violence. It is about why someone with power chooses not to, and how civility, distance, and restraint can become moral disguises for complicity.",

    worldEssaySubtitle:
      "A world where silence is placed on trial and neutrality loses its innocence.",

    worldEssay: [],

    worldPressurePoint:
      "The moment Halion admits that his silence preserved his belonging more than it preserved justice.",

    worldThreat:
      "The greatest danger is a world where the powerful can witness harm, call their restraint wisdom, and leave the vulnerable to pay for that moral comfort.",

    worldReversal:
      "The god who judged human violence from above is returned to Earth as a human body forced to feel the weight of the silences he once escaped.",

    worldContradiction:
      "Halion is celebrated as a protector while avoiding the kinds of protection that would require him to confront history, racism, belonging, and his own self-deception.",

    worldWound:
      "A boy is murdered while a god watches, and the universe must confront whether witnessing without intervention is another form of participation.",

    protagonist: "Halion",

    centralConflict:
      "Halion must face whether his lifelong restraint was moral discipline or a strategy for preserving belonging, admiration, and innocence while others suffered the cost of his silence.",

    moralDilemma:
      "If a being has the power to intervene in injustice but has been taught that noninterference is virtue, is their silence understandable, forgivable, complicit, or all three?",

    antagonistForce:
      "The doctrine of stillness: a moral culture of civility, neutrality, detachment, cosmic nonintervention, racial conditioning, and institutional witness that makes silence appear righteous.",

    setting:
      "A mythic version of Earth moving from Iowa farms and Mississippi barns to cosmic tribunals, memory chambers, Millhaven streets, and the mortal world where divine detachment is replaced by human gravity.",

    systemLogic:
      "The system teaches Halion that goodness is calm, restraint, and belonging. Public heroism is rewarded when it does not threaten social order, while morally disruptive intervention is framed as choosing sides. The Tribunal preserves harm as record, revealing that even cosmic institutions can mistake observation for justice.",

    commodifiedElement:
      "Moral innocence.",

    whatIsBeingPriced:
      "Belonging, public admiration, peace, neutrality, restraint, reputation, heroic identity, and absolution without risk.",

    whatIsBeingLost:
      "Justice, intervention, courage, moral clarity, the boy’s life, Halion’s integrity, and the possibility of innocence after chosen silence.",

    whatIsBeingProtected:
      "The comforting identity of the good, restrained, neutral observer who can remain beloved without disrupting injustice.",

    compass: {
      market: "Souls",
      primaryIdeas: [
        "Silence as complicity",
        "Power and responsibility",
        "Witness",
        "Mercy and judgment",
        "Moral innocence",
        "Awareness as punishment"
      ],
      pressurePoint:
        "The moment silence is revealed not as restraint, but as strategy.",
      threat:
        "A moral universe where power can remain present, inactive, and still call itself good.",
      contradiction:
        "The same restraint praised as virtue becomes complicity when it protects the powerful from the cost of acting."
    },

    atlasConnections: [
      {
        slug: "the-vanishing-variable",
        title: "The Vanishing Variable",
        relationship:
          "Both worlds examine racial harm, institutional denial, witness, and societies that preserve moral comfort through distance from accountability."
      },
      {
        slug: "in-the-public-interest",
        title: "In the Public Interest",
        relationship:
          "Both worlds ask whether moral language can disguise harm: one through public necessity, the other through restraint and noninterference."
      },
      {
        slug: "blackmail-black-male",
        title: "Blackmail, Black Male",
        relationship:
          "Both worlds explore how survival scripts, racial conditioning, and fear of rupture shape moral and psychological selfhood."
      },
      {
        slug: "the-robbery",
        title: "The Robbery",
        relationship:
          "Both worlds stage an interior trial where the accused must reconsider the meaning of a defense that once seemed justified."
      }
    ],

    relatedIdeas: [
      {
        idea: "Silence as action",
        reason:
          "The novella treats inaction not as absence, but as a consequential choice that redistributes harm."
      },
      {
        idea: "Memory as evidence",
        reason:
          "Halion’s memories become the record through which his choices are judged."
      },
      {
        idea: "Neutrality as strategy",
        reason:
          "Halion’s neutrality protects his identity and belonging while abandoning the vulnerable."
      },
      {
        idea: "Witness without intervention",
        reason:
          "The Tribunal’s own role complicates the morality of record-keeping without rescue."
      }
    ],

    relatedMarkets: [
      {
        market: "Systems",
        reason:
          "The story depends on tribunals, cosmic law, doctrines of noninterference, racial systems, and institutional record-keeping."
      },
      {
        market: "Minds",
        reason:
          "Halion’s self-deception, rationalizations, memory, and internal moral reframing drive the trial."
      },
      {
        market: "Bodies",
        reason:
          "The moral crisis begins with racialized bodily violence and ends with Halion returned to the vulnerability of flesh."
      }
    ],

    authorNote:
      "This world belongs to The Commodified Self because it examines the market in moral innocence. Halion trades intervention for belonging, courage for restraint, and justice for the comfort of being seen as good. When Gods Stay Quiet asks whether a self can remain innocent when it preserves its image by refusing to act.",

    originNote:
      "The novella grew from the question of divine silence in the face of racial violence, filtered through the image of a godlike protector who could have saved a child but chose not to. It became a broader meditation on witness, nonintervention, institutional hypocrisy, and the weight of silence.",

    excerpt: {
      status: "available",
      label: "The Reckoning Not Chosen",
      teaser:
        "Halion hears the boy dying in Mississippi and chooses silence.",
      text: [
        "He could hear it all.",
        "He had stopped hurricanes. Caught bullets in mid-air.",
        "And Halion did nothing."
      ]
    },

    seoDescription:
      "When Gods Stay Quiet is a speculative moral tribunal novella in The Commodified Self anthology about silence, complicity, unused power, racial violence, Emmett Till, cosmic judgment, witness, mercy, and the harm of inaction."
  }
];

export const getWorldBySlug = (slug: string) =>
  worlds.find((world) => world.slug === slug);
