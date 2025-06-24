const size = 16;
const button = document.querySelector(".prompt");
const container = document.querySelector(".container");

button.addEventListener("click", () => onClick());
generateGrid(size);

function generateGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = addRow();
    for (let j = 0; j < size; j++) {
      addSquare(row);
    }
  }
}

function onClick() {
  const size = parseInt(prompt("Enter new size (0 to 100):"));
  if (size > 0 && size <= 100) {
    container.replaceChildren();
    generateGrid(size);
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
