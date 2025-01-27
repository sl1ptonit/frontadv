let number = 2;
console.log(typeof number);

let str = 'str';
console.log(typeof str);

let bool = true;
console.log(typeof bool);

console.log(typeof Symbol('description'));

console.log(typeof undefined);

console.log(typeof null);

let arr = [1, 2, 3, 4, 5];


let doubled = arr.map((num, index) => {
    return num * 2;
});

console.log(arr);
