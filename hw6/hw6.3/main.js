
function myFilter(data, itemToRemove) {
    let filtered = data.filter(function (item) {
        if (item !== itemToRemove) {
            return true;
        }
    });

    return filtered;
}
const array = [1, 3, 4, 6, 2, 5, 7];
console.log(myFilter(array, 7));