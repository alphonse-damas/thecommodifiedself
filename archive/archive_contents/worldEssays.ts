export type WorldEssay = {
  slug: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  pressurePoint: string;
  threat: string;
  compassNote: string;
  neighborWorlds: {
    slug: string;
    relationship: string;
  }[];
};

export const worldEssays: WorldEssay[] = [
  {
    slug: "the-other-half",
    title: "The Other Half",
    subtitle: "Love did not disappear. It was divided into functions.",
    paragraphs: [
      "Every civilization pretends that love, desire, reproduction, and parenting are naturally bound together. It is a comforting fiction because it allows the family to appear inevitable rather than negotiated.",
      "The Other Half begins where that fiction fails. It imagines a society honest enough, or arrogant enough, to separate what history bundled: the person who is desired, the person who is stable, the person who parents, and the person through whom biology continues.",
      "The horror of such a world is not that it destroys love. The horror is subtler. It asks love to prove which part of itself still matters after every function has been assigned elsewhere.",
    ],
    pressurePoint: "Love separated from reproduction, stability, and social duty.",
    threat: "Efficiency replacing intimacy while calling itself maturity.",
    compassNote: "This world sits where desire, truth, and family no longer point toward the same person.",
    neighborWorlds: [
      { slug: "the-number", relationship: "Both worlds ask whether private intimacy can survive once it becomes public structure." },
      { slug: "proxy", relationship: "Both worlds separate desire from lived experience and ask what remains authentic afterward." },
      { slug: "the-long-goodbye", relationship: "Both worlds explore relationships that continue after the original bond has changed form." },
    ],
  },
  {
    slug: "the-number",
    title: "The Number",
    subtitle: "The body became legible before the person could speak.",
    paragraphs: [
      "There was a time when reputation arrived slowly. It followed rumor, memory, charm, cruelty, generosity, and time. It was often wrong, but at least it moved like a human thing.",
      "The Number removes the delay. It gives the world the pleasure of certainty at a glance. Desire becomes arithmetic. Shame becomes visible. Judgment becomes efficient enough to feel natural.",
      "The question is not whether the number tells the truth. The question is what kind of people are produced by a society that no longer has to wonder before it condemns.",
    ],
    pressurePoint: "Intimacy converted into public evidence.",
    threat: "Visibility becoming judgment before recognition can begin.",
    compassNote: "This world touches identity, desire, and value because the person is priced before the person is met.",
    neighborWorlds: [
      { slug: "proxy", relationship: "Both worlds treat desire as something that can be mediated, ranked, and consumed." },
      { slug: "the-other-half", relationship: "Both worlds ask what happens when intimacy becomes a system instead of a refuge." },
      { slug: "the-mirror-doesnt-work", relationship: "Both worlds examine identity under a gaze that arrives before the self can answer." },
    ],
  },
  {
    slug: "the-chrysalis",
    title: "The Chrysalis",
    subtitle: "The upgrade was not a gift. It was an invitation to disappear correctly.",
    paragraphs: [
      "Improvement is one of the most seductive moral languages. It flatters the present by promising that it is only temporary. It flatters the future by insisting that whatever comes next must be better because it is newer.",
      "The Chrysalis imagines evolution as a product, and then asks what a product requires from the creature purchasing it. The body becomes an interface. The self becomes legacy hardware. The old human is tolerated only as a transitional inconvenience.",
      "The tragedy is not transformation. Transformation is ancient. The tragedy is a world that cannot imagine becoming more without first learning to despise what it was.",
    ],
    pressurePoint: "Transcendence sold as subscription and social inevitability.",
    threat: "Improvement becoming assimilation with better branding.",
    compassNote: "This world points toward identity, value, and memory because every upgrade asks what must be left behind.",
    neighborWorlds: [
      { slug: "proxy", relationship: "Both worlds replace direct life with a mediated improvement of life." },
      { slug: "the-second-burning", relationship: "Both worlds ask what happens when preservation is replaced by managed simplification." },
      { slug: "the-last-frequency", relationship: "Both worlds wonder whether signal can survive after humanity changes what it means to listen." },
    ],
  },
  {
    slug: "when-gods-stay-quiet",
    title: "When Gods Stay Quiet",
    subtitle: "Silence is not empty when power is present.",
    paragraphs: [
      "Power often defends itself by pointing to what it did not do. It did not strike. It did not command. It did not interfere. It merely watched, and called watching restraint.",
      "When Gods Stay Quiet refuses that alibi. It places power beside suffering and asks whether inaction remains innocent when intervention is possible. The god is not judged for cruelty, but for the elegance of his distance.",
      "The world exists because silence is often treated as neutrality by those who can afford it. For everyone else, silence is not a position. It is an event.",
    ],
    pressurePoint: "Power withholding itself while harm continues.",
    threat: "Neutrality becoming permission for suffering.",
    compassNote: "This world moves through power, meaning, and accountability because refusal can become an act of rule.",
    neighborWorlds: [
      { slug: "in-the-public-interest", relationship: "Both worlds examine moral language used to excuse harm." },
      { slug: "who-cleans-galts-toilets", relationship: "Both worlds ask who pays the cost when powerful people define responsibility narrowly." },
      { slug: "the-second-burning", relationship: "Both worlds show control working through absence rather than spectacle." },
    ],
  },
  {
    slug: "the-vanishing-variable",
    title: "The Vanishing Variable",
    subtitle: "The system panicked when the measured became unmeasurable.",
    paragraphs: [
      "Every system that claims to know a people also depends on those people remaining available to be known. Visibility is not merely observation. It is infrastructure.",
      "The Vanishing Variable imagines disappearance not as defeat, but as refusal. The population does not simply leave. It withdraws from the instruments that made it governable, profitable, predictable, and exposed.",
      "The terror of the world is not that people vanish. It is that the system reveals how much of its confidence depended on their continued capture.",
    ],
    pressurePoint: "Measurement losing access to the population it requires.",
    threat: "Governance collapsing when extraction can no longer locate its subject.",
    compassNote: "This world belongs to systems, power, and memory because absence becomes evidence of dependence.",
    neighborWorlds: [
      { slug: "blackmail-black-male", relationship: "Both worlds expose safety and measurement as tools that can become traps." },
      { slug: "the-mirror-doesnt-work", relationship: "Both worlds ask whether inherited categories can survive when the subject refuses the gaze." },
      { slug: "in-the-public-interest", relationship: "Both worlds reveal how institutions convert bodies into administrative necessities." },
    ],
  },
  {
    slug: "blackmail-black-male",
    title: "Blackmail, Black Male",
    subtitle: "Protection became another name for owning the threat.",
    paragraphs: [
      "Fear is profitable when it can be made reliable. A random danger is tragedy. A managed danger is a market.",
      "Blackmail, Black Male follows a world where safety is offered by the same order that makes safety necessary. The bargain is familiar: accept the terms, accept the surveillance, accept the enclosure, and perhaps the harm will pass you by.",
      "The story asks what protection means when the protected are never allowed to stop being vulnerable. In such a world, safety is not freedom. It is the leash made comfortable enough to sell.",
    ],
    pressurePoint: "Fear converted into a protection economy.",
    threat: "Safety becoming the polite language of control.",
    compassNote: "This world presses on race, control, and survival because danger itself becomes infrastructure.",
    neighborWorlds: [
      { slug: "the-vanishing-variable", relationship: "Both worlds confront systems that require Black visibility in order to manage Black life." },
      { slug: "the-mirror-doesnt-work", relationship: "Both worlds examine the inherited gaze and the cost of living under it." },
      { slug: "in-the-public-interest", relationship: "Both worlds show protection turning into coercion once institutions define the terms." },
    ],
  },
  {
    slug: "who-cleans-galts-toilets",
    title: "Who Cleans Galt’s Toilets?",
    subtitle: "The dream escaped labor until the plumbing failed.",
    paragraphs: [
      "Every paradise has a service entrance. Utopias rarely advertise it, but they cannot exist without it. Someone carries the waste. Someone repairs the floor. Someone cleans what visionaries prefer not to see.",
      "Who Cleans Galt’s Toilets? begins after victory, when the architects have won and the old burdens have supposedly been left behind. The question that ruins the dream is small enough to sound vulgar and large enough to expose the whole philosophy.",
      "Who serves the free? If no one can answer honestly, the revolution has not abolished hierarchy. It has merely hidden it behind better architecture.",
    ],
    pressurePoint: "Labor hidden beneath self-congratulatory freedom.",
    threat: "Paradise depending on people it refuses to acknowledge.",
    compassNote: "This world sits at power, value, and labor because every dream has maintenance costs.",
    neighborWorlds: [
      { slug: "in-the-public-interest", relationship: "Both worlds reveal how noble systems distribute sacrifice downward." },
      { slug: "when-gods-stay-quiet", relationship: "Both worlds ask what responsibility remains after power excuses itself." },
      { slug: "the-robbery", relationship: "Both worlds examine what is taken from those told they should be grateful to serve." },
    ],
  },
  {
    slug: "proxy",
    title: "Proxy",
    subtitle: "He streamed another man’s desire until his own life felt counterfeit.",
    paragraphs: [
      "Longing has always borrowed images. It has always lived partly through stories, fantasies, idols, and imagined selves. Proxy simply gives that ancient hunger a platform and a subscription plan.",
      "The danger is not that men rent experiences they cannot have. The danger is that the rented life begins to feel more coherent than the life waiting when the stream ends.",
      "Proxy asks whether desire can remain yours after it has been professionally produced inside someone else’s body. The fantasy does not merely entertain the viewer. It begins to compete with him.",
    ],
    pressurePoint: "Desire outsourced into rentable memory.",
    threat: "Vicarious life becoming more convincing than lived experience.",
    compassNote: "This world moves through desire, memory, and identity because the borrowed life begins to colonize the actual one.",
    neighborWorlds: [
      { slug: "the-number", relationship: "Both worlds turn desire into visible, ranked, and consumable information." },
      { slug: "the-chrysalis", relationship: "Both worlds treat dissatisfaction with the self as a market opportunity." },
      { slug: "the-other-half", relationship: "Both worlds separate desire from the full consequences of intimacy." },
    ],
  },
  {
    slug: "the-last-frequency",
    title: "The Last Frequency",
    subtitle: "The signal survived. The listeners did not know what listening meant anymore.",
    paragraphs: [
      "Noise is not merely sound. It is a civilization’s defense against the obligation to hear. It fills the room so completely that silence begins to feel suspicious.",
      "The Last Frequency imagines a signal appearing where no signal should exist. Some call it salvation. Others call it threat. But the deeper question is whether a people trained by noise can still recognize meaning when it arrives without permission.",
      "The frequency does not merely speak. It judges the world by asking whether truth can still be received by minds that have mistaken stimulation for awareness.",
    ],
    pressurePoint: "Truth trying to survive inside noise.",
    threat: "Consciousness losing the ability to distinguish signal from stimulation.",
    compassNote: "This world sits at truth, memory, and meaning because hearing is not the same as listening.",
    neighborWorlds: [
      { slug: "the-second-burning", relationship: "Both worlds ask what survives when knowledge remains but meaning is weakened." },
      { slug: "the-chrysalis", relationship: "Both worlds examine transformation that may cost humanity its capacity for recognition." },
      { slug: "the-mirror-doesnt-work", relationship: "Both worlds ask whether perception can be trusted after it has been inherited or engineered." },
    ],
  },
  {
    slug: "the-robbery",
    title: "The Robbery",
    subtitle: "The theft was not the loss. The loss was learning to defend nothing.",
    paragraphs: [
      "People often describe loss as an event. Something is taken, and afterward the world is smaller. But some losses do not merely remove. They instruct.",
      "The Robbery follows a man who believes he has been repeatedly stolen from until protection becomes his highest virtue. Walls, locks, refusals, silences: all of them appear sensible after enough wounds.",
      "The tragedy is that emptiness can become a trusted companion. The person begins by defending what remains, and ends by discovering that what remains has become the prison.",
    ],
    pressurePoint: "Self-protection turning into self-imprisonment.",
    threat: "Nothing becoming safer than risk, and therefore more powerful than love.",
    compassNote: "This world moves through value, attachment, and freedom because loss can become a system of governance inside the self.",
    neighborWorlds: [
      { slug: "who-cleans-galts-toilets", relationship: "Both worlds ask who pays for someone else’s idea of freedom." },
      { slug: "the-long-goodbye", relationship: "Both worlds explore love after loss has changed the room it lives in." },
      { slug: "the-other-half", relationship: "Both worlds examine relationships managed by fear of what intimacy might cost." },
    ],
  },
  {
    slug: "the-long-goodbye",
    title: "The Long Goodbye",
    subtitle: "Love stayed while the person slowly left.",
    paragraphs: [
      "Some grief arrives after death. Some arrives years before it and is forced to behave politely in public. The Long Goodbye belongs to the second kind.",
      "The world follows love under the pressure of gradual disappearance, where the beloved remains present in body while memory, recognition, and shared history begin to retreat. The mourner is asked to grieve and care at the same time.",
      "This is not a story about forgetting. It is a story about the cruelty of remembering alone.",
    ],
    pressurePoint: "Care persisting after recognition begins to fail.",
    threat: "Love becoming duty without losing its tenderness.",
    compassNote: "This world belongs to memory, grief, and love because absence can begin before departure.",
    neighborWorlds: [
      { slug: "the-other-half", relationship: "Both worlds ask whether love can survive after its original form has changed." },
      { slug: "the-robbery", relationship: "Both worlds explore what remains after loss becomes part of daily life." },
      { slug: "the-number", relationship: "Both worlds test whether a person can be reduced to what remains visible." },
    ],
  },
  {
    slug: "the-mirror-doesnt-work",
    title: "The Mirror Doesn’t Work",
    subtitle: "The system shattered. The gaze survived.",
    paragraphs: [
      "Rebellion often imagines freedom as destruction. Break the mirror. Leave the room. Burn the vocabulary. Begin again.",
      "The Mirror Doesn’t Work begins after that victory and discovers the more difficult truth: people may escape the institution and still preserve its gaze inside themselves. Oppression can become inheritance when it has taught the wounded how to measure one another.",
      "This is why the tragedy is not the mirror alone. It is the hunger for what the mirror once promised to confirm.",
    ],
    pressurePoint: "Liberation haunted by inherited perception.",
    threat: "The oppressed reproducing the gaze after the original system has fallen.",
    compassNote: "This world moves through identity, power, and inheritance because the prison can survive as a way of seeing.",
    neighborWorlds: [
      { slug: "blackmail-black-male", relationship: "Both worlds examine life under a racialized gaze that becomes internal weather." },
      { slug: "the-vanishing-variable", relationship: "Both worlds ask what happens when systems lose access to those they defined." },
      { slug: "the-number", relationship: "Both worlds make identity visible enough to become a burden." },
    ],
  },
  {
    slug: "in-the-public-interest",
    title: "In the Public Interest",
    subtitle: "Consent sounded noble after choice had already been removed.",
    paragraphs: [
      "Power rarely calls itself power when it wants obedience. It prefers necessity, safety, science, progress, or the public good. These words make coercion easier to carry in daylight.",
      "In the Public Interest follows a world where sacrifice is demanded in the language of collective benefit. The moral vocabulary is polished. The distribution of burden is not.",
      "The story asks what happens when the public becomes the alibi for private extraction, and when the people asked to consent are the same people who cannot safely refuse.",
    ],
    pressurePoint: "Consent separated from meaningful choice.",
    threat: "Public good becoming the vocabulary of private power.",
    compassNote: "This world sits at power, control, and governance because institutions can make coercion sound like care.",
    neighborWorlds: [
      { slug: "when-gods-stay-quiet", relationship: "Both worlds judge power by what it permits in the name of restraint or necessity." },
      { slug: "blackmail-black-male", relationship: "Both worlds reveal protection as a system that can preserve the threat it claims to solve." },
      { slug: "who-cleans-galts-toilets", relationship: "Both worlds examine how noble systems hide the people who absorb their costs." },
    ],
  },
  {
    slug: "the-second-burning",
    title: "The Second Burning",
    subtitle: "The books were saved. Meaning was domesticated.",
    paragraphs: [
      "The first censorship was theatrical. It understood fire, spectacle, fear, and ash. It knew that destroying a book could make power feel decisive.",
      "The Second Burning begins after that obvious enemy has been defeated. The books survive. The shelves survive. The civilization congratulates itself for preserving knowledge, and then slowly learns how to make knowledge harmless.",
      "The new fire does not burn pages. It simplifies them, buries them, gamifies them, flattens them, and teaches readers to prefer the version that asks least of them. The danger is not ignorance. It is comfortable interpretation.",
    ],
    pressurePoint: "Knowledge preserved while meaning is controlled.",
    threat: "Censorship becoming convenience instead of flame.",
    compassNote: "This world moves through memory, meaning, and control because preservation is not the same as understanding.",
    neighborWorlds: [
      { slug: "the-last-frequency", relationship: "Both worlds ask what remains audible after signal is buried beneath easier noise." },
      { slug: "the-chrysalis", relationship: "Both worlds examine progress that may erase what it claims to perfect." },
      { slug: "when-gods-stay-quiet", relationship: "Both worlds show silence and absence operating as forms of control." },
    ],
  },
];

export function getWorldEssay(slug: string): WorldEssay | undefined {
  return worldEssays.find((essay) => essay.slug === slug);
}

export function getWorldRelationship(slug: string, relatedSlug: string): string | undefined {
  return getWorldEssay(slug)?.neighborWorlds.find((neighbor) => neighbor.slug === relatedSlug)?.relationship;
}
