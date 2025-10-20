import { car } from "./Car";
import { engine } from "./Engine";

const e1 = new engine(1200, "V10")
const e2 = new engine(500, "V4")

const car1 = new car("Ford", "Rot", 200000, e1);
const car2 = new car("Ferrari", "Gelb", 500000000, e1);
const car3 = new car("Skoda", "Schwarz", 400000, e2);

// console.log(car1)

car1.updatebrand("Toyota");
car2.setKM(200);
car3.addKM(90)
car1.reduceKM(1000000000)

console.log(car1);
console.log(car1.getEngine());
console.log(car1.getEngine().getHP())
// console.log(car2)
// console.log(car3)