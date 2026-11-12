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
  // {
  //   name: "",
  //   price: ,
  //   type: "",
  //   year: ,
  //   limited: ,
  // },
  // {
  //   name: "",
  //   price: ,
  //   type: "",
  //   year: ,
  //   limited: ,
  // },
  // {
  //   name: "",
  //   price: ,
  //   type: "",
  //   year: ,
  //   limited: ,
  // },
  // {
  //   name: "",
  //   price: ,
  //   type: "",
  //   year: ,
  //   limited: ,
  // },
  // {
  //   name: "",
  //   price: ,
  //   type: "",
  //   year: ,
  //   limited: ,
  // },
  // {
  //   name: "",
  //   price: ,
  //   type: "",
  //   year: ,
  //   limited: ,
  // },
  // {
  //   name: "",
  //   price: ,
  //   type: "",
  //   year: ,
  //   limited: ,
  // },
  // {
  //   name: "",
  //   price: ,
  //   type: "",
  //   year: ,
  //   limited: ,
  // },
];

// function addToCart(item) {
//     const cart = [];
//     if (item = figures.name) {
//         cart.push(figures.name);
//     }
//     return cart;
// }

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
      <h2 class="product-header">${figure.name}</h2>
      <button class="btn">Add to cart</button>
    </div>`,
    );
  });
}
inject();
