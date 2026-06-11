import { blackmail_black_male_prologue } from "./prologues/blackmail-black-male";
import { in_the_public_interest_prologue } from "./prologues/in-the-public-interest";
import { proxy_prologue } from "./prologues/proxy";
import { the_chrysalis_prologue } from "./prologues/the-chrysalis";
import { the_last_frequency_prologue } from "./prologues/the-last-frequency";
import { the_long_goodbye_prologue } from "./prologues/the-long-goodbye";
import { the_mirror_doesnt_work_prologue } from "./prologues/the-mirror-doesnt-work";
import { the_number_prologue } from "./prologues/the-number";
import { the_other_half_prologue } from "./prologues/the-other-half";
import { the_robbery_prologue } from "./prologues/the-robbery";
import { the_second_burning_prologue } from "./prologues/the-second-burning";
import { the_vanishing_variable_prologue } from "./prologues/the-vanishing-variable";
import { when_gods_stay_quiet_prologue } from "./prologues/when-gods-stay-quiet";
import { who_cleans_galts_toilets_prologue } from "./prologues/who-cleans-galts-toilets";

export const prologues = {
  "blackmail-black-male": blackmail_black_male_prologue,
  "in-the-public-interest": in_the_public_interest_prologue,
  proxy: proxy_prologue,
  "the-chrysalis": the_chrysalis_prologue,
  "the-last-frequency": the_last_frequency_prologue,
  "the-long-goodbye": the_long_goodbye_prologue,
  "the-mirror-doesnt-work": the_mirror_doesnt_work_prologue,
  "the-number": the_number_prologue,
  "the-other-half": the_other_half_prologue,
  "the-robbery": the_robbery_prologue,
  "the-second-burning": the_second_burning_prologue,
  "the-vanishing-variable": the_vanishing_variable_prologue,
  "when-gods-stay-quiet": when_gods_stay_quiet_prologue,
  "who-cleans-galts-toilets": who_cleans_galts_toilets_prologue,
};

export function getPrologue(slug: string) {
  return prologues[slug as keyof typeof prologues] ?? null;
}