const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function getAmount() {
  destroyBoxes();
  createBoxes(+inputEl.value);
}
function createBoxes(amount) {
  console.log(amount);
  let markup = ``;
  for (let i = 0; i < amount; i++) {
    let size = 30 + 10 * (i + 1);
    markup += `<div style="background-color:${getRandomHexColor()}; width:${size}px; height:${size}px;"></div>`;
  }
  console.log(markup);
  boxesEl.insertAdjacentHTML("afterbegin", markup);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  // inputEl.value = "";
}
destroyBtn.addEventListener("click", destroyBoxes);
createBtn.addEventListener("click", getAmount);
