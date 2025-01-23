function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function destroyBoxes() {
  boxContainer.innerHTML = "";
}
function createBoxes(amount) {
  destroyBoxes();
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    size += 10;
    boxes.push(box);
  }
  boxContainer.append(...boxes);
}
const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const btnCreate = controls.querySelector("[data-create]");
const btnDestroy = controls.querySelector("[data-destroy]");
const boxContainer = document.getElementById("boxes");

btnCreate.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});
btnDestroy.addEventListener("click", destroyBoxes);
