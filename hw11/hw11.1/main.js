
const main = document.querySelector('.main');
const table = document.createElement('table');
const tr = document.createElement('tr');

table.appendChild(tr);
for (let i=1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        const newElement = document.createElement('td');
        newElement.innerHTML = i * j;
        table.appendChild(newElement);
    }
    const tr = document.createElement('tr');
    table.appendChild(tr);
}

/*const tableClose = document.createElement('</table>');
table.appendChild(tableClose);*/

main.appendChild(table);
