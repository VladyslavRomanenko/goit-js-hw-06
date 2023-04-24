const dataFormRef = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const formElements = Array.from(event.currentTarget.elements);
  const formData = formElements.reduce((formData, el) => {
    if (el.name) {
      if (el.value.length === 0) {
        alert("Заповніть, будь ласка, всі поля в формі!");
      } else {
        formData[el.name] = el.value;
      }
    }
    return formData;
  }, {});
  console.log(formData);
  dataFormRef.reset();
};

dataFormRef.addEventListener("submit", handleSubmit);
