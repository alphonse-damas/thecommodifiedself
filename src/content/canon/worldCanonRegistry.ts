/**
 * The Commodified Self — World Canon Registry
 * Phase 8A: Canonical source of truth for anthology relationships.
 *
 * Purpose:
 * - Keep world, market, idea, contradiction, reading-order, and timeline logic in one place.
 * - Support Atlas navigation, canonical reading paths, AI-guided exploration, and premium companion content.
 * - Avoid duplicating relationship rules inside page components.
 *
 * Notes:
 * - Slugs should match src/content/worlds.ts and src/content/worldEssays.ts.
 * - This registry is intentionally metadata-first. Long prose still belongs in world essays, prologues, and reflections.
 */

export type MarketKey =
  | "bodies"
  | "hearts"
  | "minds"
  | "souls"
  | "systems";

export type IdeaKey =
  | "identity"
  | "desire"
  | "memory"
  | "power"
  | "technology"
  | "faith"
  | "survival"
  | "race"
  | "love";

export type WorldStatus = "complete" | "draft" | "planned" | "reserved";

export type WorldSlug =
  | "when-gods-stay-quiet"
  | "the-chrysalis"
  | "blackmail-black-male"
  | "the-vanishing-variable"
  | "the-other-half"
  | "the-number"
  | "the-last-frequency"
  | "the-long-goodbye"
  | "the-mirror-doesnt-work"
  | "who-cleans-galts-toilets"
  | "proxy"
  | "in-the-public-interest"
  | "the-robbery"
  | "the-second-burning";

export type ConnectionType =
  | "shared-market"
  | "shared-idea"
  | "thematic-echo"
  | "philosophical-counterpoint"
  | "structural-rhyme"
  | "consequence-chain"
  | "reader-path";

export type ContradictionType =
  | "moral"
  | "economic"
  | "political"
  | "spiritual"
  | "technological"
  | "intimate"
  | "identity";

export type ReadingPathKey =
  | "canonical"
  | "race-and-power"
  | "body-market"
  | "love-and-intimacy"
  | "systems-and-dependency"
  | "faith-and-absence";

export interface CanonWorld {
  slug: WorldSlug;
  title: string;
  subtitle?: string;
  market: MarketKey;
  primaryIdea: IdeaKey;
  secondaryIdeas: IdeaKey[];
  anthologyPosition: number;
  status: WorldStatus;
  canonRole: string;
  coreQuestion: string;
  pressurePoint: string;
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
  era:
    | "pre-market"
    | "market-emergence"
    | "market-normalization"
    | "market-crisis"
    | "post-market-consequence";
  order: number;
  title: string;
  worldSlugs: WorldSlug[];
  description: string;
}

export const worldIndex: Record<WorldSlug, CanonWorld> = {
  "when-gods-stay-quiet": {
    slug: "when-gods-stay-quiet",
    title: "When Gods Stay Quiet",
    market: "souls",
    primaryIdea: "faith",
    secondaryIdeas: ["power", "survival"],
    anthologyPosition: 1,
    status: "complete",
    canonRole: "The spiritual opening: what happens when suffering receives no divine interruption.",
    coreQuestion: "What does faith become when silence is the only answer?",
    pressurePoint: "Divine absence becomes a marketplace for obedience, fear, and interpretation.",
  },
  "the-chrysalis": {
    slug: "the-chrysalis",
    title: "The Chrysalis",
    market: "bodies",
    primaryIdea: "technology",
    secondaryIdeas: ["identity", "survival"],
    anthologyPosition: 2,
    status: "complete",
    canonRole: "The biological market: evolution becomes subscription, upgrade, and exemption.",
    coreQuestion: "What remains human when bodily limitation becomes optional?",
    pressurePoint: "Enhancement promises freedom while creating a new dependency on managed biology.",
  },
  "blackmail-black-male": {
    slug: "blackmail-black-male",
    title: "Blackmail, Black Male",
    market: "systems",
    primaryIdea: "race",
    secondaryIdeas: ["power", "identity"],
    anthologyPosition: 3,
    status: "complete",
    canonRole: "The racial coercion case study: dignity is converted into leverage.",
    coreQuestion: "What happens when survival requires consenting to humiliation?",
    pressurePoint: "A man’s social vulnerability becomes an extractive asset.",
  },
  "the-vanishing-variable": {
    slug: "the-vanishing-variable",
    title: "The Vanishing Variable",
    market: "systems",
    primaryIdea: "race",
    secondaryIdeas: ["survival", "power"],
    anthologyPosition: 4,
    status: "complete",
    canonRole: "The disappearance hypothesis: the system confronts the loss of the people it measures and exploits.",
    coreQuestion: "What does a society lose when the people it exploits are no longer available?",
    pressurePoint: "Dependency is exposed only after the extracted population disappears.",
  },
  "the-other-half": {
    slug: "the-other-half",
    title: "The Other Half",
    market: "hearts",
    primaryIdea: "love",
    secondaryIdeas: ["desire", "identity"],
    anthologyPosition: 5,
    status: "complete",
    canonRole: "The intimacy market: love becomes partitioned, negotiated, and incomplete.",
    coreQuestion: "Can intimacy survive when people are trained to consume only part of one another?",
    pressurePoint: "The self is divided into acceptable and unacceptable halves.",
  },
  "the-number": {
    slug: "the-number",
    title: "The Number",
    market: "hearts",
    primaryIdea: "desire",
    secondaryIdeas: ["identity", "power"],
    anthologyPosition: 6,
    status: "complete",
    canonRole: "The public shame market: desire is quantified into permanent social value.",
    coreQuestion: "What happens when private history becomes public price?",
    pressurePoint: "Visibility turns intimacy into ranking, stigma, and surveillance.",
  },
  "the-last-frequency": {
    slug: "the-last-frequency",
    title: "The Last Frequency",
    market: "minds",
    primaryIdea: "memory",
    secondaryIdeas: ["technology", "love"],
    anthologyPosition: 7,
    status: "complete",
    canonRole: "The memory signal: grief, memory, and transmission blur into one another.",
    coreQuestion: "If memory can be received, replayed, or preserved, is grief interrupted or prolonged?",
    pressurePoint: "Connection survives as signal, but signal may not be presence.",
  },
  "the-long-goodbye": {
    slug: "the-long-goodbye",
    title: "The Long Goodbye",
    market: "minds",
    primaryIdea: "memory",
    secondaryIdeas: ["love", "survival"],
    anthologyPosition: 8,
    status: "complete",
    canonRole: "The grief mirror: the beloved is lost once in life and again in death.",
    coreQuestion: "How do we mourn someone who is still alive but already leaving?",
    pressurePoint: "Memory becomes both evidence of love and the instrument of loss.",
  },
  "the-mirror-doesnt-work": {
    slug: "the-mirror-doesnt-work",
    title: "The Mirror Doesn’t Work",
    subtitle: "The Gaze We Inherited",
    market: "minds",
    primaryIdea: "identity",
    secondaryIdeas: ["race", "power"],
    anthologyPosition: 9,
    status: "complete",
    canonRole: "The internalized gaze: liberation fails when the old mirror is carried forward.",
    coreQuestion: "What happens when the oppressed inherit the gaze of the oppressor?",
    pressurePoint: "Escape from a system does not guarantee escape from its logic.",
  },
  "who-cleans-galts-toilets": {
    slug: "who-cleans-galts-toilets",
    title: "Who Cleans Galt’s Toilets?",
    market: "systems",
    primaryIdea: "power",
    secondaryIdeas: ["survival", "identity"],
    anthologyPosition: 10,
    status: "complete",
    canonRole: "The maintenance-class critique: utopia depends on invisible labor it refuses to honor.",
    coreQuestion: "Who maintains paradise after the makers leave?",
    pressurePoint: "A world built on merit still requires people it calls secondary.",
  },
  proxy: {
    slug: "proxy",
    title: "Proxy",
    market: "systems",
    primaryIdea: "technology",
    secondaryIdeas: ["identity", "power"],
    anthologyPosition: 11,
    status: "complete",
    canonRole: "The delegated self: agency is outsourced until responsibility becomes unclear.",
    coreQuestion: "Who is accountable when the self acts through substitutes?",
    pressurePoint: "Convenience separates action from consequence.",
  },
  "in-the-public-interest": {
    slug: "in-the-public-interest",
    title: "In the Public Interest",
    market: "systems",
    primaryIdea: "power",
    secondaryIdeas: ["race", "survival"],
    anthologyPosition: 12,
    status: "complete",
    canonRole: "The policy machine: extraction is renamed protection, order, or reform.",
    coreQuestion: "Who decides what suffering is acceptable in the name of public interest?",
    pressurePoint: "Institutional language converts harm into governance.",
  },
  "the-robbery": {
    slug: "the-robbery",
    title: "The Robbery",
    market: "hearts",
    primaryIdea: "love",
    secondaryIdeas: ["memory", "survival"],
    anthologyPosition: 13,
    status: "complete",
    canonRole: "The emotional trial: failed love becomes evidence in a case against openness itself.",
    coreQuestion: "What is stolen when someone protects themselves from being hurt again?",
    pressurePoint: "Self-protection becomes a prison mistaken for justice.",
  },
  "the-second-burning": {
    slug: "the-second-burning",
    title: "The Second Burning",
    market: "systems",
    primaryIdea: "race",
    secondaryIdeas: ["memory", "power"],
    anthologyPosition: 14,
    status: "complete",
    canonRole: "The historical recurrence: destruction returns in a modernized form.",
    coreQuestion: "What does a second burning reveal about the first one?",
    pressurePoint: "History repeats when the underlying ownership threat remains unresolved.",
  },
};

export const marketIndex: Record<MarketKey, MarketIndexEntry> = {
  bodies: {
    key: "bodies",
    label: "Bodies",
    thesis: "The body becomes a site of optimization, ownership, ranking, and dependency.",
    worldSlugs: ["the-chrysalis"],
    ideaKeys: ["technology", "identity", "survival"],
  },
  hearts: {
    key: "hearts",
    label: "Hearts",
    thesis: "Intimacy becomes measurable, tradable, punishable, or defensible.",
    worldSlugs: ["the-other-half", "the-number", "the-robbery"],
    ideaKeys: ["love", "desire", "identity", "memory", "survival"],
  },
  minds: {
    key: "minds",
    label: "Minds",
    thesis: "Memory, identity, and perception become contested territories.",
    worldSlugs: ["the-last-frequency", "the-long-goodbye", "the-mirror-doesnt-work"],
    ideaKeys: ["memory", "identity", "technology", "love", "race", "power"],
  },
  souls: {
    key: "souls",
    label: "Souls",
    thesis: "Faith and meaning are tested by silence, obedience, and unmet need.",
    worldSlugs: ["when-gods-stay-quiet"],
    ideaKeys: ["faith", "power", "survival"],
  },
  systems: {
    key: "systems",
    label: "Systems",
    thesis: "Institutions convert dependency, labor, race, risk, and agency into managed value.",
    worldSlugs: [
      "blackmail-black-male",
      "the-vanishing-variable",
      "who-cleans-galts-toilets",
      "proxy",
      "in-the-public-interest",
      "the-second-burning",
    ],
    ideaKeys: ["race", "power", "survival", "technology", "identity", "memory"],
  },
};

export const ideaIndex: Record<IdeaKey, IdeaIndexEntry> = {
  identity: {
    key: "identity",
    label: "Identity",
    thesis: "The self is shaped by mirrors, markets, labels, substitutes, and inherited gazes.",
    worldSlugs: ["the-chrysalis", "the-other-half", "the-number", "the-mirror-doesnt-work", "proxy"],
    marketKeys: ["bodies", "hearts", "minds", "systems"],
  },
  desire: {
    key: "desire",
    label: "Desire",
    thesis: "Want becomes a visible credential, a shame mechanism, or a purchasing signal.",
    worldSlugs: ["the-other-half", "the-number"],
    marketKeys: ["hearts"],
  },
  memory: {
    key: "memory",
    label: "Memory",
    thesis: "Memory preserves meaning while also prolonging grief, debt, and historical recurrence.",
    worldSlugs: ["the-last-frequency", "the-long-goodbye", "the-robbery", "the-second-burning"],
    marketKeys: ["minds", "hearts", "systems"],
  },
  power: {
    key: "power",
    label: "Power",
    thesis: "Power decides which dependencies are visible, which harms are named, and which people are protected.",
    worldSlugs: [
      "when-gods-stay-quiet",
      "blackmail-black-male",
      "the-vanishing-variable",
      "the-number",
      "the-mirror-doesnt-work",
      "who-cleans-galts-toilets",
      "proxy",
      "in-the-public-interest",
      "the-second-burning",
    ],
    marketKeys: ["souls", "systems", "hearts", "minds"],
  },
  technology: {
    key: "technology",
    label: "Technology",
    thesis: "Technology promises liberation while creating new forms of dependency and distance.",
    worldSlugs: ["the-chrysalis", "the-last-frequency", "proxy"],
    marketKeys: ["bodies", "minds", "systems"],
  },
  faith: {
    key: "faith",
    label: "Faith",
    thesis: "Faith is strained by silence, suffering, and the marketplace of explanation.",
    worldSlugs: ["when-gods-stay-quiet"],
    marketKeys: ["souls"],
  },
  survival: {
    key: "survival",
    label: "Survival",
    thesis: "Survival often requires compromise with the same forces that diminish the self.",
    worldSlugs: [
      "when-gods-stay-quiet",
      "the-chrysalis",
      "the-vanishing-variable",
      "the-long-goodbye",
      "who-cleans-galts-toilets",
      "in-the-public-interest",
      "the-robbery",
    ],
    marketKeys: ["souls", "bodies", "systems", "minds", "hearts"],
  },
  race: {
    key: "race",
    label: "Race",
    thesis: "Race exposes the market’s dependence on domination, measurement, ownership threat, and humiliation.",
    worldSlugs: [
      "blackmail-black-male",
      "the-vanishing-variable",
      "the-mirror-doesnt-work",
      "in-the-public-interest",
      "the-second-burning",
    ],
    marketKeys: ["systems", "minds"],
  },
  love: {
    key: "love",
    label: "Love",
    thesis: "Love becomes a test of whether people can resist turning injury into permanent architecture.",
    worldSlugs: ["the-other-half", "the-last-frequency", "the-long-goodbye", "the-robbery"],
    marketKeys: ["hearts", "minds"],
  },
};

export const connectionGraph: CanonConnection[] = [
  {
    id: "race-power-01",
    from: "blackmail-black-male",
    to: "in-the-public-interest",
    type: "consequence-chain",
    strength: 5,
    label: "Humiliation becomes policy",
    rationale: "Personal coercion scales into institutional language and public justification.",
  },
  {
    id: "race-power-02",
    from: "the-second-burning",
    to: "the-vanishing-variable",
    type: "philosophical-counterpoint",
    strength: 5,
    label: "Destruction versus disappearance",
    rationale: "One world shows what happens when Black ownership is attacked; the other asks what happens when Black presence is withdrawn.",
  },
  {
    id: "identity-01",
    from: "the-mirror-doesnt-work",
    to: "blackmail-black-male",
    type: "thematic-echo",
    strength: 4,
    label: "External gaze, internal gaze",
    rationale: "Both worlds examine how domination survives through the management of self-image.",
  },
  {
    id: "intimacy-01",
    from: "the-number",
    to: "the-other-half",
    type: "shared-market",
    strength: 4,
    label: "Intimacy under measurement",
    rationale: "Both worlds place desire and acceptability inside a market logic.",
  },
  {
    id: "intimacy-02",
    from: "the-other-half",
    to: "the-robbery",
    type: "consequence-chain",
    strength: 4,
    label: "Division becomes defense",
    rationale: "Partitioned intimacy can harden into a legal and emotional defense of emptiness.",
  },
  {
    id: "memory-01",
    from: "the-last-frequency",
    to: "the-long-goodbye",
    type: "shared-idea",
    strength: 5,
    label: "Memory as presence and wound",
    rationale: "Both worlds treat memory as love’s proof and grief’s instrument.",
  },
  {
    id: "technology-01",
    from: "the-chrysalis",
    to: "proxy",
    type: "structural-rhyme",
    strength: 4,
    label: "Upgraded body, delegated self",
    rationale: "One world commodifies biological improvement; the other commodifies agency and responsibility.",
  },
  {
    id: "systems-01",
    from: "who-cleans-galts-toilets",
    to: "in-the-public-interest",
    type: "thematic-echo",
    strength: 5,
    label: "Invisible labor, official language",
    rationale: "Both expose systems that depend on people they rhetorically diminish.",
  },
  {
    id: "faith-01",
    from: "when-gods-stay-quiet",
    to: "the-long-goodbye",
    type: "thematic-echo",
    strength: 3,
    label: "Silence and loss",
    rationale: "Divine silence and cognitive disappearance both force characters to live without rescue.",
  },
];

export const contradictionMap: CanonContradiction[] = [
  {
    id: "freedom-dependency",
    type: "economic",
    worldSlugs: ["the-chrysalis", "proxy", "who-cleans-galts-toilets"],
    thesis: "The market sells freedom.",
    contradiction: "The purchased freedom creates dependency on systems, platforms, maintenance, and unseen labor.",
    readerQuestion: "When does convenience become captivity?",
  },
  {
    id: "visibility-protection",
    type: "political",
    worldSlugs: ["the-number", "blackmail-black-male", "the-second-burning"],
    thesis: "Visibility promises accountability.",
    contradiction: "Visibility also enables ranking, humiliation, targeting, and destruction.",
    readerQuestion: "Who benefits when private life becomes publicly legible?",
  },
  {
    id: "escape-repetition",
    type: "identity",
    worldSlugs: ["the-mirror-doesnt-work", "the-vanishing-variable", "in-the-public-interest"],
    thesis: "Escape from oppression should produce liberation.",
    contradiction: "The logic of oppression can survive inside policy, memory, and the self.",
    readerQuestion: "What must be unlearned before escape becomes freedom?",
  },
  {
    id: "love-protection",
    type: "intimate",
    worldSlugs: ["the-other-half", "the-number", "the-robbery"],
    thesis: "Love requires openness.",
    contradiction: "The injured self often survives by building structures that prevent love from entering.",
    readerQuestion: "Can self-protection become another form of loss?",
  },
  {
    id: "faith-silence",
    type: "spiritual",
    worldSlugs: ["when-gods-stay-quiet", "the-long-goodbye", "the-last-frequency"],
    thesis: "Meaning should answer suffering.",
    contradiction: "The deepest suffering often arrives without answer, only interpretation.",
    readerQuestion: "Is an unanswered prayer empty, or does it reveal the cost of belief?",
  },
];

export const readingOrderGraph: Record<ReadingPathKey, ReadingPath> = {
  canonical: {
    key: "canonical",
    label: "Canonical Anthology Order",
    description: "The recommended first journey through the anthology’s markets and moral architecture.",
    nodes: Object.values(worldIndex)
      .sort((a, b) => a.anthologyPosition - b.anthologyPosition)
      .map((world) => ({
        slug: world.slug,
        order: world.anthologyPosition,
        reason: world.canonRole,
      })),
  },
  "race-and-power": {
    key: "race-and-power",
    label: "Race, Power, and Ownership",
    description: "A path through racialized vulnerability, ownership threat, disappearance, policy, and historical recurrence.",
    nodes: [
      { slug: "blackmail-black-male", order: 1, reason: "Begins with intimate racial coercion." },
      { slug: "the-second-burning", order: 2, reason: "Expands coercion into ownership destruction." },
      { slug: "the-vanishing-variable", order: 3, reason: "Imagines withdrawal from the extractive system." },
      { slug: "the-mirror-doesnt-work", order: 4, reason: "Turns from external systems to inherited internal gaze." },
      { slug: "in-the-public-interest", order: 5, reason: "Ends with harm translated into institutional language." },
    ],
  },
  "body-market": {
    key: "body-market",
    label: "Bodies, Technology, and the Managed Self",
    description: "A path through enhancement, agency, delegation, and the costs of optimized life.",
    nodes: [
      { slug: "the-chrysalis", order: 1, reason: "Introduces the body as subscription." },
      { slug: "proxy", order: 2, reason: "Moves from upgraded biology to outsourced agency." },
      { slug: "the-last-frequency", order: 3, reason: "Shows technology mediating memory and presence." },
    ],
  },
  "love-and-intimacy": {
    key: "love-and-intimacy",
    label: "Love, Desire, and Emotional Debt",
    description: "A path through desire, partitioned intimacy, grief, and the legal defense of emptiness.",
    nodes: [
      { slug: "the-number", order: 1, reason: "Begins with desire made publicly measurable." },
      { slug: "the-other-half", order: 2, reason: "Shows intimacy divided into acceptable and unacceptable parts." },
      { slug: "the-long-goodbye", order: 3, reason: "Adds grief and anticipatory loss." },
      { slug: "the-robbery", order: 4, reason: "Concludes with injury becoming emotional jurisprudence." },
    ],
  },
  "systems-and-dependency": {
    key: "systems-and-dependency",
    label: "Systems, Dependency, and Invisible Labor",
    description: "A path through the institutions that rename dependence as order, efficiency, or merit.",
    nodes: [
      { slug: "who-cleans-galts-toilets", order: 1, reason: "Starts with invisible maintenance labor." },
      { slug: "in-the-public-interest", order: 2, reason: "Shows harm rationalized by governance." },
      { slug: "proxy", order: 3, reason: "Adds delegated action and diffused accountability." },
      { slug: "the-vanishing-variable", order: 4, reason: "Tests what happens when the extracted variable disappears." },
    ],
  },
  "faith-and-absence": {
    key: "faith-and-absence",
    label: "Faith, Silence, and Absence",
    description: "A path through divine silence, signal, grief, and the search for meaning after loss.",
    nodes: [
      { slug: "when-gods-stay-quiet", order: 1, reason: "Begins with spiritual silence." },
      { slug: "the-last-frequency", order: 2, reason: "Turns absence into signal." },
      { slug: "the-long-goodbye", order: 3, reason: "Ends with the living disappearance of the beloved." },
    ],
  },
};

export const anthologyTimeline: TimelineEvent[] = [
  {
    id: "timeline-01",
    era: "pre-market",
    order: 1,
    title: "Meaning before transaction",
    worldSlugs: ["when-gods-stay-quiet"],
    description: "The anthology opens with suffering, faith, silence, and the human demand for explanation.",
  },
  {
    id: "timeline-02",
    era: "market-emergence",
    order: 2,
    title: "The self becomes measurable",
    worldSlugs: ["the-number", "the-chrysalis"],
    description: "Bodies and intimate histories become ranked, upgraded, priced, and publicly interpreted.",
  },
  {
    id: "timeline-03",
    era: "market-normalization",
    order: 3,
    title: "Markets enter intimacy and memory",
    worldSlugs: ["the-other-half", "the-last-frequency", "the-long-goodbye", "the-robbery"],
    description: "Love, grief, memory, and self-protection become structured by market logic.",
  },
  {
    id: "timeline-04",
    era: "market-crisis",
    order: 4,
    title: "Systems reveal their dependencies",
    worldSlugs: ["who-cleans-galts-toilets", "proxy", "in-the-public-interest"],
    description: "The anthology turns toward institutions, invisible labor, delegation, and official justifications.",
  },
  {
    id: "timeline-05",
    era: "post-market-consequence",
    order: 5,
    title: "Race, recurrence, and withdrawal",
    worldSlugs: ["blackmail-black-male", "the-second-burning", "the-mirror-doesnt-work", "the-vanishing-variable"],
    description: "The final pressure exposes racialized extraction, inherited gaze, recurring destruction, and disappearance.",
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
