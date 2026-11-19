const figures = [
  {
    name: "Gao Shan Liu Shui",
    price: 365.0,
    type: "Scale",
    year: 2023,
    limited: false,
    img: "images/GaoShanLiuShui.jpg",
  },
  {
    name: "Magical Mirai 2024",
    price: 633.0,
    type: "Scale",
    year: 2025,
    limited: false,
    img: "images/MagicalMirai2024.webp",
  },
  {
    name: "Snow Miku Grand Voyage",
    price: 168.0,
    type: "Figma",
    year: 2022,
    limited: true,
    img: "images/SnowMikuGrandVoyage.webp",
  },
  {
    name: "Hatsune Miku x Cinnamoroll",
    price: 84.0,
    type: "Prize",
    year: 2023,
    limited: false,
    img: "images/HatsuneMikuxCinnamoroll.webp",
  },
  {
    name: "Fashion Series Fancy",
    price: 35.0,
    type: "Prize",
    year: 2025,
    limited: false,
    img: "images/FashionSeriesFancy.webp",
  },
  {
    name: "Flower Fairy Clover",
    price: 33.0,
    type: "Noodle Stopper",
    year: 2025,
    limited: false,
    img: "images/FlowerFairyClover.png",
  },
  {
    name: "Sakura Miku Coreful",
    price: 42.0,
    type: "Prize",
    year: 2024,
    limited: true,
    img: "images/SakuraMikuCoreful.webp",
  },
  {
    name: "World Is Mine",
    price: 59.0,
    type: "Nendoroid",
    year: 2024,
    limited: false,
    img: "images/WorldIsMine.webp",
  },
  {
    name: "100th Adventure",
    price: 65.0,
    type: "Nendoroid",
    year: 2025,
    limited: false,
    img: "images/100thAdventure.webp",
  },
  {
    name: "Snow Miku 2020",
    price: 98.0,
    type: "Figma",
    year: 2020,
    limited: true,
    img: "images/SnowMiku2020.webp",
  },
  {
    name: "Racing Miku 2015",
    price: 3939.0,
    type: "Figma",
    year: 2015,
    limited: true,
    img: "images/RacingMiku2015",
  },
  {
    name: "Greatest Idol",
    price: 388.0,
    type: "Scale",
    year: 2011,
    limited: false,
    img: "images/",
  },
  {
    name: "Sakura Fairy",
    price: 298.0,
    type: "Scale",
    year: 2021,
    limited: false,
    img: "images/",
  },
  {
    name: "Citrus Miku",
    price: 65.0,
    type: "Noodle Stopper",
    year: 2026,
    limited: false,
    img: "images/",
  },
  {
    name: "3rd Season Winter",
    price: 26.0,
    type: "Prize",
    year: 2021,
    limited: false,
    img: "images/",
  },
  {
    name: "Original Summer Clothes",
    price: 34.0,
    type: "Prize",
    year: 2019,
    limited: false,
    img: "images/",
  },
  {
    name: "Miku Expo 2021",
    price: 101.0,
    type: "Nendoroid",
    year: 2022,
    limited: false,
    img: "images/",
  },
  {
    name: "Magical Mirai 2016",
    price: 393939.0,
    type: "Nendoroid",
    year: 2017,
    limited: false,
    img: "images/",
  },
  {
    name: "Birthday 2024 Flower",
    price: 42.0,
    type: "Prize",
    year: 2024,
    limited: true,
    img: "images/",
  },
  {
    name: "Snow Miku Sky Town",
    price: 40.0,
    type: "Noodle Stopper",
    year: 2025,
    limited: false,
    img: "images/",
  },
  {
    name: "Meihua Sannong",
    price: 259.0,
    type: "Scale",
    year: 2026,
    limited: false,
    img: "images/",
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
      <img id="image" src=${figure.img} alt=image of figure>
      <h3 id="type" class="text">${figure.type}</h3>
      <h3 id="year" class="text">${figure.year}</h3>
      <h3 id="price" class="text">$${figure.price}.00</h3>
      </div>
      <button id="btn">Add to cart</button>
    </div>`,
    );
  });
}
inject();
