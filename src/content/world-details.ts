import { worlds as canonicalWorlds } from "./worlds";

export type WorldDetail = {
  slug: string;
  catalogLine: string;
  synopsis: string[];
  reflection: string[];
  authorNote: string[];
  excerptStatus: "available" | "coming-soon";
  excerptLabel: string;
  excerptNote: string;
  excerptText?: string[];
};

type CanonicalWorld = (typeof canonicalWorlds)[number] & {
  logline?: string;
  synopsisShort?: string;
  synopsisLong?: string[];
  whyThisWorldExists?: string;
  authorNote?: string;
  excerpt?: {
    status?: "available" | "coming-soon";
    label?: string;
    teaser?: string;
    text?: string[];
  };
};

export const worldDetails: WorldDetail[] = (canonicalWorlds as CanonicalWorld[]).map((world) => ({
  slug: world.slug,
  catalogLine: world.synopsisShort ?? world.logline ?? world.coreQuestion,
  synopsis: world.synopsisLong?.length ? world.synopsisLong : [world.premise],
  reflection: world.whyThisWorldExists ? [world.whyThisWorldExists] : [world.coreQuestion],
  authorNote: world.authorNote ? [world.authorNote] : [],
  excerptStatus: world.excerpt?.status ?? "coming-soon",
  excerptLabel: world.excerpt?.label ?? "Opening pages coming soon",
  excerptNote:
    world.excerpt?.teaser ??
    "This world will eventually include a first excerpt or opening chapter preview.",
  excerptText: world.excerpt?.text,
}));

export function getWorldDetail(slug: string): WorldDetail | null {
  return worldDetails.find((detail) => detail.slug === slug) ?? null;
}
