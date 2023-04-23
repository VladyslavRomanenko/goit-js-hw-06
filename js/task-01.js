const liItems = document.querySelectorAll("#categories .item");
console.log("Number of categories:", liItems.length);

liItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryEl = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}\nElements:${categoryEl}`);
});
