let displayValue = "";
let memoryValue = null;

function appendToDisplay(value) {
  if (value === "sqrt") {
    displayValue += "Math.sqrt(";
  } else {
    displayValue += value;
  }
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = "";
}

function calculateResult() {
  try {
    // Replace "sqr" with "Math.sqrt" before evaluation
    let result = eval(displayValue.replace(/sqr/g, "Math.sqrt"));
    if (result === Infinity || result === -Infinity || isNaN(result)) {
      document.getElementById("display").value = "Error";
    } else {
      document.getElementById("display").value = result;
    }
    displayValue = "";
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function memoryClear() {
  memoryValue = null;
}

function memoryRecall() {
  if (memoryValue !== null) {
    displayValue += memoryValue;
    document.getElementById("display").value = displayValue;
  }
}

function memoryStore() {
  memoryValue = displayValue;
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById("display").value = displayValue;
}
