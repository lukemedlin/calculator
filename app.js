const output = document.querySelector('#output');
const operandBtns = document.querySelectorAll('.operand');
const operatorBtns = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");
const negateBtn = document.querySelector("#negate");
const decimalBtn = document.querySelector("#decimal");

let num1 = '';
let num2 = '';
let currentOperator = null;

equalsBtn.addEventListener('click', equals);
clearBtn.addEventListener('click', clearAll);
negateBtn.addEventListener('click', setNegation);
decimalBtn.addEventListener('click', appendDecimal);
operatorBtns.forEach(btn => btn.addEventListener('click', setOperator));
operandBtns.forEach(btn => btn.addEventListener('click', appendOperand));

function appendOperand() {
    num1 += this.textContent;
    output.textContent = num1;
    checkOverflow(num1.length);
}

function appendDecimal() {
    if (!output.textContent.includes('.')) {
        output.textContent += '.';
        num1 = output.textContent;
    }
}

function setOperator() {
    if (currentOperator) {
        equals();
    }
    num2 = output.textContent;
    num1 = '';
    currentOperator = this.textContent;
}

function equals() {
    if (num1 == 0 && currentOperator === '/') {
        divideZero();
        return; 
    }
    
    output.textContent = round(evaluate(currentOperator, num1, num2));
    checkOverflow(output.textContent.length);
}

function evaluate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+':
            return add(a, b);;
        case '-':
            return subtract(a, b );
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return b - a;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b / a;
}

function clearAll() {
    num1 = '';
    num2 = '';
    currentOperator = null;
    output.textContent = 0;
}

function divideZero() {
    num1 = '';
    num2 = '';
    currentOperator = null;
    output.textContent = "Can't / 0";
}

function checkOverflow(length) {
    if (length > 8) {
        num1 = '';
        num2 = '';
        currentOperator = null;
        output.textContent = "overflow";
    }
}

function round(a) {
    return Math.round(a * 100) / 100;
}

function setNegation() {
    num1 *= -1;
    output.textContent *= -1;
}