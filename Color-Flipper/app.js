const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let randomNum = randomColIndex();

  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
});

const randomColIndex = () => {
  return Math.floor(Math.random() * colors.length);
};
