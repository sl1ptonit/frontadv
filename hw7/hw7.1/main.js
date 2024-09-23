
function sum() {
    let total = 0;

    return function(num) {
        total += num;
        return total;
    };
}

const add = sum();

console.log(add(4)); // 4
console.log(add(6)); // 10
console.log(add(10)); // 20
console.log(add(7)); // 27