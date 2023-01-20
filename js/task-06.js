const inputEl = document.querySelector("#validation-input");

const checkLength = () => {
  if (inputEl.value.length === +inputEl.dataset.length) {
    inputEl.classList.remove(`invalid`);
    inputEl.classList.add(`valid`);
    return;
  }
  inputEl.classList.remove(`valid`);
  inputEl.classList.add(`invalid`);
};

inputEl.addEventListener("blur", checkLength);
