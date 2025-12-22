export interface notify {
    notify(): void
}


import { Kid } from "./Kid";
import { God } from "./God";
import { Chancellor } from "./Chancellor";
import { Santa } from "./Santa";

// Create DAta
const kid1 = new Kid("Timmy", 8, true);
const kid2 = new Kid("Lina", 6, true);
const kid3 = new Kid("Kevin", 12, false);
const kid4 = new Kid("Sophie", 9, true);

const god1 = new God("Zeus", "King of the Olympus", false);
const god2 = new God("Thor", "God of Thunder", true);
const god3 = new God("Athena", "Goddess of Wisdom", true);
const god4 = new God("Poseidon", "God of the Sea", false);

const chan1 = new Chancellor("Germany", true, "Friedrich Merz", 69);
const chan2 = new Chancellor("Austria", true, "Karl Nehammer", 53);
const chan3 = new Chancellor("Switzerland", false, "Viola Amherd", 62);

const Everyone = [
    kid1, kid2, kid3, kid4,
    god1, god2, god3, god4,
    chan1, chan2, chan3
];


// Santa
const santa = new Santa();

Everyone.forEach(person => santa.addToSantasList(person));
santa.notifyInterested();