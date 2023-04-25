const dataFormRef = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const { email, password } = event.target.elements;
  if (email.value === "" || password.value === "") {
    alert("Not all fields are filled");
  } else {
    const userData = { email: email.value, password: password.value };
    console.log(userData);
    dataFormRef.reset();
  }
};

dataFormRef.addEventListener("submit", handleSubmit);
