import { worldEssays as blackmail } from "./worldEssays/blackmail";
import { worldEssays as publicInterest } from "./worldEssays/in-the-public-interest";
import { worldEssays as proxy } from "./worldEssays/proxy";
import { worldEssays as chrysalis } from "./worldEssays/the-chrysalis";
import { worldEssays as lastFrequency } from "./worldEssays/the-last-frequency";
import { worldEssays as longGoodbye } from "./worldEssays/the-long-goodbye";
import { worldEssays as mirror } from "./worldEssays/the-mirror-doesnt-work";
import { worldEssays as number } from "./worldEssays/the-number";
import { worldEssays as otherHalf } from "./worldEssays/the-other-half";
import { worldEssays as robbery } from "./worldEssays/the-robbery";
import { worldEssays as secondBurning } from "./worldEssays/the-second-burning";
import { worldEssays as vanishingVariable } from "./worldEssays/the-vanishing-variable";
import { worldEssays as godsQuiet } from "./worldEssays/when-gods-stay-quiet";
import { worldEssays as galtToilets } from "./worldEssays/who-cleans-galts-toilets";
import { worlds as canonicalWorlds } from "./worlds";

export const worldEssays = {
  ...blackmail,
  ...publicInterest,
  ...proxy,
  ...chrysalis,
  ...lastFrequency,
  ...longGoodbye,
  ...mirror,
  ...number,
  ...otherHalf,
  ...robbery,
  ...secondBurning,
  ...vanishingVariable,
  ...godsQuiet,
  ...galtToilets,
};

export type WorldEssay = {
  title: string;
  subtitle: string;
  paragraphs: string[];
  compassNote: string;
  pressurePoint: string;
  threat: string;
};

export type WorldConnection = {
  slug: string;
  title: string;
  relationship: string;
};

type CanonicalWorld = (typeof canonicalWorlds)[number] & {
  worldEssay?: string[];
  worldEssaySubtitle?: string;
  worldEssayAngle?: string;
  worldPressurePoint?: string;
  worldThreat?: string;
  worldContradiction?: string;
  compass?: {
    market?: string;
    primaryIdeas?: string[];
    pressurePoint?: string;
    threat?: string;
    contradiction?: string;
  };
  atlasConnections?: WorldConnection[];
};

function getCanonicalWorld(slug: string): CanonicalWorld | undefined {
  return canonicalWorlds.find((world) => world.slug === slug) as CanonicalWorld | undefined;
}

function getEssayParagraphs(slug: string, canonicalWorld?: CanonicalWorld): string[] | undefined {
  const importedParagraphs = worldEssays[slug as keyof typeof worldEssays];

  if (importedParagraphs?.length) {
    return [...importedParagraphs];
  }

  if (canonicalWorld?.worldEssay?.length) {
    return [...canonicalWorld.worldEssay];
  }

  return undefined;
}

export function getWorldEssay(slug: string): WorldEssay | null {
  const canonicalWorld = getCanonicalWorld(slug);
  const paragraphs = getEssayParagraphs(slug, canonicalWorld);

  if (!paragraphs) {
    return null;
  }

  return {
    title: canonicalWorld?.title ?? "World Essay",
    subtitle:
      canonicalWorld?.worldEssaySubtitle ??
      canonicalWorld?.worldEssayAngle ??
      "The story becomes an argument inside the anthology.",
    paragraphs,
    compassNote:
      canonicalWorld?.compass?.contradiction ??
      canonicalWorld?.worldEssayAngle ??
      canonicalWorld?.whyThisWorldExists ??
      "This world is one coordinate in the anthology's larger argument.",
    pressurePoint:
      canonicalWorld?.compass?.pressurePoint ??
      canonicalWorld?.worldPressurePoint ??
      "The moment the world's hidden contradiction becomes impossible to ignore.",
    threat:
      canonicalWorld?.compass?.threat ??
      canonicalWorld?.worldThreat ??
      "The self becomes easier to manage than to understand.",
  };
}

export function getWorldConnections(slug: string): WorldConnection[] {
  return getCanonicalWorld(slug)?.atlasConnections ?? [];
}

export function getWorldRelationship(fromSlug: string, toSlug: string): string | null {
  const connection = getWorldConnections(fromSlug).find((item) => item.slug === toSlug);
  return connection?.relationship ?? null;
}
