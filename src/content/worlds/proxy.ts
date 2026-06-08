
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
    slug: "proxy",
    title: "Proxy",
    subtitle: "Borrowed Desire, Borrowed Memory",
    market: "Hearts",

    cover: "/covers/proxy.jpg",
    hero: "/heroes/proxy-hero.jpg",

    status: "draft",
    anthologyPosition: 3,

    logline:
      "In a society where lonely men can inhabit the nervous systems of desirable men, one subscriber discovers that borrowed desire can create borrowed memories — but not a borrowed self.",

    premise:
      "Proxy is an immersive neural platform that allows socially invisible subscribers to experience the emotional architecture of being wanted through desirable men called Primes. Elias Mercer becomes increasingly dependent on the life of Lucien Vale, a magnetic Prime whose desirability is streamed to millions. As Elias absorbs Lucien’s experiences, memories, gestures, and attachments, he must confront whether Proxy is healing loneliness or converting self-worth into rented visibility.",

    synopsisShort:
      "Proxy follows Elias Mercer, a lonely schoolteacher who uses immersive desirability streaming to inhabit Lucien Vale, a man whose life is saturated with female attention and social ease. What begins as relief becomes identity drift, borrowed memory, phantom attachment, and a crisis of selfhood. The novella explores loneliness, masculine invisibility, external validation, and the commodification of desire.",

    synopsisLong: [
      "In a future shaped by algorithmic isolation and emotional commodification, Proxy emerges as a neural streaming platform that lets subscribers experience life through the bodies and nervous systems of highly desirable people. The platform is marketed as empathy technology and wellness support, but its real product is relief from invisibility.",
      "Lucien Vale is one of Proxy’s most valuable Primes. Women move toward him easily. Rooms soften around him. Subscribers like Elias Mercer inhabit his experiences to feel what it is like to be welcomed, desired, touched, and socially received without defensive exhaustion.",
      "Elias, a history teacher living in quiet emotional isolation, becomes increasingly dependent on Lucien’s streams. Through Proxy, he experiences warmth, attraction, and intimacy that feel neurologically real despite not belonging to him. The difference between earned memory and borrowed sensation begins to collapse.",
      "Leaked Proxy documents reveal emotional classification systems, visibility tiers, dependency models, and metrics that quantify human desirability. Elias becomes obsessed with understanding why some men are socially magnetic while others remain functionally invisible.",
      "Marcus Valez, an older janitor with low desirability metrics but unusual psychological stability, challenges Elias’s worldview. Marcus argues that Proxy’s danger is not desire itself, but the interpretation that erotic recognition determines human worth.",
      "As subscribers develop phantom attachments and identity instability, Lucien himself begins unraveling under the burden of being emotional infrastructure for millions. The desirable man is also commodified, transformed into a resource whose nervous system no longer fully belongs to him.",
      "Elias eventually faces the true addiction: not sex, not intimacy, but temporary relief from self-rejection. Proxy may soothe loneliness, but it also reinforces the belief that worth must be externally granted."
    ],

    coreQuestion:
      "What happens when the lonely can rent the emotional experience of being wanted, but not the selfhood required to live as themselves?",

    secondaryQuestions: [
      "Is being desired the same as being valued?",
      "Can borrowed intimacy heal loneliness, or does it make ordinary life feel emptier?",
      "What happens when memory feels real but does not belong to you?",
      "Can external validation become an addiction to temporary relief from self-rejection?",
      "Are desirable people also commodified when their emotional architecture becomes infrastructure?",
      "What is the difference between relief and healing?",
      "Can a person accept loneliness without turning it into identity?"
    ],

    themes: [
      "loneliness",
      "desire",
      "masculine invisibility",
      "external validation",
      "borrowed memory",
      "emotional commodification",
      "parasocial intimacy",
      "identity drift",
      "stoicism",
      "self-worth",
      "desirability metrics",
      "the loneliness economy",
      "technology and intimacy",
      "phantom attachment",
      "the commodified nervous system"
    ],

    ideas: [
      "Secondhand longing",
      "Borrowed desire",
      "Borrowed memory",
      "The relief of being wanted",
      "Visibility mistaken for value",
      "Desirability as infrastructure",
      "The self as rented experience",
      "Temporary suspension of shame",
      "Emotional methadone",
      "Participation versus simulation",
      "Relief from interpretation",
      "The difference between pain and identity"
    ],

    whyThisWorldExists:
      "To explore how loneliness becomes a market when society teaches people to measure their worth by external desirability. This world exists to examine the psychological consequences of renting emotional validation instead of inhabiting one’s own life.",

    worldEssayAngle:
      "This world is not about erotic technology. It is about existential invisibility, and the terrifying relief of briefly becoming someone the world welcomes without resistance.",

    worldEssaySubtitle:
      "A world where the lonely buy access to another man’s welcome and mistake relief for healing.",

    worldEssay: [],

    worldPressurePoint:
      "The moment borrowed intimacy becomes more emotionally convincing than lived experience.",

    worldThreat:
      "The greatest danger is that Proxy does not simply exploit loneliness; it reinforces the belief that worth must be externally granted by desire, visibility, and social reception.",

    worldReversal:
      "Proxy promises escape from loneliness, but it deepens the contrast that makes ordinary selfhood feel unlivable.",

    worldContradiction:
      "The platform alleviates suffering by strengthening the worldview that caused the suffering: that being desired is proof of being real.",

    worldWound:
      "The ache of social translucence — speaking and not being heard, reaching and not being met, wanting and not being wanted — until invisibility becomes interpreted as a verdict against the self.",

    protagonist: "Elias Mercer",

    centralConflict:
      "Elias must decide whether to continue borrowing Lucien’s desirability or confront the painful possibility that his worth cannot be repaired by inhabiting another man’s welcome.",

    moralDilemma:
      "If Proxy genuinely reduces suffering, is it healing people — or trapping them inside a more sophisticated dependence on external validation?",

    antagonistForce:
      "The loneliness economy: Proxy’s metrics, subscriber dependency, desirability hierarchies, algorithmic intimacy, and the internal belief that erotic recognition determines human value.",

    setting:
      "A near-future New York shaped by neural streaming, desirability metrics, private schools, subscriber forums, luxury bars, lonely apartments, support groups, and a quiet conservatory where Marcus offers an alternative philosophy of self-worth.",

    systemLogic:
      "Proxy monetizes emotional scarcity by pairing lonely subscribers with desirable Primes whose nervous systems provide temporary relief from shame, invisibility, and self-consciousness. The system calls itself wellness while optimizing dependency, resonance, and retention.",

    commodifiedElement:
      "Desire and emotional visibility.",

    whatIsBeingPriced:
      "Access to desirability, reciprocal attention, emotional warmth, social ease, borrowed memory, and relief from self-rejection.",

    whatIsBeingLost:
      "The ability to inhabit one’s own life without comparing it to rented emotional abundance; the boundary between memory, identity, longing, and participation.",

    whatIsBeingProtected:
      "The illusion that technological access to desire can substitute for self-acceptance, vulnerability, and real human participation.",

    compass: {
      market: "Hearts",
      primaryIdeas: [
        "Loneliness economy",
        "Borrowed desire",
        "External validation",
        "Memory without ownership",
        "Desirability as social hierarchy",
        "Relief versus healing"
      ],
      pressurePoint:
        "The moment Elias’s real life begins to feel emotionally inferior to Proxy immersion.",
      threat:
        "A market that makes self-rejection temporarily painless while making self-acceptance harder.",
      contradiction:
        "Proxy reduces loneliness symptoms while deepening dependence on the very desirability hierarchy that wounds its users."
    },

    atlasConnections: [
      {
        slug: "the-other-half",
        title: "The Other Half",
        relationship:
          "Both worlds examine sexual selection, desirability, and the emotional consequences of being sorted by social and erotic value."
      },
      {
        slug: "the-number",
        title: "The Number",
        relationship:
          "Both worlds turn intimate worth into public or measurable data, exposing how ranking systems reshape identity and desire."
      },
      {
        slug: "the-mirror-doesnt-work",
        title: "The Mirror Doesn’t Work",
        relationship:
          "Both worlds examine what happens when selfhood becomes dependent on the gaze of others."
      },
      {
        slug: "blackmail-black-male",
        title: "Blackmail, Black Male",
        relationship:
          "Both worlds concern internal sovereignty: one through racialized emotional containment, the other through the surrender of worth to external desire."
      }
    ],

    relatedIdeas: [
      {
        idea: "Visibility is not value",
        reason:
          "Proxy’s central confusion is the belief that being socially or erotically seen proves metaphysical worth."
      },
      {
        idea: "Relief is not healing",
        reason:
          "The platform makes users feel better temporarily while leaving the underlying structure of self-rejection intact."
      },
      {
        idea: "Memory without participation",
        reason:
          "Subscribers receive emotionally real memories without the vulnerability, agency, or relational context that normally give memories meaning."
      },
      {
        idea: "Stoic differentiation",
        reason:
          "Marcus offers the core counter-principle: distinguish pain from identity and desirability from worth."
      }
    ],

    relatedMarkets: [
      {
        market: "Minds",
        reason:
          "Proxy reshapes perception, memory, identity, self-consciousness, and the interpretation of social feedback."
      },
      {
        market: "Bodies",
        reason:
          "The desirable body and nervous system become monetized infrastructure for other people’s emotional relief."
      },
      {
        market: "Souls",
        reason:
          "The deepest conflict concerns dignity, self-acceptance, longing, and the temptation to abandon one’s own life."
      }
    ],

    authorNote:
      "This world belongs to The Commodified Self because it explores what happens when desire, visibility, and emotional validation become market-mediated experiences. Proxy asks whether technology can relieve loneliness without teaching people to outsource their worth.",

    originNote:
      "Proxy grew from the idea of undesirable men consuming the experiences of sexually and socially desirable men, then deepened into a broader meditation on loneliness, borrowed memory, self-rejection, and the difference between being witnessed and being loved.",

    excerpt: {
      status: "available",
      label: "Secondhand Longing",
      teaser:
        "Proxy is introduced not as technological evil, but as civilization’s adaptation to emotional scarcity.",
      text: [
        "People were lonely long before the machines arrived.",
        "The machines merely discovered how to monetize the wound.",
        "The desirable became economic engines. The lonely became recurring revenue."
      ]
    },

    seoDescription:
      "Proxy is a speculative novella in The Commodified Self anthology about loneliness, borrowed desire, neural streaming, masculine invisibility, external validation, phantom attachment, and the commodification of intimacy."
  }
];

export const getWorldBySlug = (slug: string) =>
  worlds.find((world) => world.slug === slug);
