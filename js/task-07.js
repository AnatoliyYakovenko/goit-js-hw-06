const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
console.log(inputEl);
inputEl.addEventListener("input", (event) => {
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
});
