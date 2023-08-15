const placeholder = document.getElementById('placeholder');
const clearButton = document.getElementById('clear');
const numberButtons = document.querySelectorAll('.item');
const operatorButtons = document.querySelectorAll('.operation');
const equalsButton = document.getElementById('equals');

let clearPlaceholder = false;
let currentOperator = '';
let firstOperand = '';

clearButton.addEventListener('click', () => {
    placeholder.textContent = '0';
    clearPlaceholder = false;
    currentOperator = '';
    firstOperand = '';
});

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (placeholder.textContent === '0' || clearPlaceholder) {
            placeholder.textContent = buttonText;
            clearPlaceholder = false;
        } else {
            placeholder.textContent += buttonText;
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentOperator !== '') {
            calculate();
        }
        currentOperator = button.textContent;
        firstOperand = placeholder.textContent;
        clearPlaceholder = true;
    });
});

equalsButton.addEventListener('click', () => {
    if (currentOperator !== '' && firstOperand !== '') {
        calculate();
        currentOperator = '';
        firstOperand = placeholder.textContent;
    }
});

function calculate() {
    const secondOperand = placeholder.textContent;
    let result;

    switch (currentOperator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        case 'x':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        default:
            break;
    }

    placeholder.textContent = result;
}