import { car } from "./Car";
import { engine } from "./Engine";
import { owner } from "./Owner";

const e1 = new engine(1200, "V10")
const e2 = new engine(500, "V4")

const o1 = new owner("Max", "Mustermann", 30)
const o2 = new owner("Anna", "Musterfrau", 28)
const o3 = new owner("Karl", "Beispiel", 45)

const car1 = new car("Ford", "Rot", 200000, e1, o1);
const car2 = new car("Ferrari", "Gelb", 500000000, e1, o2);
const car3 = new car("Skoda", "Schwarz", 400000, e2, o3);

// console.log(car1)

car1.updatebrand("Toyota");
car2.setKM(200);
car3.addKM(90)
car1.reduceKM(1000000000)

console.log(car1);
console.log(car1.getEngine());
console.log(car1.getEngine().getHP())
console.log(car1.getOwner());
// console.log(car2)
// console.log(car3)