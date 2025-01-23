function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChangeColor = document.querySelector(".change-color");
const colorSapn = document.querySelector(".color");
btnChangeColor.addEventListener("click", changeBodyColor);
function changeBodyColor() {
  const colorRandom = getRandomHexColor();
  document.body.style.backgroundColor = colorRandom;
  colorSapn.textContent = colorRandom;
}
