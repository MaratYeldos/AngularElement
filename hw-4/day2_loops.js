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

function vowelsAndConsonants(s) {
    const vowels = [];
    const consonants = [];
    
    for(const c of s) {
        if('aeiou'.includes(c)){
            vowels.push(c);
        } else {
            consonants.push(c);
        }
    }
    
    console.log(vowels.join("\n"));
    console.log(consonants.join("\n"));
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}