const numberCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberCategories.length}`);
Array.from(numberCategories).forEach((category) => {
  console.log(`Category: ${category.querySelector(".item-title").textContent}`);
  console.log(
    `Elements: ${category.querySelectorAll(".item-list-object").length}`
  );
});
