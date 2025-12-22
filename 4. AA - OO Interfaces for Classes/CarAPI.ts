import { car } from "../3. AA - Objektorientierte Programmierung - Class Car/Car";

export interface CarAPI {
  getAllCars(): car[];
  findCars(searchText: string): car[];
}

