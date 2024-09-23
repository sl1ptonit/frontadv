function askNumber() {
    let input;
    let attempts = 0;
    const maxAttempts = 10;

    while (attempts < maxAttempts) {
        input = prompt("Введіть число більше 100:");

        if (input === null) {
            console.log("Введення було скасоване.");
            return;
        }

        input = Number(input); // Перетворюємо введене значення на число

        if (input > 100) {
            console.log("Останнє введене число: " + input);
            return;
        }

        attempts++;
    }

    console.log("Кількість спроб вичерпано. Останнє введене число: " + input);
}

askNumber();