const GRID_LENGTH = 16;
const container = document.querySelector(".container");

for (let i = 0; i < GRID_LENGTH; i++) {
  const row = addRow();
  for (let j = 0; j < GRID_LENGTH; j++) {
    addSquare(row);
  }
}

function addRow() {
  const row = document.createElement("div");
  row.classList.add("row");
  return container.appendChild(row);
}

function addSquare(row) {
  const square = document.createElement("div");
  square.classList.add("square");
  row.appendChild(square);
}
