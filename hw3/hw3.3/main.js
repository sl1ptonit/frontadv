let promptNum = prompt("Enter a number");
let realNumber = +promptNum;

let fifthNumber = realNumber % 10;
let forthNumberAll = Math.floor(realNumber / 10);
let forthNumber = forthNumberAll % 10;

let thirdNumberAll = Math.floor(forthNumberAll / 10);
let thirdNumber = thirdNumberAll % 10;

let secondNumberAll = Math.floor(thirdNumberAll / 10);
let secondNumber = secondNumberAll % 10;

let firstNumberAll = Math.floor(secondNumberAll / 10);
let firstNumber = firstNumberAll % 10;

console.log(`${firstNumber} ${secondNumber} ${thirdNumber} ${forthNumber} ${fifthNumber} `);