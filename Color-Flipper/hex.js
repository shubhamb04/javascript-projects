const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

function colorvalue() {
  let hexCol = "#";

  for (let i = 0; i < 6; i++) {
    hexCol += hex[randomNumIndex()];
  }

  document.body.style.backgroundColor = hexCol;
  color.textContent = hexCol;
}

const randomNumIndex = () => {
  return Math.floor(Math.random() * hex.length);
};

btn.addEventListener("click", colorvalue);
