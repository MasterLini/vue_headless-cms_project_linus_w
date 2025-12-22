import { Autogeschaeft1CarAPI } from "./Autogeschaeft1CarAPI";
import { Autogeschaeft2CarAPI } from "./Autogeschaeft2CarAPI";

// Create Data
const shop1 = new Autogeschaeft1CarAPI();
const shop2 = new Autogeschaeft2CarAPI();

const shops = [
  { name: "Autogeschaeft 1", api: shop1, search: "rot" },
  { name: "Autogeschaeft 2", api: shop2, search: "weiss" },
];

shops.forEach((shop) => {
  console.log(`${shop.name} - alle Autos:`);
  console.log(shop.api.getAllCars());

  console.log(`${shop.name} - Suche '${shop.search}':`);
  console.log(shop.api.findCars(shop.search));
});
