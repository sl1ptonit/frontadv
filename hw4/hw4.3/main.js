let yearOfBirth = +prompt("Введіть рік народження:");
let city = prompt("В якому місті Ви живете?");
let sport = prompt("Ваш улюблений вид спорту?");

if (isNaN(yearOfBirth) || yearOfBirth === 0) {
    yearMessage = "Шкода, що Ви не захотіли ввести свою дату народження";
} else {
    yearMessage = "Твiй вік: " + (new Date().getFullYear() - yearOfBirth);
}

switch (city) {
    case null:
        cityMessage = "Шкода, що Ви не захотіли ввести свій(ю) місто";
        break;
    case typeof sport !== 'string':
        cityMessage = "Шкода, що Ви не захотіли ввести свій(ю) місто";
        break;
    case city.trim() === '':
        cityMessage = "Шкода, що Ви не захотіли ввести свій(ю) місто";
        break;
    case "Київ":
        cityMessage = "Ти живеш у столиці України!";
        break;
    case "Лондон":
        cityMessage = "Ти живеш у столиці Великобританії!";
        break;
    case "Вашингтон":
        cityMessage = "Ти живеш у столиці США!";
        break;
    default:
        cityMessage = `Ти живеш у місті ${city}.`;
}

if (typeof sport === 'string' && isNaN(+sport)) {
    sportMessage = `Вид спорту ${sport}.`;
} else {
    sportMessage = "Шкода, що Ви не захотіли ввести свій(ю) спорт";
}

alert(`${yearMessage} ${cityMessage} ${sportMessage}`);
