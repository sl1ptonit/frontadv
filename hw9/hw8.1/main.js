
let company = {
    sales: [
        {
            name: 'John',
            salary: 1000,
        },
        {
            name: 'Alice',
            salary: 600,
        }
    ],
    development: {
        web: [
            { name : 'Peter', salary: 2000}, { name: 'Alex', salary: 1800 }
        ],
        internals:[
            { name: 'Jack', salary: 1300}
        ]
    }
}

function salarySum(ob) {

    /*Object.keys(ob).forEach(key => {
        console.log(key, ob[key]); // Output: name Alice, age 30
    });*/

    for (const key in ob) {
        //console.log(`${key}: ${ob[key]}`);
        console.log(key, ob[key]); // Output: name Alice, age 30
    }
}

salarySum(company);