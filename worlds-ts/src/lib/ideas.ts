import { World, worlds } from "@/lib/worlds";
import { marketDetails } from "@/lib/markets";

export type Idea = {
  name: string;
  slug: string;
  description: string;
  question: string;
  thesis: string;
  relatedIdeas: string[];
};

export type IdeaRelationship = {
  from: string;
  to: string;
  note: string;
};

export const ideas: Idea[] = [
  {
    name: "Identity",
    slug: "identity",
    description:
      "Worlds where the self becomes visible, measurable, inherited, or performed under pressure.",
    question: "Who are you when the world insists on defining you first?",
    thesis:
      "Identity becomes unstable when the world can assign, display, inherit, optimize, or monetize the answer before the self can speak.",
    relatedIdeas: ["desire", "truth", "value"],
  },
  {
    name: "Desire",
    slug: "desire",
    description:
      "Worlds where longing becomes a product, a ranking system, a subscription, or a strategy.",
    question: "What happens when wanting itself becomes infrastructure?",
    thesis:
      "Desire becomes a market when longing is no longer private feeling but a system of access, substitution, ranking, and exchange.",
    relatedIdeas: ["identity", "value", "freedom"],
  },
  {
    name: "Memory",
    slug: "memory",
    description:
      "Worlds where remembrance, forgetting, grief, record, and inherited meaning become contested territory.",
    question: "What remains true when memory can be edited, erased, rented, or replaced?",
    thesis:
      "Memory becomes a battleground when the past can be stored, revised, inherited, purchased, or made unavailable.",
    relatedIdeas: ["truth", "meaning", "freedom"],
  },
  {
    name: "Power",
    slug: "power",
    description:
      "Worlds where safety, governance, silence, race, labor, and value reveal who benefits from control.",
    question: "Who gains when power describes itself as protection?",
    thesis:
      "Power hides most effectively when it renames extraction as order, harm as policy, and containment as care.",
    relatedIdeas: ["control", "value", "freedom"],
  },
  {
    name: "Control",
    slug: "control",
    description:
      "Worlds where systems manage consent, perception, risk, knowledge, and acceptable behavior.",
    question: "When does guidance become containment?",
    thesis:
      "Control becomes intimate when systems stop merely governing behavior and begin shaping what people are allowed to want, know, fear, or remember.",
    relatedIdeas: ["power", "truth", "freedom"],
  },
  {
    name: "Truth",
    slug: "truth",
    description:
      "Worlds where evidence, confession, signal, public record, and private reality compete for authority.",
    question: "What counts as truth when reality needs an apparatus to be seen?",
    thesis:
      "Truth becomes precarious when systems decide which evidence can be trusted, which lives count as data, and which realities remain invisible.",
    relatedIdeas: ["identity", "memory", "meaning"],
  },
  {
    name: "Meaning",
    slug: "meaning",
    description:
      "Worlds where knowledge, faith, conscience, signal, and purpose become scarce or manufactured.",
    question: "What remains meaningful after meaning becomes programmable?",
    thesis:
      "Meaning becomes vulnerable when purpose, belief, conscience, and knowledge can be engineered, optimized, muted, or replaced.",
    relatedIdeas: ["truth", "memory", "value"],
  },
  {
    name: "Value",
    slug: "value",
    description:
      "Worlds where people, bodies, labor, grief, desire, and protection are translated into price.",
    question: "What is lost when everything learns how to be valued?",
    thesis:
      "Value becomes dangerous when price stops measuring things and begins deciding what people deserve, fear, sacrifice, or become.",
    relatedIdeas: ["power", "desire", "identity"],
  },
  {
    name: "Freedom",
    slug: "freedom",
    description:
      "Worlds where escape is complicated by dependency, inheritance, fear, and self-made confinement.",
    question: "What kind of freedom survives after the cage has moved inside?",
    thesis:
      "Freedom becomes ambiguous when the visible system breaks but its logic survives inside memory, desire, fear, and self-protection.",
    relatedIdeas: ["control", "power", "memory"],
  },
];


export const ideaRelationships: IdeaRelationship[] = [
  {
    from: "identity",
    to: "desire",
    note: "Desire becomes harder to trust when identity is assigned before the self can choose.",
  },
  {
    from: "identity",
    to: "truth",
    note: "Identity depends on who is allowed to define what counts as real about a person.",
  },
  {
    from: "identity",
    to: "value",
    note: "Once identity becomes visible, the world can rank it, price it, and trade on it.",
  },
  {
    from: "desire",
    to: "value",
    note: "Wanting becomes a marketplace when access, attention, and affection can be priced.",
  },
  {
    from: "desire",
    to: "freedom",
    note: "Freedom becomes unstable when the cage is built from appetites the system taught you to want.",
  },
  {
    from: "memory",
    to: "truth",
    note: "Truth weakens when memory can be edited, erased, rented, or inherited selectively.",
  },
  {
    from: "memory",
    to: "meaning",
    note: "Meaning survives through memory, but memory can also trap people inside inherited interpretations.",
  },
  {
    from: "memory",
    to: "freedom",
    note: "Freedom requires more than escape when the past still governs what feels possible.",
  },
  {
    from: "power",
    to: "control",
    note: "Power becomes durable when control is renamed safety, care, order, or protection.",
  },
  {
    from: "power",
    to: "value",
    note: "Power decides which lives become resources, which become risks, and which become disposable costs.",
  },
  {
    from: "power",
    to: "freedom",
    note: "Freedom is tested by the systems that benefit from calling dependency protection.",
  },
  {
    from: "control",
    to: "truth",
    note: "Control does not only restrict action; it shapes what evidence people are permitted to recognize.",
  },
  {
    from: "control",
    to: "freedom",
    note: "Containment is most complete when people experience compliance as their own choice.",
  },
  {
    from: "truth",
    to: "meaning",
    note: "Meaning collapses when truth is reduced to whatever the dominant apparatus can verify.",
  },
  {
    from: "meaning",
    to: "value",
    note: "The sacred becomes vulnerable when meaning must justify itself through utility, price, or output.",
  },
];

export function getWorldsByIdea(ideaName: string): World[] {
  return worlds.filter((world) => world.ideas.includes(ideaName));
}

export function getIdeaBySlug(slug: string): Idea | undefined {
  return ideas.find((idea) => idea.slug === slug);
}

export function getIdeaByName(name: string): Idea | undefined {
  return ideas.find((idea) => idea.name === name);
}

export function getRelatedIdeas(idea: Idea): Idea[] {
  return idea.relatedIdeas
    .map((slug) => getIdeaBySlug(slug))
    .filter((relatedIdea): relatedIdea is Idea => Boolean(relatedIdea));
}

export function getIdeaRelationshipNote(fromSlug: string, toSlug: string): string {
  return (
    ideaRelationships.find(
      (relationship) =>
        (relationship.from === fromSlug && relationship.to === toSlug) ||
        (relationship.from === toSlug && relationship.to === fromSlug),
    )?.note ?? "These ideas echo through the same worlds from different angles."
  );
}

export function getRelatedIdeaLinks(idea: Idea) {
  return getRelatedIdeas(idea).map((relatedIdea) => ({
    idea: relatedIdea,
    note: getIdeaRelationshipNote(idea.slug, relatedIdea.slug),
  }));
}

export function getRelationshipPairs() {
  return ideaRelationships
    .map((relationship) => ({
      ...relationship,
      fromIdea: getIdeaBySlug(relationship.from),
      toIdea: getIdeaBySlug(relationship.to),
    }))
    .filter(
      (relationship): relationship is IdeaRelationship & { fromIdea: Idea; toIdea: Idea } =>
        Boolean(relationship.fromIdea && relationship.toIdea),
    );
}

export function getMarketsByIdea(ideaName: string) {
  const ideaWorlds = getWorldsByIdea(ideaName);
  const marketNames = Array.from(new Set(ideaWorlds.map((world) => world.market)));

  return marketNames
    .map((marketName) => marketDetails.find((market) => market.name === marketName))
    .filter((market): market is NonNullable<typeof market> => Boolean(market));
}

export const ideaNav = ideas.map((idea) => ({
  label: idea.name,
  href: `/map/${idea.slug}`,
  count: getWorldsByIdea(idea.name).length,
}));
