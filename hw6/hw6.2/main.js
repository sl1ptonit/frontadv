
function myCount(data) {
    let filtered = data.filter(function (item) {
        if (typeof item === 'number') {
            return true;
        }
    });

    let sum = 0;
    filtered.forEach(function (item) {
        sum += item;
    })

    return sum/filtered.length;
}

console.log(myCount([2, 4, 'hello', null, 2, '', 4]));