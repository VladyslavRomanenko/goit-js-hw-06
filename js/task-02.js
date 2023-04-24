const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listRef = document.getElementById("ingredients");
const listItems = ingredients.map((el) => {
  const li = document.createElement("li");
  li.classList.add("el");
  li.textContent = el;
  return li;
});
listRef.append(...listItems);
