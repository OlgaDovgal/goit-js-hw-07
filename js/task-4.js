const elLoginForm = document.querySelector(".login-form");
elLoginForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email.trim() === "" || password.trim() === "") {
    alert("All form fields must be filled in");
    return;
  }
  const objData = {};
  objData[form.elements.email.name] = email.trim();
  objData[form.elements.password.name] = password.trim();
  console.log(objData);
  elLoginForm.reset();
}
