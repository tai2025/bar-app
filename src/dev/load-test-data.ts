import { connectClient, stopClient } from "../server/db";

async function main() {
  const client = await connectClient();

  await client.collection("drinks").deleteMany({});

  const resp = await client.collection("drinks").insertMany([
    {
      id: 1,
      name: "Mojito",
      ingredients: [
        "2 oz white rum",
        "1/2 oz simple syrup",
        "1 oz lime juice",
        "2-4 fresh mint leaves",
        "Club soda"
      ],
      price: "8.00",
      photo: "./asset/Mojito.png"
    },
    {
      id: 2,
      name: "Martini",
      ingredients: [
        "2 1/2 oz gin or vodka",
        "1/2 oz dry vermouth",
        "Lemon twist or olives for garnish"
      ],
      price: "10.00",
      photo: "./asset/Martini.png"
    },
    {
      id: 3,
      name: "Old Fashioned",
      ingredients: [
        "2 oz bourbon or rye whiskey",
        "1 sugar cube",
        "2 dashes Angostura bitters",
        "Orange peel for garnish",
        "Ice"
      ],
      price: "9.50",
      photo: "./asset/Oldfashion.png"
    },
    {
      id: 4,
      name: "Margarita",
      ingredients: [
        "2 oz tequila",
        "1 oz lime juice",
        "1/2 oz triple sec",
        "Salt for rimming (optional)",
        "Ice"
      ],
      price: "7.50",
      photo: "./asset/Margarita.png"
    },
    {
      id: 5,
      name: "Cosmopolitan",
      ingredients: [
        "1 1/2 oz vodka",
        "1 oz cranberry juice",
        "1/2 oz triple sec",
        "1/2 oz lime juice",
        "Lime wedge for garnish",
        "Ice"
      ],
      price: "9.00",
      photo: "./asset/Cosmopolitan.png"
    },
    {
      id: 6,
      name: "Pina Colada",
      ingredients: [
        "2 oz white rum",
        "3 oz pineapple juice",
        "1 oz coconut cream",
        "Pineapple slice for garnish",
        "Maraschino cherry for garnish",
        "Ice"
      ],
      price: "8.50",
      photo: "./asset/PinaColada.png"
    },
    {
      id: 7,
      name: "Negroni",
      ingredients: [
        "1 oz gin",
        "1 oz Campari",
        "1 oz sweet vermouth",
        "Orange twist for garnish",
        "Ice"
      ],
      price: "10.50",
      photo: "./asset/Negroni.png"
    },
    {
      id: 8,
      name: "Whiskey Sour",
      ingredients: [
        "2 oz bourbon whiskey",
        "3/4 oz fresh lemon juice",
        "1/2 oz simple syrup",
        "Lemon slice for garnish",
        "Maraschino cherry for garnish",
        "Ice"
      ],
      price: "8.50",
      photo: "./asset/WhiskeySour.png"
    }
  ]);

  console.info("Inserted Contests:", resp.insertedCount);

  stopClient();
}

main();
