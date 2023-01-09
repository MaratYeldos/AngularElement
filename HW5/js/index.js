// Select the calculator screen and store it in a variable
const calcScreen = document.querySelector('.calc-screen p');

// Select all the buttons and store
const buttons = document.querySelectorAll('.btn');

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', e => {
        // Get the button's value
        const btnVal = e.target.innerText;

        // Check if the button is a number or a function
        if (!isNaN(btnVal)) {
            // If it's a number, append it to the screen
            calcScreen.innerText += btnVal;
        } else if (btnVal === 'ac') {
            // If it's the AC button, clear the screen
            calcScreen.innerText = '';
        } else if (btnVal === '+/') {
            // If it's the +/- button, negate the number on the screen
            calcScreen.innerText = -calcScreen.innerText;
        } else if (btnVal === '%') {
            // If it's the % button, divide the number on the screen by 100
            calcScreen.innerText = calcScreen.innerText / 100;
        } else if (btnVal === '+' || btnVal === '-' || btnVal === 'X' || btnVal === '/') {
            // If it's a function button, store the function and the current value in variables
            calc.function = btnVal;
            calc.firstValue = calcScreen.innerText;
            // Clear the screen
            calcScreen.innerText = '';
        } else if (btnVal === '=') {
            // If it's the equal button, perform the function with the stored first value and the current screen value
            if (calc.function === '+') {
                calcScreen.innerText = parseInt(calc.firstValue) + parseInt(calcScreen.innerText);
            } else if (calc.function === '-') {
                calcScreen.innerText = parseInt(calc.firstValue) - parseInt(calcScreen.innerText);
            } else if (calc.function === 'X') {
                calcScreen.innerText = parseInt(calc.firstValue) * parseInt(calcScreen.innerText);
            } else if (calc.function === '/') {
                calcScreen.innerText = parseInt(calc.firstValue) / parseInt(calcScreen.innerText);
            }
            // Clear the function and first value variables
            calc.function = '';
            calc.firstValue = '';
        }
    });
});

// Create an object to store the calculator's function and first value
const calc = {
    function: '',
    firstValue: ''
};
