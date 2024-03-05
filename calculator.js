// Variables to hold the current calculation expression and history
let expression = '';
let history = '';

// Function to append a number to the display
function appendNumber(number) {
    expression += number;
    updateDisplay();
}

// Function to append an operator (+, -, *, /) to the display
function appendOperator(operator) {
    expression += operator;
    updateDisplay();
}

// Function to append a decimal point to the display
function appendDecimal() {
    expression += '.';
    updateDisplay();
}

// Function to clear the display
function clearDisplay() {
    expression = '';
    updateDisplay();
}

// Function to reset the calculator
function reset() {
    expression = '';
    history = '';
    updateDisplay();
}

// Function to update the display with the current expression
function updateDisplay() {
    document.getElementById('display').innerText = expression;
}

// Function to evaluate the expression
function calculate() {
    try {
        // Evaluate the expression using the eval() function
        let result = eval(expression);
        // Update history
        history = expression + ' = ' + result;
        // Clear expression and display result
        expression = result;
        updateDisplay();
        // Update answer
        // Update history display
        document.getElementById('answer').innerText = history;
    } catch (error) {
        // Handle errors (e.g., division by zero)
        clearDisplay();
        document.getElementById('answer').innerText = 'Error';
    }
}
