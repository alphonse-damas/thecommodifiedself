/**
 * The Commodified Self — World Canon Registry
 * Phase 8A: World Canon Registry
 *
 * Canonical source of truth for anthology-level relationships:
 * - World Index
 * - Market Index
 * - Idea Index
 * - Connection Graph
 * - Contradiction Map
 * - Reading Order Graph
 * - Anthology Timeline
 *
 * Design rule:
 * This file should describe canon-level relationships only. Long prose remains in
 * world essays, prologues, author reflections, and world-detail content files.
 */

export const marketKeys = ["bodies", "hearts", "minds", "souls", "systems"] as const;
export type MarketKey = (typeof marketKeys)[number];

export const ideaKeys = [
  "identity",
  "desire",
  "memory",
  "power",
  "control",
  "truth",
  "meaning",
  "value",
  "freedom",
] as const;
export type IdeaKey = (typeof ideaKeys)[number];

export const worldSlugs = [
  "blackmail-black-male",
  "in-the-public-interest",
  "proxy",
  "the-chrysalis",
  "the-last-frequency",
  "the-long-goodbye",
  "the-mirror-doesnt-work",
  "the-number",
  "the-other-half",
  "the-robbery",
  "the-vanishing-variable",
  "when-gods-stay-quiet",
  "the-second-burning",
  "who-cleans-galts-toilets",
] as const;
export type WorldSlug = (typeof worldSlugs)[number];

export type CanonStatus = "canonized" | "draft" | "reserved";

export type ConnectionType =
  | "direct-continuity"
  | "shared-market"
  | "shared-idea"
  | "thematic-echo"
  | "philosophical-counterpoint"
  | "structural-rhyme"
  | "consequence-chain";

export type ContradictionType =
  | "moral"
  | "economic"
  | "political"
  | "spiritual"
  | "technological"
  | "intimate"
  | "racial"
  | "identity";

export type ReadingPathKey =
  | "canonical"
  | "race-power-and-systems"
  | "intimacy-desire-and-loss"
  | "memory-truth-and-meaning"
  | "technology-body-and-proxy"
  | "souls-faith-and-freedom";

export type TimelineEra =
  | "origin-pressure"
  | "market-formation"
  | "market-normalization"
  | "systemic-crisis"
  | "inheritance-and-aftermath";

export interface CanonWorld {
  slug: WorldSlug;
  title: string;
  subtitle: string;
  market: MarketKey;
  primaryIdeas: IdeaKey[];
  secondaryIdeas: IdeaKey[];
  anthologyPosition: number;
  status: CanonStatus;
  canonRole: string;
  coreQuestion: string;
  pressurePoint: string;
  sourceContent: {
    worldPage: string;
    prologue: string;
    essay: string;
    reflection: string;
  };
}

export interface MarketIndexEntry {
  key: MarketKey;
  label: string;
  thesis: string;
  worldSlugs: WorldSlug[];
  ideaKeys: IdeaKey[];
}

export interface IdeaIndexEntry {
  key: IdeaKey;
  label: string;
  thesis: string;
  worldSlugs: WorldSlug[];
  marketKeys: MarketKey[];
}

export interface CanonConnection {
  id: string;
  from: WorldSlug;
  to: WorldSlug;
  type: ConnectionType;
  strength: 1 | 2 | 3 | 4 | 5;
  label: string;
  rationale: string;
}

export interface CanonContradiction {
  id: string;
  type: ContradictionType;
  worldSlugs: WorldSlug[];
  thesis: string;
  contradiction: string;
  readerQuestion: string;
}

export interface ReadingOrderNode {
  slug: WorldSlug;
  order: number;
  reason: string;
  prerequisites?: WorldSlug[];
  unlocks?: WorldSlug[];
}

export interface ReadingPath {
  key: ReadingPathKey;
  label: string;
  description: string;
  nodes: ReadingOrderNode[];
}

export interface TimelineEvent {
  id: string;
  era: TimelineEra;
  order: number;
  title: string;
  worldSlugs: WorldSlug[];
  description: string;
}

export const worldIndex: Record<WorldSlug, CanonWorld> = {
  "blackmail-black-male": {
    slug: "blackmail-black-male",
    title: "Blackmail, Black Male",
    subtitle: "The Extorted Self",
    market: "minds",
    primaryIdeas: ["identity", "power", "control"],
    secondaryIdeas: ["freedom", "truth"],
    anthologyPosition: 1,
    status: "canonized",
    canonRole: "The opening wound: the self learns that safety can be purchased only through self-erasure.",
    coreQuestion:
      "What if the experience of being a Black male in America is a form of lifelong blackmail — a coerced surrender of softness, anger, visibility, and emotional truth?",
    pressurePoint: "Protection becomes coercion when survival requires surrendering emotional truth.",
    sourceContent: {
      worldPage: "src/content/worlds/blackmail.ts",
      prologue: "src/content/prologues/blackmail-black-male.ts",
      essay: "src/content/worldEssays/blackmail.ts",
      reflection: "src/content/authorReflections/blackmail-black-male.ts",
    },
  },
  "in-the-public-interest": {
    slug: "in-the-public-interest",
    title: "In the Public Interest",
    subtitle: "The Price of Consent",
    market: "bodies",
    primaryIdeas: ["power", "control", "freedom"],
    secondaryIdeas: ["value", "truth"],
    anthologyPosition: 2,
    status: "canonized",
    canonRole: "The state-body threshold: consent is separated from actual choice.",
    coreQuestion: "What happens when the public interest demands something that does not belong to the public?",
    pressurePoint: "Institutional language turns bodily sacrifice into civic obligation.",
    sourceContent: {
      worldPage: "src/content/worlds/in-the-public-interest.ts",
      prologue: "src/content/prologues/in-the-public-interest.ts",
      essay: "src/content/worldEssays/in-the-public-interest.ts",
      reflection: "src/content/authorReflections/in-the-public-interest.ts",
    },
  },
  proxy: {
    slug: "proxy",
    title: "Proxy",
    subtitle: "Borrowed Desire, Borrowed Memory",
    market: "hearts",
    primaryIdeas: ["desire", "memory", "identity"],
    secondaryIdeas: ["truth", "value"],
    anthologyPosition: 3,
    status: "canonized",
    canonRole: "The delegated self: longing becomes rentable experience without earned selfhood.",
    coreQuestion:
      "What happens when the lonely can rent the emotional experience of being wanted, but not the selfhood required to live as themselves?",
    pressurePoint: "Substitution offers relief while deepening alienation from the actual self.",
    sourceContent: {
      worldPage: "src/content/worlds/proxy.ts",
      prologue: "src/content/prologues/proxy.ts",
      essay: "src/content/worldEssays/proxy.ts",
      reflection: "src/content/authorReflections/proxy.ts",
    },
  },
  "the-chrysalis": {
    slug: "the-chrysalis",
    title: "The Chrysalis",
    subtitle: "The Price of Progress",
    market: "bodies",
    primaryIdeas: ["identity", "value", "freedom"],
    secondaryIdeas: ["control", "meaning"],
    anthologyPosition: 4,
    status: "canonized",
    canonRole: "The optimized body: progress becomes a subscription to managed transformation.",
    coreQuestion:
      "What happens when humanity buys transcendence without understanding that becoming more may require becoming less human?",
    pressurePoint: "Enhancement promises liberation while converting limitation into a recurring bill.",
    sourceContent: {
      worldPage: "src/content/worlds/the-chrysalis.ts",
      prologue: "src/content/prologues/the-chrysalis.ts",
      essay: "src/content/worldEssays/the-chrysalis.ts",
      reflection: "src/content/authorReflections/the-chrysalis.ts",
    },
  },
  "the-last-frequency": {
    slug: "the-last-frequency",
    title: "The Last Frequency",
    subtitle: "What Remains After the Severance",
    market: "souls",
    primaryIdeas: ["memory", "truth", "meaning"],
    secondaryIdeas: ["identity", "freedom"],
    anthologyPosition: 5,
    status: "canonized",
    canonRole: "The severed signal: a people confront the cost of forgetting what made them legible to themselves.",
    coreQuestion: "Can a people survive the loss of their history, or does forgetting ultimately cost more than remembering?",
    pressurePoint: "Memory is both wound and inheritance; losing it may feel like relief until meaning collapses.",
    sourceContent: {
      worldPage: "src/content/worlds/the-last-frequency.ts",
      prologue: "src/content/prologues/the-last-frequency.ts",
      essay: "src/content/worldEssays/the-last-frequency.ts",
      reflection: "src/content/authorReflections/the-last-frequency.ts",
    },
  },
  "the-long-goodbye": {
    slug: "the-long-goodbye",
    title: "The Long Goodbye",
    subtitle: "The Atlas of Forgetting",
    market: "souls",
    primaryIdeas: ["memory", "meaning", "value"],
    secondaryIdeas: ["identity", "freedom"],
    anthologyPosition: 6,
    status: "canonized",
    canonRole: "The grief chamber: love is tested by the slow disappearance of memory.",
    coreQuestion: "If memory disappears, what remains of love?",
    pressurePoint: "The beloved is lost before death, forcing grief to arrive twice.",
    sourceContent: {
      worldPage: "src/content/worlds/the-long-goodbye.ts",
      prologue: "src/content/prologues/the-long-goodbye.ts",
      essay: "src/content/worldEssays/the-long-goodbye.ts",
      reflection: "src/content/authorReflections/the-long-goodbye.ts",
    },
  },
  "the-mirror-doesnt-work": {
    slug: "the-mirror-doesnt-work",
    title: "The Mirror Doesn’t Work",
    subtitle: "The Gaze We Inherited",
    market: "minds",
    primaryIdeas: ["identity", "power", "freedom"],
    secondaryIdeas: ["memory", "truth"],
    anthologyPosition: 7,
    status: "canonized",
    canonRole: "The inherited gaze: escape fails when oppression survives inside self-perception.",
    coreQuestion: "What happens when the image you inherit of yourself was designed to make you fear your own reflection?",
    pressurePoint: "Liberation requires more than exiting the system; it requires unlearning its mirror.",
    sourceContent: {
      worldPage: "src/content/worlds/the-mirror-doesnt-work.ts",
      prologue: "src/content/prologues/the-mirror-doesnt-work.ts",
      essay: "src/content/worldEssays/the-mirror-doesnt-work.ts",
      reflection: "src/content/authorReflections/the-mirror-doesnt-work.ts",
    },
  },
  "the-number": {
    slug: "the-number",
    title: "The Number",
    subtitle: "When Intimacy Becomes Public Property",
    market: "hearts",
    primaryIdeas: ["desire", "value", "truth"],
    secondaryIdeas: ["identity", "power"],
    anthologyPosition: 8,
    status: "canonized",
    canonRole: "The public ledger: intimacy becomes visible, ranked, and socially priced.",
    coreQuestion:
      "If the most intimate part of your life became visible to everyone, would people finally know you — or would they stop seeing you altogether?",
    pressurePoint: "Visibility promises honesty while producing shame, ranking, and social control.",
    sourceContent: {
      worldPage: "src/content/worlds/the-number.ts",
      prologue: "src/content/prologues/the-number.ts",
      essay: "src/content/worldEssays/the-number.ts",
      reflection: "src/content/authorReflections/the-number.ts",
    },
  },
  "the-other-half": {
    slug: "the-other-half",
    title: "The Other Half",
    subtitle: "A Novella of Desire, Design, and the Cost of Truth",
    market: "hearts",
    primaryIdeas: ["desire", "truth", "freedom"],
    secondaryIdeas: ["identity", "value"],
    anthologyPosition: 9,
    status: "canonized",
    canonRole: "The divided bond: love, desire, biology, and parenthood are split into separate economies.",
    coreQuestion:
      "What happens when society splits love, desire, genetics, and parenthood into separate roles and calls the result progress?",
    pressurePoint: "A system can optimize intimacy while making wholeness nearly impossible.",
    sourceContent: {
      worldPage: "src/content/worlds/the-other-half.ts",
      prologue: "src/content/prologues/the-other-half.ts",
      essay: "src/content/worldEssays/the-other-half.ts",
      reflection: "src/content/authorReflections/the-other-half.ts",
    },
  },
  "the-robbery": {
    slug: "the-robbery",
    title: "The Robbery",
    subtitle: "A Study in Love, Loss, and the Autopsy of Nothing",
    market: "souls",
    primaryIdeas: ["freedom", "value", "memory"],
    secondaryIdeas: ["desire", "meaning"],
    anthologyPosition: 10,
    status: "canonized",
    canonRole: "The trial of emptiness: self-protection becomes the thief it was built to prevent.",
    coreQuestion: "What happens when self-protection becomes the thing that robs you of freedom?",
    pressurePoint: "A person can defend himself from loss so completely that he loses the capacity to receive.",
    sourceContent: {
      worldPage: "src/content/worlds/the-robbery.ts",
      prologue: "src/content/prologues/the-robbery.ts",
      essay: "src/content/worldEssays/the-robbery.ts",
      reflection: "src/content/authorReflections/the-robbery.ts",
    },
  },
  "the-vanishing-variable": {
    slug: "the-vanishing-variable",
    title: "The Vanishing Variable",
    subtitle: "When the Scapegoat Disappears",
    market: "systems",
    primaryIdeas: ["power", "truth", "value"],
    secondaryIdeas: ["memory", "freedom"],
    anthologyPosition: 11,
    status: "canonized",
    canonRole: "The withdrawal hypothesis: the system loses the people it measures, blames, and needs.",
    coreQuestion: "What remains when a society can no longer blame what it depends on?",
    pressurePoint: "Extraction becomes visible only after the extracted variable disappears.",
    sourceContent: {
      worldPage: "src/content/worlds/the-vanishing-variable.ts",
      prologue: "src/content/prologues/the-vanishing-variable.ts",
      essay: "src/content/worldEssays/the-vanishing-variable.ts",
      reflection: "src/content/authorReflections/the-vanishing-variable.ts",
    },
  },
  "when-gods-stay-quiet": {
    slug: "when-gods-stay-quiet",
    title: "When Gods Stay Quiet",
    subtitle: "The Harm of Inaction",
    market: "souls",
    primaryIdeas: ["power", "meaning", "truth"],
    secondaryIdeas: ["control", "value"],
    anthologyPosition: 12,
    status: "canonized",
    canonRole: "The moral indictment: unused power becomes a form of harm.",
    coreQuestion: "When power is present but unused, who pays the price?",
    pressurePoint: "Silence is not neutral when intervention was possible.",
    sourceContent: {
      worldPage: "src/content/worlds/when-gods-stay-quiet.ts",
      prologue: "src/content/prologues/when-gods-stay-quiet.ts",
      essay: "src/content/worldEssays/when-gods-stay-quiet.ts",
      reflection: "src/content/authorReflections/when-gods-stay-quiet.ts",
    },
  },
  "the-second-burning": {
    slug: "the-second-burning",
    title: "The Second Burning",
    subtitle: "When the Fire Learned to Hide",
    market: "minds",
    primaryIdeas: ["memory", "truth", "control"],
    secondaryIdeas: ["meaning", "power"],
    anthologyPosition: 13,
    status: "canonized",
    canonRole: "The modern censor: knowledge survives while meaning is quietly rewritten.",
    coreQuestion: "Can a civilization preserve knowledge while gradually losing the habits required to understand it?",
    pressurePoint: "Censorship no longer needs flames when interpretation can be engineered.",
    sourceContent: {
      worldPage: "src/content/worlds/the-second-burning.ts",
      prologue: "src/content/prologues/the-second-burning.ts",
      essay: "src/content/worldEssays/the-second-burning.ts",
      reflection: "src/content/authorReflections/the-second-burning.ts",
    },
  },
  "who-cleans-galts-toilets": {
    slug: "who-cleans-galts-toilets",
    title: "Who Cleans Galt’s Toilets?",
    subtitle: "What Happens After the Revolution Wins",
    market: "systems",
    primaryIdeas: ["power", "value", "freedom"],
    secondaryIdeas: ["control", "identity"],
    anthologyPosition: 14,
    status: "canonized",
    canonRole: "The maintenance-class verdict: every paradise depends on labor it refuses to honor.",
    coreQuestion: "What happens after the revolution wins and its descendants inherit the hierarchy it claimed to defeat?",
    pressurePoint: "A utopia can abolish old rulers while preserving the logic of servitude.",
    sourceContent: {
      worldPage: "src/content/worlds/who-cleans-galts-toilets.ts",
      prologue: "src/content/prologues/who-cleans-galts-toilets.ts",
      essay: "src/content/worldEssays/who-cleans-galts-toilets.ts",
      reflection: "src/content/authorReflections/who-cleans-galts-toilets.ts",
    },
  },
};

export const marketIndex: Record<MarketKey, MarketIndexEntry> = {
  bodies: {
    key: "bodies",
    label: "Bodies",
    thesis: "The body becomes the first marketplace because it is the first thing the world learns to measure, manage, and justify.",
    worldSlugs: ["in-the-public-interest", "the-chrysalis"],
    ideaKeys: ["power", "control", "freedom", "identity", "value"],
  },
  hearts: {
    key: "hearts",
    label: "Hearts",
    thesis: "Intimacy becomes an arrangement when desire, memory, access, and trust can be priced or substituted.",
    worldSlugs: ["proxy", "the-number", "the-other-half"],
    ideaKeys: ["desire", "memory", "identity", "truth", "value", "freedom"],
  },
  minds: {
    key: "minds",
    label: "Minds",
    thesis: "The inner life becomes a market when fear, self-image, memory, knowledge, and meaning can be engineered from outside.",
    worldSlugs: ["blackmail-black-male", "the-mirror-doesnt-work", "the-second-burning"],
    ideaKeys: ["identity", "power", "control", "freedom", "truth", "memory", "meaning"],
  },
  souls: {
    key: "souls",
    label: "Souls",
    thesis: "The soul becomes commodified when moral responsibility, memory, grief, meaning, and self-protection are converted into transactions.",
    worldSlugs: ["the-last-frequency", "the-long-goodbye", "the-robbery", "when-gods-stay-quiet"],
    ideaKeys: ["memory", "truth", "meaning", "value", "freedom", "power"],
  },
  systems: {
    key: "systems",
    label: "Systems",
    thesis: "Systems commodify the self by deciding which lives become resources, risks, costs, exceptions, or invisible labor.",
    worldSlugs: ["the-vanishing-variable", "who-cleans-galts-toilets"],
    ideaKeys: ["power", "truth", "value", "freedom", "control", "identity"],
  },
};

export const ideaIndex: Record<IdeaKey, IdeaIndexEntry> = {
  identity: {
    key: "identity",
    label: "Identity",
    thesis: "Identity becomes unstable when the world can assign, display, inherit, optimize, or monetize the self before the self can speak.",
    worldSlugs: ["blackmail-black-male", "proxy", "the-chrysalis", "the-mirror-doesnt-work", "the-number", "the-other-half", "who-cleans-galts-toilets"],
    marketKeys: ["minds", "hearts", "bodies", "systems"],
  },
  desire: {
    key: "desire",
    label: "Desire",
    thesis: "Desire becomes a market when longing is no longer private feeling but a system of access, substitution, ranking, and exchange.",
    worldSlugs: ["proxy", "the-number", "the-other-half", "the-robbery"],
    marketKeys: ["hearts", "souls"],
  },
  memory: {
    key: "memory",
    label: "Memory",
    thesis: "Memory becomes a battleground when the past can be stored, revised, inherited, purchased, withheld, or made unavailable.",
    worldSlugs: ["proxy", "the-last-frequency", "the-long-goodbye", "the-mirror-doesnt-work", "the-robbery", "the-vanishing-variable", "the-second-burning"],
    marketKeys: ["hearts", "souls", "minds", "systems"],
  },
  power: {
    key: "power",
    label: "Power",
    thesis: "Power hides most effectively when it renames extraction as order, harm as policy, and containment as care.",
    worldSlugs: ["blackmail-black-male", "in-the-public-interest", "the-mirror-doesnt-work", "the-number", "the-vanishing-variable", "when-gods-stay-quiet", "the-second-burning", "who-cleans-galts-toilets"],
    marketKeys: ["minds", "bodies", "hearts", "systems", "souls"],
  },
  control: {
    key: "control",
    label: "Control",
    thesis: "Control becomes intimate when systems shape what people are allowed to want, know, fear, remember, or call freedom.",
    worldSlugs: ["blackmail-black-male", "in-the-public-interest", "the-chrysalis", "when-gods-stay-quiet", "the-second-burning", "who-cleans-galts-toilets"],
    marketKeys: ["minds", "bodies", "souls", "systems"],
  },
  truth: {
    key: "truth",
    label: "Truth",
    thesis: "Truth becomes precarious when systems decide which evidence can be trusted and which realities remain invisible.",
    worldSlugs: ["blackmail-black-male", "in-the-public-interest", "the-last-frequency", "the-mirror-doesnt-work", "the-number", "the-other-half", "the-vanishing-variable", "when-gods-stay-quiet", "the-second-burning"],
    marketKeys: ["minds", "bodies", "souls", "hearts", "systems"],
  },
  meaning: {
    key: "meaning",
    label: "Meaning",
    thesis: "Meaning becomes vulnerable when purpose, belief, conscience, knowledge, and grief can be engineered, muted, or replaced.",
    worldSlugs: ["the-chrysalis", "the-last-frequency", "the-long-goodbye", "the-robbery", "when-gods-stay-quiet", "the-second-burning"],
    marketKeys: ["bodies", "souls", "minds"],
  },
  value: {
    key: "value",
    label: "Value",
    thesis: "Value becomes dangerous when price stops measuring things and begins deciding what people deserve, fear, sacrifice, or become.",
    worldSlugs: ["in-the-public-interest", "the-chrysalis", "the-long-goodbye", "the-number", "the-other-half", "the-robbery", "the-vanishing-variable", "when-gods-stay-quiet", "who-cleans-galts-toilets"],
    marketKeys: ["bodies", "souls", "hearts", "systems"],
  },
  freedom: {
    key: "freedom",
    label: "Freedom",
    thesis: "Freedom becomes ambiguous when the visible system breaks but its logic survives inside memory, desire, fear, and self-protection.",
    worldSlugs: ["blackmail-black-male", "in-the-public-interest", "the-chrysalis", "the-last-frequency", "the-long-goodbye", "the-mirror-doesnt-work", "the-other-half", "the-robbery", "the-vanishing-variable", "who-cleans-galts-toilets"],
    marketKeys: ["minds", "bodies", "souls", "hearts", "systems"],
  },
};

export const connectionGraph: CanonConnection[] = [
  {
    id: "blackmail-to-public-interest",
    from: "blackmail-black-male",
    to: "in-the-public-interest",
    type: "consequence-chain",
    strength: 5,
    label: "Personal coercion becomes public logic",
    rationale: "The coerced self in Blackmail, Black Male scales into the institutional language of consent and public necessity.",
  },
  {
    id: "public-interest-to-chrysalis",
    from: "in-the-public-interest",
    to: "the-chrysalis",
    type: "structural-rhyme",
    strength: 4,
    label: "The body as public asset and private upgrade",
    rationale: "Both worlds treat the body as something larger systems can claim, improve, price, or redesign.",
  },
  {
    id: "proxy-to-number",
    from: "proxy",
    to: "the-number",
    type: "shared-market",
    strength: 5,
    label: "Desire becomes infrastructure",
    rationale: "Proxy rents the feeling of being wanted; The Number publicly prices the history of being wanted.",
  },
  {
    id: "number-to-other-half",
    from: "the-number",
    to: "the-other-half",
    type: "consequence-chain",
    strength: 5,
    label: "Measured intimacy becomes designed intimacy",
    rationale: "Once intimacy can be ranked, it can also be partitioned into separate social functions.",
  },
  {
    id: "last-frequency-to-long-goodbye",
    from: "the-last-frequency",
    to: "the-long-goodbye",
    type: "shared-idea",
    strength: 5,
    label: "Memory as inheritance and wound",
    rationale: "Both worlds ask whether memory preserves love or extends suffering.",
  },
  {
    id: "long-goodbye-to-robbery",
    from: "the-long-goodbye",
    to: "the-robbery",
    type: "thematic-echo",
    strength: 4,
    label: "Loss becomes architecture",
    rationale: "The Long Goodbye explores loss as disappearance; The Robbery explores loss as a defense system built around emptiness.",
  },
  {
    id: "mirror-to-blackmail",
    from: "the-mirror-doesnt-work",
    to: "blackmail-black-male",
    type: "philosophical-counterpoint",
    strength: 5,
    label: "External threat, inherited gaze",
    rationale: "One world focuses on coercion from the outside; the other asks how that coercion survives inside the self.",
  },
  {
    id: "vanishing-to-galt",
    from: "the-vanishing-variable",
    to: "who-cleans-galts-toilets",
    type: "structural-rhyme",
    strength: 5,
    label: "Dependency exposed by absence",
    rationale: "Both worlds expose systems that depend on people they undervalue, blame, or render invisible.",
  },
  {
    id: "gods-to-galt",
    from: "when-gods-stay-quiet",
    to: "who-cleans-galts-toilets",
    type: "philosophical-counterpoint",
    strength: 4,
    label: "Unused power and inherited hierarchy",
    rationale: "Both interrogate the moral responsibility of those who can intervene but choose not to see dependence clearly.",
  },
  {
    id: "second-burning-to-last-frequency",
    from: "the-second-burning",
    to: "the-last-frequency",
    type: "shared-idea",
    strength: 4,
    label: "Knowledge survives, meaning is endangered",
    rationale: "The Second Burning rewrites interpretation; The Last Frequency asks what remains when memory itself is severed.",
  },
  {
    id: "chrysalis-to-proxy",
    from: "the-chrysalis",
    to: "proxy",
    type: "structural-rhyme",
    strength: 4,
    label: "Managed body, rented self",
    rationale: "The Chrysalis commodifies biological improvement while Proxy commodifies emotional experience.",
  },
  {
    id: "vanishing-to-second-burning",
    from: "the-vanishing-variable",
    to: "the-second-burning",
    type: "thematic-echo",
    strength: 3,
    label: "Absence and erasure",
    rationale: "One world removes the exploited variable; the other preserves the archive while eroding interpretation.",
  },
];

export const contradictionMap: CanonContradiction[] = [
  {
    id: "freedom-through-dependency",
    type: "economic",
    worldSlugs: ["the-chrysalis", "proxy", "who-cleans-galts-toilets"],
    thesis: "The market promises freedom from limitation.",
    contradiction: "The purchased freedom creates dependency on platforms, upgrades, substitutes, and invisible maintenance labor.",
    readerQuestion: "When does convenience become captivity?",
  },
  {
    id: "visibility-through-control",
    type: "political",
    worldSlugs: ["the-number", "blackmail-black-male", "in-the-public-interest"],
    thesis: "Visibility promises honesty, safety, or accountability.",
    contradiction: "Visibility also enables ranking, humiliation, surveillance, targeting, and institutional capture.",
    readerQuestion: "Who benefits when private life becomes publicly legible?",
  },
  {
    id: "escape-without-liberation",
    type: "identity",
    worldSlugs: ["the-mirror-doesnt-work", "the-vanishing-variable", "the-robbery"],
    thesis: "Escape should produce freedom.",
    contradiction: "The logic of the cage can survive inside self-image, absence, and defensive emptiness.",
    readerQuestion: "What must be unlearned before escape becomes liberation?",
  },
  {
    id: "love-through-division",
    type: "intimate",
    worldSlugs: ["proxy", "the-number", "the-other-half", "the-long-goodbye"],
    thesis: "Love asks to be whole.",
    contradiction: "The market makes intimacy easier to manage by dividing it into measurable, rentable, or replaceable parts.",
    readerQuestion: "Can intimacy survive once every part of it has a separate price?",
  },
  {
    id: "memory-as-salvation-and-prison",
    type: "spiritual",
    worldSlugs: ["the-last-frequency", "the-long-goodbye", "the-second-burning"],
    thesis: "Memory preserves meaning.",
    contradiction: "Memory can also trap people inside grief, inherited interpretation, or curated truth.",
    readerQuestion: "Is remembering always rescue?",
  },
  {
    id: "power-without-responsibility",
    type: "moral",
    worldSlugs: ["when-gods-stay-quiet", "in-the-public-interest", "who-cleans-galts-toilets"],
    thesis: "Power justifies itself as order, greatness, or protection.",
    contradiction: "Power becomes morally illegible when it refuses responsibility for the people made vulnerable by its design.",
    readerQuestion: "What does power owe to those who cannot opt out of its consequences?",
  },
];

function canonicalNodes(): ReadingOrderNode[] {
  return Object.values(worldIndex)
    .sort((a, b) => a.anthologyPosition - b.anthologyPosition)
    .map((world) => ({
      slug: world.slug,
      order: world.anthologyPosition,
      reason: world.canonRole,
    }));
}

export const readingOrderGraph: Record<ReadingPathKey, ReadingPath> = {
  canonical: {
    key: "canonical",
    label: "Canonical Anthology Order",
    description: "The primary route through the anthology’s moral, market, and philosophical architecture.",
    nodes: canonicalNodes(),
  },
  "race-power-and-systems": {
    key: "race-power-and-systems",
    label: "Race, Power, and Systems",
    description: "A path through racialized coercion, inherited gaze, disappearance, policy, and invisible labor.",
    nodes: [
      { slug: "blackmail-black-male", order: 1, reason: "Begins with coercion at the level of the individual self." },
      { slug: "the-mirror-doesnt-work", order: 2, reason: "Turns coercion inward as inherited perception." },
      { slug: "the-vanishing-variable", order: 3, reason: "Tests what happens when the extracted group disappears." },
      { slug: "in-the-public-interest", order: 4, reason: "Shows harm renamed as institutional necessity." },
      { slug: "who-cleans-galts-toilets", order: 5, reason: "Ends with dependency and invisible labor after the revolution." },
    ],
  },
  "intimacy-desire-and-loss": {
    key: "intimacy-desire-and-loss",
    label: "Intimacy, Desire, and Loss",
    description: "A path through rented desire, public sexual value, divided partnership, grief, and defensive emptiness.",
    nodes: [
      { slug: "proxy", order: 1, reason: "Begins with desire as rented memory." },
      { slug: "the-number", order: 2, reason: "Makes desire publicly visible and socially priced." },
      { slug: "the-other-half", order: 3, reason: "Partitions intimacy into competing roles." },
      { slug: "the-long-goodbye", order: 4, reason: "Introduces loss as slow disappearance." },
      { slug: "the-robbery", order: 5, reason: "Concludes with self-protection as the final thief." },
    ],
  },
  "memory-truth-and-meaning": {
    key: "memory-truth-and-meaning",
    label: "Memory, Truth, and Meaning",
    description: "A path through memory, signal, forgetting, interpretation, knowledge, and grief.",
    nodes: [
      { slug: "the-last-frequency", order: 1, reason: "Begins with history and signal after severance." },
      { slug: "the-long-goodbye", order: 2, reason: "Places memory inside intimate grief." },
      { slug: "the-second-burning", order: 3, reason: "Moves from personal memory to cultural interpretation." },
      { slug: "the-mirror-doesnt-work", order: 4, reason: "Shows inherited meaning shaping self-perception." },
    ],
  },
  "technology-body-and-proxy": {
    key: "technology-body-and-proxy",
    label: "Technology, Body, and Proxy",
    description: "A path through redesigned bodies, delegated experience, engineered truth, and institutional ownership.",
    nodes: [
      { slug: "the-chrysalis", order: 1, reason: "Starts with the body as upgrade path." },
      { slug: "proxy", order: 2, reason: "Moves from upgraded biology to rented experience." },
      { slug: "the-second-burning", order: 3, reason: "Shows knowledge and meaning shaped without open flames." },
      { slug: "in-the-public-interest", order: 4, reason: "Ends with the body and consent under public authority." },
    ],
  },
  "souls-faith-and-freedom": {
    key: "souls-faith-and-freedom",
    label: "Souls, Faith, and Freedom",
    description: "A path through silence, memory, grief, moral responsibility, and the cost of self-protection.",
    nodes: [
      { slug: "when-gods-stay-quiet", order: 1, reason: "Begins with power that refuses to intervene." },
      { slug: "the-last-frequency", order: 2, reason: "Asks what remains when history is severed." },
      { slug: "the-long-goodbye", order: 3, reason: "Turns absence into intimate grief." },
      { slug: "the-robbery", order: 4, reason: "Ends with freedom threatened by self-defense." },
    ],
  },
};

export const anthologyTimeline: TimelineEvent[] = [
  {
    id: "origin-pressure-01",
    era: "origin-pressure",
    order: 1,
    title: "The self enters the market under pressure",
    worldSlugs: ["blackmail-black-male", "in-the-public-interest"],
    description: "The anthology begins where safety, consent, and bodily sovereignty are compromised before choice can fully appear.",
  },
  {
    id: "market-formation-01",
    era: "market-formation",
    order: 2,
    title: "Desire, body, and progress become purchasable",
    worldSlugs: ["proxy", "the-chrysalis", "the-number", "the-other-half"],
    description: "Desire, bodily improvement, sexual history, and relational design become structured by market logic.",
  },
  {
    id: "market-normalization-01",
    era: "market-normalization",
    order: 3,
    title: "Memory and grief become infrastructure",
    worldSlugs: ["the-last-frequency", "the-long-goodbye", "the-robbery"],
    description: "The anthology turns from visible markets to the inner economies of remembrance, loss, and self-protection.",
  },
  {
    id: "systemic-crisis-01",
    era: "systemic-crisis",
    order: 4,
    title: "The system loses what it depends on",
    worldSlugs: ["the-mirror-doesnt-work", "the-vanishing-variable", "when-gods-stay-quiet"],
    description: "Inherited gaze, disappearance, and unused power reveal how systems survive by hiding their dependence.",
  },
  {
    id: "inheritance-aftermath-01",
    era: "inheritance-and-aftermath",
    order: 5,
    title: "Knowledge and hierarchy survive the revolution",
    worldSlugs: ["the-second-burning", "who-cleans-galts-toilets"],
    description: "The closing movement asks whether preservation or victory matters if old interpretive habits and labor hierarchies remain intact.",
  },
];

export const worldCanonRegistry = {
  worldIndex,
  marketIndex,
  ideaIndex,
  connectionGraph,
  contradictionMap,
  readingOrderGraph,
  anthologyTimeline,
} as const;

export function getCanonWorld(slug: WorldSlug): CanonWorld {
  return worldIndex[slug];
}

export function getCanonWorlds(): CanonWorld[] {
  return Object.values(worldIndex).sort((a, b) => a.anthologyPosition - b.anthologyPosition);
}

export function getWorldsByMarket(market: MarketKey): CanonWorld[] {
  return marketIndex[market].worldSlugs.map((slug) => worldIndex[slug]);
}

export function getWorldsByIdea(idea: IdeaKey): CanonWorld[] {
  return ideaIndex[idea].worldSlugs.map((slug) => worldIndex[slug]);
}

export function getConnectionsForWorld(slug: WorldSlug): CanonConnection[] {
  return connectionGraph.filter((connection) => connection.from === slug || connection.to === slug);
}

export function getContradictionsForWorld(slug: WorldSlug): CanonContradiction[] {
  return contradictionMap.filter((contradiction) => contradiction.worldSlugs.includes(slug));
}

export function getReadingPath(path: ReadingPathKey = "canonical"): ReadingPath {
  return readingOrderGraph[path];
}

export function getTimelineForWorld(slug: WorldSlug): TimelineEvent[] {
  return anthologyTimeline.filter((event) => event.worldSlugs.includes(slug));
}

export function getAdjacentCanonWorlds(slug: WorldSlug): {
  previous: CanonWorld | null;
  current: CanonWorld;
  next: CanonWorld | null;
} {
  const ordered = getCanonWorlds();
  const index = ordered.findIndex((world) => world.slug === slug);

  return {
    previous: index > 0 ? ordered[index - 1] : null,
    current: worldIndex[slug],
    next: index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : null,
  };
}

export function validateWorldCanonRegistry(): string[] {
  const errors: string[] = [];
  const knownWorldSlugs = new Set<WorldSlug>(worldSlugs);
  const knownMarketKeys = new Set<MarketKey>(marketKeys);
  const knownIdeaKeys = new Set<IdeaKey>(ideaKeys);

  for (const slug of worldSlugs) {
    if (!worldIndex[slug]) errors.push(`Missing worldIndex entry for ${slug}.`);
  }

  for (const world of Object.values(worldIndex)) {
    if (!knownMarketKeys.has(world.market)) errors.push(`${world.slug} has unknown market ${world.market}.`);
    for (const idea of [...world.primaryIdeas, ...world.secondaryIdeas]) {
      if (!knownIdeaKeys.has(idea)) errors.push(`${world.slug} references unknown idea ${idea}.`);
    }
  }

  for (const market of Object.values(marketIndex)) {
    for (const slug of market.worldSlugs) {
      if (!knownWorldSlugs.has(slug)) errors.push(`${market.key} market references unknown world ${slug}.`);
    }
  }

  for (const idea of Object.values(ideaIndex)) {
    for (const slug of idea.worldSlugs) {
      if (!knownWorldSlugs.has(slug)) errors.push(`${idea.key} idea references unknown world ${slug}.`);
    }
    for (const market of idea.marketKeys) {
      if (!knownMarketKeys.has(market)) errors.push(`${idea.key} idea references unknown market ${market}.`);
    }
  }

  for (const connection of connectionGraph) {
    if (!knownWorldSlugs.has(connection.from)) errors.push(`${connection.id} has unknown from world ${connection.from}.`);
    if (!knownWorldSlugs.has(connection.to)) errors.push(`${connection.id} has unknown to world ${connection.to}.`);
  }

  for (const contradiction of contradictionMap) {
    for (const slug of contradiction.worldSlugs) {
      if (!knownWorldSlugs.has(slug)) errors.push(`${contradiction.id} contradiction references unknown world ${slug}.`);
    }
  }

  for (const path of Object.values(readingOrderGraph)) {
    for (const node of path.nodes) {
      if (!knownWorldSlugs.has(node.slug)) errors.push(`${path.key} reading path references unknown world ${node.slug}.`);
    }
  }

  for (const event of anthologyTimeline) {
    for (const slug of event.worldSlugs) {
      if (!knownWorldSlugs.has(slug)) errors.push(`${event.id} timeline event references unknown world ${slug}.`);
    }
  }

  return errors;
}
