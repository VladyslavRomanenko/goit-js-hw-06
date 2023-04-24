const decrementButtonRef = document.querySelector("[data-action=decrement]");
const incrementButtonRef = document.querySelector("[data-action=increment]");
const counterValue = document.querySelector("#value");

decrementButtonRef.addEventListener("click", () => {
  const currentValue = Number(counterValue.textContent);
  counterValue.textContent = currentValue - 1;
});
incrementButtonRef.addEventListener("click", () => {
  const currentValue = Number(counterValue.textContent);
  counterValue.textContent = currentValue + 1;
});
