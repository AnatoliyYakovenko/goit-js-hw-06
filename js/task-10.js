// цей код не працює((

// const createBtn = document.querySelector("button[data-create]");
// const destroyBtn = document.querySelector("button[data-destroy]");
// const boxesEl = document.querySelector("#boxes");
// const inputEl = document.querySelector("#controls input");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// function createBoxes(amount) {
//   amount = +inputEl.value;
//   let markup = ``;
//   for (i = 0; i <= amount; i++) {
//     markup += `<div style="background-color: ${getRandomHexColor()}"></div>`;
//   }
//   boxesEl.insertAdjacentHTML("afterbegin", markup);

//   const boxesArr = [...boxesEl.children];
//   boxesArr.forEach((div, index) => {
//     div.style.width = `${30 + 10 * (index + 1)}px`;
//     div.style.height = `${30 + 10 * (index + 1)}px`;
//   });
// }

function destroyBoxes() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}

createBtn.addEventListener("click", createBoxes);
createBtn.addEventListener("click", destroyBoxes);
