const inputRef = document.querySelector("#name-input");
const titleRef = document.querySelector("#name-output");

const handleInput = (event) => {
  event.preventDefault();
  const dataInput = event.target.value;

  if (dataInput) {
    titleRef.textContent = dataInput;
  } else {
    titleRef.textContent = "Anonymous";
  }
};

inputRef.addEventListener("input", handleInput);
