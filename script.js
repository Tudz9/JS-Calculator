// Refrence display element    
const display = document.getElementById('display');

// Track if we have performed a calculation
let justCalculated = false;

function appendToDisplay(value) {
    console.log('button pressed:', value);
    
    alert('You pressed' + value);
}