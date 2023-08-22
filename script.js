function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, num2, operator){
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
    }
}

function appendNumber(){
    if (bottomScreen.textContent === '0'){
        bottomScreen.textContent = '';
    }
    bottomScreen.textContent += this.dataset.number;
}

function setOperator(){
    if (topScreen.textContent === ''){
        operator = this.dataset.operator;
        firstOperand = bottomScreen.textContent;
        topScreen.textContent = `${firstOperand} ${operator}`;
        bottomScreen.textContent = '';
    }
    else{
        if (operator != null){
            if (bottomScreen.textContent == ''){
                operator = this.dataset.operator;
                topScreen.textContent = `${firstOperand} ${operator}`;
            }
            else{
                secondOperand = bottomScreen.textContent;
                calculate(this.dataset.operator);
            }
        }
        if (operator === null && bottomScreen.textContent === ''){
            operator = this.dataset.operator;
            topScreen.textContent = `${firstOperand} ${operator}`;
        }
    }
    
}

function calculate(calcSign){
    result = operate(firstOperand,secondOperand,operator);
    operator = calcSign;
    topScreen.textContent = `${result} ${operator}`;
    bottomScreen.textContent = '';
    firstOperand = result;
    secondOperand = '';
    
}




let operator = null;
let firstOperand = '';
let secondOperand = '';

const bottomScreen = document.getElementById('bottom-screen');
const topScreen = document.getElementById('top-screen');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');

numberButtons.forEach (button => button.addEventListener('click', appendNumber));
operatorButtons.forEach (button => button.addEventListener('click', setOperator));