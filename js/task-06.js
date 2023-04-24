const inputRef = document.querySelector("#validation-input");
const inputLength = inputRef.getAttribute("data-length");
inputRef.addEventListener("blur", (event) => {
  event.preventDefault();
  const dataInput = event.target.value;
  if (dataInput.length >= inputLength) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});
