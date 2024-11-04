

let hour = 1;
let minute = 27;
let second = 60;

const hourHolder = document.querySelector('#hour');
const minuteHolder = document.querySelector('#minute');

const intervalId = setInterval(() => {

    hourHolder.innerHTML = hour;
    minuteHolder.innerHTML = minute;

    if (minute === 0 && hour === 0 && minute === 0) {
        clearInterval(intervalId);
    }

    if (minute === 0 && hour !== 0) {
        hour = hour - 1;
        minute = 60;
    }

    if (second === 0) {
        minute = minute - 1;
        second = 60;
    }

    second = second - 1;

}, 1000);