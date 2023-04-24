const liItems = document.querySelectorAll("#categories .item");
console.log("Number of categories:", liItems.length);

liItems.forEach((item) => {
  const categoryNameEl = item.querySelector("h2").textContent;
  const categoryEl = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryNameEl}\nElements:${categoryEl}`);
});
