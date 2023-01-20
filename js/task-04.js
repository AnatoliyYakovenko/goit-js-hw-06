let counterValue = 0;

const decrEl = document.querySelector("button[data-action='decrement']");
const incrEl = document.querySelector("button[data-action='increment']");
const valEl = document.querySelector("#value");

decrEl.addEventListener("click", () => {
  counterValue -= 1;
  valEl.textContent = counterValue;
});
incrEl.addEventListener("click", () => {
  counterValue += 1;
  valEl.textContent = counterValue;
});
