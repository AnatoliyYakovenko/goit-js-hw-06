const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liEl = ingredients.map((el) => {
  const ingredientsRef = document.createElement("li");
  ingredientsRef.textContent = el;
  ingredientsRef.classList.add("item");
  return ingredientsRef;
});

const listRef = document.querySelector("#ingredients");
listRef.append(...liEl);
