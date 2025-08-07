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
    text: `Ma and Pa's pride, Lucas left home to train get some medical schoolin' in Boston--'we got a real doctor in the family now!'
    \n ${bullet} Strictly follows the Hippocratic Oath, even when it can be a hindrance.`,
  },
  {
    id: 2,
    type: "cast",
    name: "Anastasia Stillwater",
    text: `Youngest of the Stillwater clan and last to leave the ranch. Great shot with a rifle. Off to see the world with her trusty dog Loki.
    \n ${bullet} She's 'stormborn', an' folks say this makes her just a little bit braver.
    \n ${bullet} Dreams of traveling to Norway.`,
  },
  {
    id: 3,
    type: "cast",
    name: `Pamela 'Pair-a-dice Pam' Stillwater`,
    text: `Left the Stillwater Ranch to wander the west and live by her luck. Famous on the river boats.
    \n ${bullet} Discovered the dark secrets of the hucksters; some would say she now communes with devils..`,
  },
  {
    id: 4,
    type: `cast`,
    name: `Ulysses Stillwater`,
    text: `The eldest Stillwater son, Ulysses left the ranch to join the Union Army during the War Between the States.
    \n ${bullet} Shaken by what he experienced, he left for Australia to find some peace--but found an enemy instead.
`,
  },
  {
    id: 5,
    type: "cast",
    name: `Jebediah Clinton`,
    text: `A muckraking journalist, and Stillwater cousin. Spent time in a Mexican.
    \n ${bullet} Works for the Tombstone Epitaph, a newspaper in Arizona.
    \n ${bullet} His curiousity is all consuming, can easilty lead to trouble.`,
  },
  {
    id: 6,
    type: "npc",
    name: `Liel MacEntyre`,
    text: `Former Stillwater Ranch hand, Liel left with the Stillwater clan when they fled their home on the trail of the 'Man in Black.'
    \n ${bullet} Older enough to be the Stillwater siblings'father, he watch most of thm grow up.`,
  },
  {
    id: 7,
    type: "npc",
    name: `Jody McEntyre`,
    text: `Wife of Liel McEntyre and longtime caretaker of the Stillwater Ranch.
\n${bullet} Never had children of her own, but sees the Stillwater kids as her own.
\n${bullet} Lately she's been under the weather and visibly ill.`,
  },
  {
    id: 8,
    type: "npc",
    name: `Sheriff Johan Brown`,
    text: `Old family friend of the Stillwaters and former riding partner of Pa Stillwater.
\n${bullet} Last saw the Stillwaters before their ranch was burned down.
\n${bullet} Pressured by the Hope Spring Marshal, Mayor, and Caldwell Company to bring the Stillwater kids to trial.`,
  },
  {
    id: 9,
    type: "npc",
    name: `Benito`,
    text: `Mysterious agent of a secret bureau of the U.S. government.
\n${bullet} Searching for the 'Man in Black'.
\n${bullet} Told the Stillwater kids about their parents’ secret past as supernatural trail guides.`,
  },
  {
    id: 10,
    type: "npc",
    name: `Jonny Bolton`,
    text: `Handsomest and most renowned of the Bolton Boys.
\n${bullet} Hired gun for the Caldwell Company in Hope Spring, Montana.
\n${bullet} Shared a moment of friendship with Anastasia Stillwater.
\n${bullet} Had a confrontation with Pam Stillwater.`,
  },
  {
    id: 11,
    type: "npc",
    name: `Walter Bolton`,
    text: `Oldest and dullest of the Bolton brood.
\n${bullet} Known for his braying laugh, filth, and lack of charm.
\n${bullet} Follows Jonny around constantly.
\n${bullet} Helped set fire to the Stillwater ranch in Hope Spring.`,
  },
  {
    id: 12,
    type: "place",
    name: `Stillwater Ranch (Montana Territory)`,
    img: "/entryImages/StillwaterRanch.png",
    text: `Home of the Stillwater children—all but Ulysses born and raised here.
\n${bullet} Rolling land of wildflowers and tall grass with a ranch house atop a low rise.
\n${bullet} Overlooks a shallow river and open grazing fields.
\n${bullet} Final resting place of Ma and Pa Stillwater, buried 'neath a fragrant apple tree.`,
  },
  {
    id: 13,
    type: "place",
    name: `Hope Spring, Montana`,
    img: "/entryImages/HopeSpring.png",
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
];

export default entries;
