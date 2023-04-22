let counterValue = 0;

const counterSpan = document.querySelector("#value");
const counterDiv = document.querySelector("#counter");

counterDiv.addEventListener("click", (event) => {
  const button = event.target;
  const action = button.dataset.action;

  if (action === "increment") {
    counterValue += 1;
  } else if (action === "decrement") {
    counterValue -= 1;
  }
  counterSpan.textContent = counterValue;
});
