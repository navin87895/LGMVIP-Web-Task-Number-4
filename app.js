let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function chooseOperation(op) {
  if (currentNumber === "") return;
  if (previousNumber !== "") {
    calculate();
  }
  operator = op;
  previousNumber = currentNumber;
  currentNumber = "";
}

function calculate() {
  let computation;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
      return;
  }
  currentNumber = computation.toString();
  operator = "";
  previousNumber = "";
  updateDisplay();
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.value = currentNumber;
}
