
let data = [4, 5, 9, 5, 10, 20, 30, 10]

function makeCopy(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {

        let elToFind = arr[i];
        let restData = arr.slice(i+1);
        let found = false;
        restData.forEach((item) => {
            if (item === elToFind) {
                found = true;

            }
        })

        if (found) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let copy = makeCopy(data);
console.log(copy);

