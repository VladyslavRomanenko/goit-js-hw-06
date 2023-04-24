function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createRef = document.querySelector("[data-create]");
const destroyRef = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
const inputRef = document.querySelector("input");

const createBoxes = (amount) => {
  const divBoxes = [];
  let boxesSize = 30;

  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    divEl.style.width = `${boxesSize}px`;
    divEl.style.height = `${boxesSize}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divBoxes.push(divEl);
    boxesSize += 10;
  }
  boxesContainer.append(...divBoxes);
};

function destroy() {
  boxesContainer.innerHTML = "";
}

function create() {
  const numb = Number(inputRef.value);
  createBoxes(numb);
}

createRef.addEventListener("click", create);
destroyRef.addEventListener("click", destroy);
