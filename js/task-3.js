const input = document.getElementById("name-input");
const output = document.getElementById("name-output");
const defaultName = output.textContent;
input.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim() === "") {
    output.textContent = defaultName;
  } else output.textContent = event.currentTarget.value.trim();
});
