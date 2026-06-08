import { type World, worlds } from "@/lib/worlds";

export type MarketName = World["market"];

export type Market = {
  name: MarketName;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  question: string;
  thesis: string;
};

export const marketDetails: Market[] = [
  {
    name: "Bodies",
    slug: "bodies",
    title: "Bodies Market",
    shortTitle: "Bodies",
    description:
      "Worlds where the body becomes data, status, upgrade path, proof, or commodity.",
    question:
      "What happens when the body is no longer private, natural, or enough?",
    thesis:
      "The body becomes the first marketplace because it is the first thing the world learns how to measure.",
  },
  {
    name: "Hearts",
    slug: "hearts",
    title: "Hearts Market",
    shortTitle: "Hearts",
    description:
      "Worlds where love, care, grief, loyalty, desire, and belonging are priced or divided into competing economies.",
    question:
      "What happens when intimacy becomes an arrangement instead of a refuge?",
    thesis:
      "The heart becomes commodified when love is forced to justify itself through utility, efficiency, or exchange.",
  },
  {
    name: "Minds",
    slug: "minds",
    title: "Minds Market",
    shortTitle: "Minds",
    description:
      "Worlds where memory, consciousness, belief, perception, and meaning are shaped by systems that can rent, rewrite, or replace them.",
    question:
      "What happens when the inner life becomes programmable?",
    thesis:
      "The mind becomes a market when attention, memory, knowledge, and desire can be engineered from the outside.",
  },
  {
    name: "Souls",
    slug: "souls",
    title: "Souls Market",
    shortTitle: "Souls",
    description:
      "Worlds where morality, divinity, silence, sacrifice, and accountability become contested forms of value.",
    question:
      "What remains sacred when even conscience can be negotiated?",
    thesis:
      "The soul becomes commodified when moral responsibility is converted into spectacle, permission, or transaction.",
  },
  {
    name: "Systems",
    slug: "systems",
    title: "Systems Market",
    shortTitle: "Systems",
    description:
      "Worlds where governance, race, labor, law, safety, and public interest become machinery for distributing value and harm.",
    question:
      "Who benefits when systems call control protection?",
    thesis:
      "Systems commodify the self by deciding which lives become resources, risks, costs, or exceptions.",
  },
];

export const marketNav = [
  { label: "All Worlds", href: "/worlds", count: worlds.length },
  ...marketDetails.map((market) => ({
    label: market.shortTitle,
    href: `/markets/${market.slug}`,
    count: worlds.filter((world) => world.market === market.name).length,
  })),
];

export function getMarketBySlug(slug: string) {
  return marketDetails.find((market) => market.slug === slug);
}

export function getWorldsByMarket(marketName: MarketName) {
  return worlds.filter((world) => world.market === marketName);
}

export function getMarketForWorld(world: World) {
  return marketDetails.find((market) => market.name === world.market);
}
