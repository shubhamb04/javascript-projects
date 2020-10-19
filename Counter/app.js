const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let count = 0;

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const classBox = e.currentTarget.classList;

    if (classBox.contains("decrease")) {
      count -= 1;
    } else if (classBox.contains("increase")) {
      count += 1;
    } else {
      count = 0;
    }

    if (count < 0) {
      value.style.color = "red";
    }
    if (count > 0) {
      value.style.color = generateCol();
    }
    if (count === 0) {
      value.style.color = "#222";
    }

    value.textContent = count;
  });
});

function generateCol() {
  let hexCol = "#";

  for (let i = 0; i < 6; i++) {
    hexCol += hex[getRandCol()];
  }
  return hexCol;
}

function getRandCol() {
  return Math.floor(Math.random() * hex.length);
}
