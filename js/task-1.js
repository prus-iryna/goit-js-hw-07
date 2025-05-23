const categoriesList = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach((category) => {
  const titleCategory = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul li").length;
  console.log(`Category: ${titleCategory}`);
  console.log(`Elements: ${itemsCount}`);
});
