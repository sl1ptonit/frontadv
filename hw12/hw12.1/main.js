const btnUrl = document.querySelector('#setUrl');
const btnRedirect = document.querySelector('#btnRedirect');

let url = '';
btnUrl.addEventListener('click', (e) => {
    url  = prompt('Enter a valid URL');
})

btnRedirect.addEventListener('click', (e) => {
    if (url !== '' && url !== null) {
        window.location.href = url;
    } else {
        alert('Not valid URL');
    }
})

