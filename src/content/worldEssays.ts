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

export function getWorldEssay(slug: string): WorldEssay | null {
  const paragraphs = worldEssays[slug as keyof typeof worldEssays];

  if (!paragraphs) {
    return null;
  }

  return {
    title: "World Essay",
    subtitle: "The story becomes an argument inside the anthology.",
    paragraphs: [...paragraphs],
    compassNote: "This world is one coordinate in the anthology's larger argument.",
    pressurePoint: "The moment the world’s hidden contradiction becomes impossible to ignore.",
    threat: "The self becomes easier to manage than to understand.",
  };
}

export function getWorldRelationship(fromSlug: string, toSlug: string): string | null {
  return null;
}