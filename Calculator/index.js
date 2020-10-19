const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const calDisplay = calculator.querySelector(".calculator__display");
keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;
  const key = event.target;
  const keyValue = key.textContent;
  const displayvalue = calDisplay.textContent;
  const { type } = key.dataset;
  const { previousKeyType } = calculator.dataset;
  //if key is number
  if (type === "number") {
    if (displayvalue === "0" || previousKeyType === "operator") {
      calDisplay.textContent = keyValue;
    } else {
      calDisplay.textContent = displayvalue + keyValue;
    }
  }

  //if key is operator
  if (type === "operator") {
    const operatorKeys = keys.querySelectorAll("[data-type=operator]");
    operatorKeys.forEach((el) => (el.dataset.state = ""));
    key.dataset.state = "selected";

    calculator.dataset.firstNum = displayvalue;
    calculator.dataset.operator = key.dataset.key;
  }

  if (type === "equal") {
    //perform calculation
    const firstNum = calculator.dataset.firstNum;
    const secondNum = displayvalue;
    const operator = calculator.dataset.operator;

    calDisplay.textContent = calculate(firstNum, operator, secondNum);
  }

  if (type === "clear") calDisplay.textContent = "0";

  calculator.dataset.previousKeyType = type;
});

const calculate = (firstNum, operator, secondNum) => {
  firstNum = parseInt(firstNum);
  secondNum = parseInt(secondNum);
  let result = "";
  if (operator === "plus") result = firstNum + secondNum;
  if (operator === "minus") result = firstNum - secondNum;
  if (operator === "times") result = firstNum * secondNum;
  if (operator === "divide") result = firstNum / secondNum;
  return result;
};
