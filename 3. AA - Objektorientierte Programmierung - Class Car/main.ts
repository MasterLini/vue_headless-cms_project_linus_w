import { car } from "./Car";

const car1 = new car("V6", "Rot", 200000);
const car2 = new car("V10", "Gelb", 500000000);
const car3 = new car("V6", "Schwarz", 400000);

console.log(car1)

car1.updateMotor("V10");
car2.setKM(200);
car3.addKM(90)
car1.reduceKM(1000000000)

console.log(car1)
console.log(car2)
console.log(car3)