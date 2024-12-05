const parentDiv = document.querySelector('#parent');

parentDiv.addEventListener('click', (e) => {
    alert(`Вы нажали на: ${e.target.textContent}`);
})

