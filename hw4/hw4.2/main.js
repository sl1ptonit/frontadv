let promptNumber = prompt("Enter number name ?");
let realNumber = +promptNumber;

let thirdNumber = realNumber % 10;

let secondNumberAll = Math.floor(realNumber / 10);
let secondNumber = secondNumberAll % 10;

let firstNumberAll = Math.floor(secondNumberAll / 10);
let firstNumber = firstNumberAll % 10;

if (firstNumber === secondNumber && firstNumber === thirdNumber) {
    console.log('всі цифри однакові');
} else if (firstNumber === secondNumber) {
    console.log('однакові 1 и 2 число');
} else if (firstNumber === thirdNumber) {
    console.log('однакові 1 и 3 число');
} else if (secondNumber === thirdNumber) {
    console.log('однакові 2 и 3 число');
} else {
    console.log('нема однакових');
}