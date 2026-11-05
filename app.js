const box = document.querySelector(".box");
box.style.backgroundcolor = "red";
const header = document.getElementById("color");
const btn = document.querySelector("#btn");
let x = 0;

function rgb() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  box.style.backgroundcolor = `rgb(${r}, ${g}, ${b})`;
  header.textContent = `Clicked ${x} rgb(${r}, ${g}, ${b})`;
}
function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt=""/>
        <p></p>
    </div> `,
  );
}
inject("Hello");

btn.addEventListener("click", function () {
  x++;
  header.textContent = `Clicked ${x} rgb(${r}, ${g}, ${b})`;
});

//make 1 html card and comment it out
//select the container
//forEach on items to inject to screen
//select add cart buttons
