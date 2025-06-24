const GRID_LENGTH = 16;

const container = document.querySelector(".container");

for (let i = 0; i < GRID_LENGTH; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}
