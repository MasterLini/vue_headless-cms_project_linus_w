import { CarAPI } from "./CarAPI";
import { car } from "../3. AA - Objektorientierte Programmierung - Class Car/Car";
import { engine } from "../3. AA - Objektorientierte Programmierung - Class Car/Engine";
import { owner } from "../3. AA - Objektorientierte Programmierung - Class Car/Owner";

export class Autogeschaeft1CarAPI implements CarAPI {
  private cars: car[];

  constructor() {
    const e1 = new engine(120, "V4");
    const e2 = new engine(220, "V6");

    const o1 = new owner("Anna", "Musterfrau", 28)
    const o2 = new owner("Karl", "Beispiel", 45)
    
    this.cars = [
      new car("VW", "Blau", 50000, e1, o1),
      new car("Audi", "Rot", 150000, e2, o2),
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

