const figures = [
    {
        name: "Hatsune Miku - 1/7 - Gao Shan Liu Shui Ver",
        price: 365,
        type: "Scale",
        year: 2023,
        limited: false,
    },
    {
        name: "Hatsune Miku - 1/7 - Magical Mirai 2024 Ver",
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
        name: "Hatsune Miku Fashion Series Fancy Taito",
        price: 35,
        type: "Prize",
        year: 2025,
        limited: false,
    },
]

function addToCart(item) {
    const cart = [];
    let item = figures.name;
    cart.push(item);
    return cart;
}

console.log(addToCart("Hatsune Miku - 1/7 - Gao Shan Liu Shui Ver"));

// name: ,
// price: ,
// type: ,
// year: ,
// limited: ,