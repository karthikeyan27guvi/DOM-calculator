// Get the result element
const display = document.getElementById('result');

// Function to append number to the result
function appendNumber(number) {
    result.value += number;
}

// Function to append operator to the result
function appendOperator(operator) {
    result.value += ` ${operator} `;
}

// Function to clear the result
function clearDisplay() {
    result.value = '';
}

// Function to calculate the result
function calculateResult() {
    try {
        // Evaluate the expression
        const results = eval(result.value);
        result.value = results;
    } catch (error) {
        alert('Invalid expression');
    }
}

// Add event listener for keyboard events
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key)) {
        appendNumber(key);
    } else if (['+', '-', '*', '/', '%'].includes(key)) {
        appendOperator(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        result.value = result.value.slice(0, -1);
    } else {
        alert('Only numbers are allowed');
}
});

document.querySelector('#clear').click();
var one = document.getElementById('1');
var two = document.getElementById('2');
var add = document.getElementById('add');
var results = document.getElementById('result');
one.click();
add.click();
two.click();
document.getElementById('equal').click();
console.log(result.value); // Should output 3


var clear = document.querySelector('#clear');
clear.click();
var three = document.getElementById('3');
var one = document.getElementById('1');
var subtract = document.getElementById('subtract');
var results = document.getElementById('result');
three.click();
subtract.click();
one.click();
document.getElementById('equal').click();
console.log(result.value); // Should output 2
