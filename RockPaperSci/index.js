const comp_score = document.getElementById("comp-score");
const user_score = document.getElementById("user-score");
const result = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const score_board = document.querySelector(".score-board");
let userScore = 0;
let compScore = 0;

const getCompChoices = () => {
  const compChoices = ["r", "p", "s"];
  const randValue = Math.floor(Math.random() * compChoices.length);
  return compChoices[randValue];
};

function transformLetter(letter) {
  if (letter === "p") return "Paper";
  if (letter === "r") return "Rock";
  return "Scissors";
}

function win(user, comp) {
  userScore++;
  user_score.textContent = userScore;
  //   const smallUserWord = "user".fontsize(3);
  //   const smallCompWord = "comp".fontsize(3);
  result.textContent = `${transformLetter(
    user
  )}(user) won over ${transformLetter(comp)}(comp). You win!`;
}

function lose(user, comp) {
  compScore++;
  comp_score.textContent = compScore;
  result.textContent = `${transformLetter(
    user
  )}(user) loses to ${transformLetter(comp)}(comp). You lose!`;
}

function draw(user, comp) {
  result.textContent = `Its a draw (${transformLetter(user)}:${transformLetter(
    comp
  )}). Try Again `;
}

const game = (userChoice) => {
  const compChoice = getCompChoices();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);

      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
};

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}

main();

// document.getElementById("root").addEventListener("click", function (event) {
//   console.log(event);
// });
