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
            {
                name : 'Peter',
                salary: 2000
            },
            {
                name: 'Alex',
                salary: 1800
            }
        ],
        internals:[
            {
                name: 'Jack',
                salary: 1300
            }
        ]
    }
}

function sumSalary(item) {

    let sum = 0;

    if (Array.isArray(item)) {
        item.forEach(person => {
            sum += person.salary;
        })
    }

    if (typeof item === 'object' && !Array.isArray(item)) {
        Object.keys(item).forEach(key => {
            sum += sumSalary(item[key]);
        })
    }

    return sum;
}

console.log(sumSalary(company));