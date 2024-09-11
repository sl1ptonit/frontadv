let number = +prompt("Enter a number");

let prostoe = true;
if (!isNaN(number) && number!==0 && number > 0) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            prostoe = false;
            break;
        }
    }

    if (prostoe) {
        console.log(`${number} простое`);
    } else {
        console.log(`${number} не простое`);
    }
} else {
    console.log(`вы не ввели число`);
}



