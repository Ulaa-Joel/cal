const operand = prompt('Enter + for addition, - for subtraction, * for multiplication, or / for division:');
const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

if(operand == '+') {
    result = num1 + num2;
} else if(operand == '-') {
    result = num1 - num2;
} else if(operand == '*') {
    result = num1 * num2;
} else {
    result = num1 / num2;
};

alert("Result: " + result);