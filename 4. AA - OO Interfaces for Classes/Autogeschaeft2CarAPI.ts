import { CarAPI } from "./CarAPI";
import { car } from "../3. AA - Objektorientierte Programmierung - Class Car/Car";
import { engine } from "../3. AA - Objektorientierte Programmierung - Class Car/Engine";
import { owner } from "../3. AA - Objektorientierte Programmierung - Class Car/Owner";

export class Autogeschaeft2CarAPI implements CarAPI {
  private cars: car[];

  constructor() {
    const e1 = new engine(90, "Reihen-3-Zylinder");
    const e2 = new engine(180, "Reihen-4-Zylinder");

    const o1 = new owner("Max", "Mustermann", 30)
    const o2 = new owner("Anna", "Musterfrau", 28)

    this.cars = [
      new car("Skoda", "Schwarz", 30000, e1, o1),
      new car("Toyota", "Weiss", 80000, e2, o2),
      new car("Ford", "Rot", 120000, e2, o1),
    ];
  }

  public getAllCars(): car[] {
    return this.cars;
  }

  public findCars(searchText: string): car[] {
    const lower = searchText.toLowerCase();
    return this.cars.filter(
      (c) =>
        c.getbrand().toLowerCase().includes(lower) ||
        c.getColor().toLowerCase().includes(lower)
    );
  }
}
