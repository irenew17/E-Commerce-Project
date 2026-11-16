const figures = [
  {
    name: "Gao Shan Liu Shui",
    price: 365,
    type: "Scale",
    year: 2023,
    limited: false,
  },
  {
    name: "Magical Mirai 2024",
    price: 633,
    type: "Scale",
    year: 2025,
    limited: false,
  },
  {
    name: "Snow Miku Grand Voyage",
    price: 168,
    type: "Figma",
    year: 2022,
    limited: true,
  },
  {
    name: "Hatsune Miku x Cinnamoroll Luminasta",
    price: 84,
    type: "Prize",
    year: 2023,
    limited: false,
  },
  {
    name: "Fashion Series Fancy Taito",
    price: 35,
    type: "Prize",
    year: 2025,
    limited: false,
  },
  {
    name: "Flower Fairy Clover",
    price: 33,
    type: "Noodle Stopper",
    year: 2025,
    limited: false,
  },
  {
    name: "Sakura Miku Coreful",
    price: 42,
    type: "Prize",
    year: 2024,
    limited: true,
  },
  {
    name: "World Is Mine",
    price: 59,
    type: "Nendoroid",
    year: 2024,
    limited: false,
  },
  {
    name: "100th Adventure",
    price: 65,
    type: "Nendoroid",
    year: 2025,
    limited: false,
  },
  {
    name: "Snow Miku 2020",
    price: 98,
    type: "Figma",
    year: 2020,
    limited: true,
  },
  {
    name: "Racing Miku 2015",
    price: 3939,
    type: "Figma",
    year: 2015,
    limited: true,
  },
  {
    name: "Greatest Idol",
    price: 388,
    type: "Scale",
    year: 2011,
    limited: false,
  },
  {
    name: "Sakura Fairy",
    price: 298,
    type: "Scale",
    year: 2021,
    limited: false,
  },
  {
    name: "Citrus Miku",
    price: 65,
    type: "Noodle Stopper",
    year: 2026,
    limited: false,
  },
  {
    name: "3rd Season Winter",
    price: 26,
    type: "Prize",
    year: 2021,
    limited: false,
  },
  {
    name: "Original Summer Clothes",
    price: 34,
    type: "Prize",
    year: 2019,
    limited: false,
  },
  {
    name: "Miku Expo 2021",
    price: 101,
    type: "Nendoroid",
    year: 2022,
    limited: false,
  },
  {
    name: "Magical Mirai 2016",
    price: 393939,
    type: "Nendoroid",
    year: 2017,
    limited: false,
  },
  {
    name: "Birthday 2024 Flower Ver",
    price: 42,
    type: "Prize",
    year: 2024,
    limited: true,
  },
  {
    name: "Snow Miku Sky Town Ver",
    price: 40,
    type: "Noodle Stopper",
    year: 2025,
    limited: false,
  },
];

// name: ,
// price: ,
// type: ,
// year: ,
// limited: ,

function inject(figure) {
  const catalog = document.querySelector("#product-list");
  figures.forEach((figure) => {
    catalog.insertAdjacentHTML(
      "beforeend",
      `<div class="product">
      <h2 id="product-header">${figure.name}</h2>
      <div id="details">
      <h3 id="type">${figure.type}</h3>
      <h3> </h3>
      <h3 id="year">${figure.year}</h3>
      <h3> </h3>
      <h3 id="limited">${figure.limited}</h3>
      </div>
      <button id="btn">Add to cart</button>
    </div>`,
    );
  });
}
inject();
