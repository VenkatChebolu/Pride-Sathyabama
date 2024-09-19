let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue !== '' && !isNaN(displayValue.slice(-1))) {
        displayValue += operator;
        updateDisplay();
    }
}

function appendDot() {
    if (displayValue === '' || isNaN(displayValue.slice(-1))) {
        displayValue += '0.';
    } else if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
