// {
//   id: 1,
//   type: "npc",
//   name: "Arthur",
//   img: "/entryImages/Arthur.PNG",
// }
// type[cast, npc, place, event]
const bullet = "\u2022";
const entries = [
  {
    id: 1,
    type: "cast",
    name: "Lucas Stillwater",
    text: `Ma and Pa's pride, Lucas left home to train get some medical schoolin' in Boston--'we got a real doctor in the family now!' Strictly follows the Hippocratic Oath, even when it can be a hindrance.`,
  },
  {
    id: 2,
    type: "cast",
    name: "Anastasia Stillwater",
    text: `Youngest of the Stillwater clan and last to leave the ranch. Great shot with a rifle. Off to see the world with her trusty dog Loki. She's 'stormborn', an' folks say this makes her just a little bit braver. Dreams of traveling to Norway.`,
  },
  {
    id: 3,
    type: "cast",
    name: `Pamela 'Pair-a-dice Pam' Stillwater`,
    text: `Left the Stillwater Ranch to wander the west and live by her luck. Famous on the river boats. Discovered the dark secrets of the hucksters; some would say she now communes with devils..`,
  },
  {
    id: 4,
    type: `cast`,
    name: `Ulysses Stillwater`,
    text: `The eldest Stillwater son, Ulysses left the ranch to join the Union Army during the War Between the States. Shaken by what he experienced, he left for Australia to find some peace--but found an enemy instead.
`,
  },
  {
    id: 5,
    type: "cast",
    name: `Jebediah Clinton`,
    text: `A muckraking journalist, and Stillwater cousin. Spent time in a Mexican prison. Works for the Tombstone Epitaph, a newspaper in Arizona. His curiousity is all consuming, can lead to trouble.`,
  },
  {
    id: 6,
    type: "npc",
    name: `Liel MacEntyre`,
    img: "/deadlands-show-bible/entryImages/Liel.png",
    text: `Former Stillwater Ranch hand, Liel left with the Stillwater clan when they fled their home on the trail of the 'Man in Black.'
    \n Older enough to be the Stillwater siblings' father, he watched most of them grow up.`,
  },
  {
    id: 7,
    type: "npc",
    name: `Jody McEntyre`,
    img: "/deadlands-show-bible/entryImages/Jody.png",
    text: `Wife of Liel McEntyre and longtime caretaker of the Stillwater Ranch.Never had children of her own, but sees the Stillwater kids as her family.
\n Lately she's been under the weather and visibly ill.`,
  },
  {
    id: 8,
    type: "npc",
    name: `Sheriff Johan Brown`,
    img: "/deadlands-show-bible/entryImages/SheriffBrown.png",
    text: `Old family friend of the Stillwaters and former riding partner of Pa Stillwater. Last saw the Stillwaters before their ranch was burned down.
\n Pressured by the Hope Spring Marshal, Mayor, and Caldwell Company to bring the Stillwater kids to trial.`,
  },
  {
    id: 9,
    type: "npc",
    name: `Benito`,
    img: "/deadlands-show-bible/entryImages/Benito.png",
    text: `Mysterious agent of a secret bureau of the U.S. government.
\n Searching for the 'Man in Black'. Told the Stillwater kids about their parents’ secret past as supernatural trail guides.`,
  },
  {
    id: 10,
    type: "npc",
    name: `Jonny Bolton`,
    img: "/deadlands-show-bible/entryImages/JonnyBolton.png",
    text: `Handsomest and most renowned of the Bolton Boys. Famouse quick-draw and duelist. Hired gun for the Caldwell Company in Hope Spring, Montana. Shared a moment of friendship with Anastasia Stillwater. Had a confrontation with Pam Stillwater.`,
  },
  {
    id: 11,
    type: "npc",
    name: `Walter Bolton`,
    img: "/deadlands-show-bible/entryImages/WalterBolton.png",
    text: `Oldest and dullest of the Bolton brood. Known for his braying laugh, filth, and lack of charm. Hangs on Jonny Bolton like tick. Helped set fire to the Stillwater ranch in Hope Spring.`,
  },
  {
    id: 12,
    type: "place",
    name: `Stillwater Ranch (Montana Territory)`,
    img: "/deadlands-show-bible/entryImages/StillwaterRanch.png",
    text: `Home of the Stillwater children—all but Ulysses born and raised here.
\n${bullet} Rolling land of wildflowers and tall grass with a ranch house atop a low rise.
\n${bullet} Overlooks a shallow river and open grazing fields.
\n${bullet} Final resting place of Ma and Pa Stillwater, buried 'neath a fragrant apple tree.`,
  },
  {
    id: 13,
    type: "place",
    name: `Hope Spring, Montana`,
    img: "/deadlands-show-bible/entryImages/HopeSpring.png",
    text: `Mining town that grew from a tiny settlement in the 1860s to a thriving town by 1880.
\n${bullet} Grew thanks in part to Stillwater cattle.
\n${bullet} Features include a new train station, town clock, and automaton for civic use.
\n${bullet} Recent corruption in town politics has strained relations with the Stillwater clan.`,
  },
  {
    id: 14,
    type: "place",
    name: `Helena, Montana`,
    img: "/deadlands-show-bible/entryImages/HelenaMontana.png",
    text: `Frontier boomtown with strong mining, wealthy new residents, and refined nightlife.
\n${bullet} Notable locations include an upscale saloon and public theater.
\n${bullet} A vampire named Sarah Wigams (a feral nosferatu) lairs somewhere in town.
\n${bullet} The posse is believed to be involved in the disapearnce of a corpse (Sarah's) and possibly arson of a wealthy man's home (Hannibal Chambers).`,
  },
  {
    id: 15,
    type: "event",
    name: `Hope Spring, MT. Mid May,  1880`,
    text: `The Stillwater kids return to their home in Hope Spring, Montana, after a long absence. They
    meet to pay their respects to the recently deceased ma. They learn she was actually murdered, the Bolton Boys
    were involved, and the killer was a 'man in black'. He took a book of some importance and much mystery.
    \n They Stillwaters meet an 'agent' named Benito, who tells them about their parents' secret past as supernatural trail guides.
    Benito expresses to them that the book taken by the Man in black is greatly valuable and likely wildly dangerous...`,
  },
  {
    id: 16,
    type: "event",
    name: `Hope Spring, MT. Mid May, 1880`,
    text: `The Stillwater clan infiltrates the Caldwell Company cattle operation after learning they could be involved with the both the Boltons and the 'Man in Black'. The
    play goes sideways and Henry Caldwell, the owner and executive of the Caldwell Company, is killed by Pam Stillwater.
    \n Sheriff Johan Brown agrees there is no case against the Stillwaters without evidence more substantial than speculation from Jonny Bolton and the Boltons.`,
  },
  {
    id: 17,
    type: "event",
    name: `South of Hope Spring, MT. Late May, 1880`,
    text: `The Stillwaters leave Hope Spring behind, their ranch burned to the ground by hired guns (sent by the town Marshal).
    On the trail of the 'Man in Black' they come across the tale of Jake Spoon--an odd spindly man who live out in the woods and brings trouble (and spiders)
    wherever he goes.
    \n Folks in town have memory issues, which only appear after purchasing goods from Jake Spoon. Anastasia and Lucas become infected with spiders--in the brain.
    Urgently they track Spoon down and confront him in the woods, amid the ruins of a logging camp turned ghost town.
    \n The creature known as Jake Spoons is defeated, but not before he tells the Stillwaters he knows where the man in black is going--Deadwood in the Dakota Territory.`,
  },
  {
    id: 18,
    type: "event",
    name: `Helena MT. Early June, 1880`,
    text: `The Stillwaters arrive in Helena, after meeting their cousin Jebediah Clinton at a small rail station. Helena is a bustling frontier town, but palapably tense.
    The Stillwaters hear tails of a recently deceased young woman named Sarah Wigams. Sarah is seen wandering the streets at night.
    \n Investigation leads to Sarah's tomb where the posse confronts her at night, learns she is a feral vampire, and may have been turned by one Hannibal Chambers.
    The confrontation with Sarah goes sideways, and dishing out some licks to the Stillwaters she flees into the night toward the afluent uppertown.
    \n The Stillwaters are asked to not leave town by the locl town marshal (as they are suspected some misdeeds), but they instead burn Hannibal Chambers' home and ride off into the east.`,
  },
];

export default entries;
