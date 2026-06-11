import { blackmail_black_male_author_reflection } from "./authorReflections/blackmail-black-male";
import { in_the_public_interest_author_reflection } from "./authorReflections/in-the-public-interest";
import { proxy_author_reflection } from "./authorReflections/proxy";
import { the_chrysalis_author_reflection } from "./authorReflections/the-chrysalis";
import { the_last_frequency_author_reflection } from "./authorReflections/the-last-frequency";
import { the_long_goodbye_author_reflection } from "./authorReflections/the-long-goodbye";
import { the_mirror_doesnt_work_author_reflection } from "./authorReflections/the-mirror-doesnt-work";
import { the_number_author_reflection } from "./authorReflections/the-number";
import { the_other_half_author_reflection } from "./authorReflections/the-other-half";
import { the_robbery_author_reflection } from "./authorReflections/the-robbery";
import { the_second_burning_author_reflection } from "./authorReflections/the-second-burning";
import { the_vanishing_variable_author_reflection } from "./authorReflections/the-vanishing-variable";
import { when_gods_stay_quiet_author_reflection } from "./authorReflections/when-gods-stay-quiet";
import { who_cleans_galts_toilets_author_reflection } from "./authorReflections/who-cleans-galts-toilets";

export const authorReflections = {
  "blackmail-black-male": blackmail_black_male_author_reflection,
  "in-the-public-interest": in_the_public_interest_author_reflection,
  proxy: proxy_author_reflection,
  "the-chrysalis": the_chrysalis_author_reflection,
  "the-last-frequency": the_last_frequency_author_reflection,
  "the-long-goodbye": the_long_goodbye_author_reflection,
  "the-mirror-doesnt-work": the_mirror_doesnt_work_author_reflection,
  "the-number": the_number_author_reflection,
  "the-other-half": the_other_half_author_reflection,
  "the-robbery": the_robbery_author_reflection,
  "the-second-burning": the_second_burning_author_reflection,
  "the-vanishing-variable": the_vanishing_variable_author_reflection,
  "when-gods-stay-quiet": when_gods_stay_quiet_author_reflection,
  "who-cleans-galts-toilets": who_cleans_galts_toilets_author_reflection,
};

export function getAuthorReflection(slug: string) {
  return authorReflections[slug as keyof typeof authorReflections] ?? null;
}