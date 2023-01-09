'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function calculateArea(r, PI) {
    const sum = PI * Math.pow(r,2);
    return sum;
}

function calculatePerimeter(r, PI) {
    const sum = (2 * PI * r);
    return sum
}

function main() {
    const PI = Math.PI;
    const r = +(readLine());
    
    console.log(calculateArea(r, PI));
    console.log(calculatePerimeter(r, PI));
    
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}