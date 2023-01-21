const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const changeColor = () => {
  colorEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
};

const colorBtn = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
colorBtn.addEventListener("click", changeColor);
