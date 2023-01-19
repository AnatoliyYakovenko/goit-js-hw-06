const ItemsEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${ItemsEl.length}`);

const CategoriesArr = ItemsEl.forEach((el) => {
  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelectorAll("li").length}`);
});
