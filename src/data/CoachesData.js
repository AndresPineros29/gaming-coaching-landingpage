import Gamer1 from "../assets/Gamer1.png";
import Gamer2 from "../assets/Gamer2.png";
import Gamer3 from "../assets/Gamer3.png";

import ValoRank from "../assets/valo_rank.png";
import R6Rank from "../assets/r6_rank.png";
import ApexRank from "../assets/apex_rank.png";

export const CoachesData = [
  {
    id: "1",
    key: "8",
    image: Gamer1,
    game: "Valorant",
    name: "Belizard",
    rank: ValoRank,
    info: [
      "Pro player",
      "7 years as gaming coach",
      "Top #1 in NA 5 seasons in a row",
    ],
  },
  {
    id: "2",
    key: "9",
    image: Gamer2,
    game: "Rainbow Six",
    name: "Seismology",
    rank: R6Rank,
    info: [
      "Ex-pro payer",
      "Ex member of G2",
      "Winner of the Six Invitation 2018",
      "Champion rank 3 seasons in a row",
    ],
  },
  {
    id: "3",
    key: "10",
    image: Gamer3,
    game: "Apex Legends",
    name: "DayBreak",
    rank: ApexRank,
    info: [
      "Current Apex Predator",
      "2 years coaching gamers in Apex Leagends",
      "Ex CS:GO pro payer",
    ],
  },
];
