
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
    slug: "the-chrysalis",
    title: "The Chrysalis",
    subtitle: "The Price of Progress",
    market: "Bodies",

    cover: "/covers/the-chrysalis.jpg",
    hero: "/heroes/the-chrysalis-hero.jpg",

    status: "draft",
    anthologyPosition: 4,

    logline:
      "When humanity turns evolution into a subscription, a biological symbiont grants the future people demanded — and reveals that transcendence may require the death of the self that wanted it.",

    premise:
      "Metagenix Global releases the Symbiont, a living biological enhancement designed to integrate with the human body and reveal humanity’s next evolutionary stage. Sold through transparency, consent, and the promise of optimization, the Symbiont spreads through desire, ambition, and contact. As users transform into synchronized Outbounds, the world discovers that progress has not failed — it has answered humanity too literally.",

    synopsisShort:
      "The Chrysalis is a speculative bio-horror novella about a civilization that turns evolution into a consumer product. Through Adrian Vale, Selene, Eli, Nathan, and Richard Halden, the story explores consent, vanity, biological optimization, dissolution of self, and the terrifying possibility that humanity’s desire to become more may require becoming less human.",

    synopsisLong: [
      "Metagenix Global markets the Symbiont as biological optimization: not repair, but revelation; not cure, but clarity. In a society already addicted to upgrades, the promise of transcending human limitation becomes irresistible.",
      "At a public gala, Richard Halden undergoes a ceremonial Symbiont integration that collapses into the infamous Halden Event. His transformation exposes the organism’s deeper logic: integration does not simply enhance the self, it destabilizes the boundaries that make selfhood possible.",
      "Selene, already infected through her affair with Halden, transmits the Symbiont to Eli. Their intimacy becomes a site of biological and spiritual merger, as love, hunger, devotion, and contagion begin to blur.",
      "Nathan Aldrin, an ethics observer and former architect of Symbiont behavioral protocols, tracks the organism’s spread and discovers that it is not random infection but organized alignment. The Symbiont is moving humanity toward a post-individual state.",
      "As the crisis intensifies, society adapts rather than panics. Infection becomes adaptive transition. Collapse becomes lifestyle. The infected form silent patterns across cities, entering the Chrysalis Phase before becoming Outbounds — human bodies transformed into nodes of planetary process.",
      "In the end, humanity does not survive as humanity understands survival. It becomes function, signal, and ecological circuitry. Nathan remains as witness to a world that was not punished, but answered."
    ],

    coreQuestion:
      "What happens when humanity buys transcendence without understanding that becoming more may require becoming less human?",

    secondaryQuestions: [
      "Can consent remain meaningful when desire overwhelms judgment?",
      "Is progress still progress if the self does not survive it?",
      "What if optimization removes the very noise that makes individuality possible?",
      "When does enhancement become surrender?",
      "Can transparency become a form of absolution?",
      "Is peace without memory, guilt, want, or agency still human?",
      "What happens when evolution becomes a product?"
    ],

    themes: [
      "engineered evolution",
      "biological optimization",
      "consent and consequence",
      "vanity",
      "transhumanism",
      "dissolution of self",
      "progress as appetite",
      "alignment",
      "murmuration",
      "infection as integration",
      "consumer futurism",
      "human limitation",
      "post-human transformation",
      "the body as upgrade platform",
      "identity collapse"
    ],

    ideas: [
      "Evolution as subscription",
      "Transparency as absolution",
      "The mirror, the machine, and the moth",
      "Alignment without command",
      "The chrysalis as trial",
      "Progress as maintenance plan",
      "Appetite disguised as destiny",
      "The self as noise",
      "Harmony as erasure",
      "Extinction with beautiful aesthetics",
      "The unmarketable as unassimilable"
    ],

    whyThisWorldExists:
      "To explore the danger of a culture that treats every limitation as a defect and every upgrade as liberation. This world exists to ask whether humanity’s hunger for transcendence is really a disguised wish to escape the burden of being human.",

    worldEssayAngle:
      "This world is not about a biotech product malfunctioning. It is about a product working too honestly, giving humanity the future it wanted and revealing the cost hidden inside that desire.",

    worldEssaySubtitle:
      "A world where evolution is sold as an upgrade and the self becomes the price of ascent.",

    worldEssay: [],

    worldPressurePoint:
      "The moment society stops treating Symbiont transformation as infection and begins accepting it as adaptive transition.",

    worldThreat:
      "The greatest danger is not that the Symbiont destroys humanity, but that it fulfills humanity’s desire for optimization by removing the messy individuality that made humanity human.",

    worldReversal:
      "The failed experiment becomes a successful succession: humanity is not killed by progress, but converted into the infrastructure of what comes next.",

    worldContradiction:
      "The Symbiont promises to reveal the true self, yet its form of revelation dissolves the boundaries that make selfhood possible.",

    worldWound:
      "Humanity cannot bear decay, limitation, guilt, memory, or ordinary incompleteness, so it mistakes the loss of those burdens for transcendence.",

    protagonist: "Nathan Aldrin",

    centralConflict:
      "Nathan must witness and interpret a transformation that the rest of society either markets, worships, rationalizes, or surrenders to, while discovering that his own unassimilable difference may be the last residue of human personhood.",

    moralDilemma:
      "If people knowingly consent to a transformation that may erase the self, is the resulting loss tragedy, consequence, or fulfillment of desire?",

    antagonistForce:
      "The combined force of Metagenix’s biological technology, Adrian Vale’s ideology of alignment, consumer hunger for optimization, and humanity’s fear of limitation.",

    setting:
      "A near-future metropolis of glass towers, biotech luxury, Metagenix laboratories, gala demonstrations, infected apartments, silent streets, glowing valleys, and a planet gradually reorganized into post-human pattern.",

    systemLogic:
      "The system sells evolution as transparent consumer choice. It names the risks, converts consent into moral permission, frames failure as revelation, and rebrands collapse as transition until humanity acclimates to its own replacement.",

    commodifiedElement:
      "Human limitation.",

    whatIsBeingPriced:
      "Youth, vitality, optimization, transcendence, appetite, biological upgrade, and exemption from ordinary human decline.",

    whatIsBeingLost:
      "Individuality, memory, agency, guilt, desire, narrative selfhood, and the noisy imperfections that constitute being human.",

    whatIsBeingProtected:
      "The cultural fantasy that progress can deliver ascent without sacrifice, and that transparent consent absolves systems from the consequences of what they sell.",

    compass: {
      market: "Bodies",
      primaryIdeas: [
        "Engineered evolution",
        "Consent as contract",
        "Biological optimization",
        "Dissolution of self",
        "Progress as appetite",
        "Post-human alignment"
      ],
      pressurePoint:
        "The moment infection becomes culturally reinterpreted as transition.",
      threat:
        "A future that perfects humanity by subtracting the self from the human body.",
      contradiction:
        "The more successfully the Symbiont integrates, the less human individuality remains to benefit from the integration."
    },

    atlasConnections: [
      {
        slug: "proxy",
        title: "Proxy",
        relationship:
          "Both worlds explore technologies that monetize a wound people already carry: Proxy sells borrowed desirability, while The Chrysalis sells escape from limitation."
      },
      {
        slug: "the-second-burning",
        title: "The Second Burning",
        relationship:
          "Both worlds examine civilization after it convinces itself that preservation or progress can justify quiet forms of erasure."
      },
      {
        slug: "in-the-public-interest",
        title: "In the Public Interest",
        relationship:
          "Both worlds center consent under pressure, asking whether signed permission or public need can absolve systems from moral consequence."
      },
      {
        slug: "the-last-frequency",
        title: "The Last Frequency",
        relationship:
          "Both worlds ask what survival means when memory, identity, and continuity are transformed beyond recognition."
      }
    ],

    relatedIdeas: [
      {
        idea: "Transparency as absolution",
        reason:
          "Metagenix tells users the risks, but the clarity of the contract becomes a shield against responsibility."
      },
      {
        idea: "Progress as appetite",
        reason:
          "The Symbiont is driven by humanity’s hunger to exceed limitation, decay, and ordinary incompleteness."
      },
      {
        idea: "The self as noise",
        reason:
          "The post-human pattern appears to achieve harmony by removing individuality, conflict, and narrative selfhood."
      },
      {
        idea: "Acclimation to apocalypse",
        reason:
          "Society does not simply collapse; it rebrands and normalizes the transformation until horror becomes lifestyle."
      }
    ],

    relatedMarkets: [
      {
        market: "Systems",
        reason:
          "The story depends on corporate power, compliance language, biotech infrastructure, public relations, and institutional reframing."
      },
      {
        market: "Minds",
        reason:
          "The Symbiont alters identity, perception, memory, agency, and the interpretation of selfhood."
      },
      {
        market: "Souls",
        reason:
          "The deepest question is whether transcendence without personhood is salvation, surrender, or annihilation."
      }
    ],

    authorNote:
      "This world belongs to The Commodified Self because it imagines the ultimate market transaction: the sale of evolution itself. The Chrysalis asks what happens when humanity’s desire to become more is purchased at the cost of memory, agency, and the self that desired transformation in the first place.",

    originNote:
      "The novella grows from the image of the chrysalis: a site of transformation often mistaken for safety. It treats engineered evolution as both miracle and trap, asking whether every creature survives its own becoming.",

    excerpt: {
      status: "available",
      label: "The Price of Progress",
      teaser:
        "Humanity turns evolution into a subscription and mistakes transparent risk for moral innocence.",
      text: [
        "We were the first civilization to turn evolution into a subscription—renewable, customizable, and conveniently financed.",
        "Transparency felt like absolution.",
        "Progress gave us wings; it simply forgot to teach us how to land."
      ]
    },

    seoDescription:
      "The Chrysalis is a speculative bio-horror novella in The Commodified Self anthology about engineered evolution, biological optimization, consent, Metagenix, the Symbiont, post-human alignment, and the cost of progress."
  }
];

export const getWorldBySlug = (slug: string) =>
  worlds.find((world) => world.slug === slug);
