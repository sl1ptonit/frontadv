
function myFilter(str, del) {

    if (typeof str !== "string" ) {
        return false;
    }

    let myAr = [];
    for(let i = 0; i < str.length; i++) {
        myAr.push(str[i]);
    }

    let filtered =  myAr.filter(function (el) {
        let erase = false;
        for (let j = 0; j < del.length; j++) {
            if (el === del[j]) {
                erase = true;
            }
        }

        if (!erase) {
            return true;
        }
    })

    return filtered.join('');
}

console.log(myFilter(" hello world", ['l', 'd']));