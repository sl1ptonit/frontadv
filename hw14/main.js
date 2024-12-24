const images = [
    { id: 1, name: 'Image 1', description: 'The sun is shining brightly', src: './images/img1.jpeg'},
    { id: 2, name: 'Image 2', description: 'She loves to read books', src: './images/img2.jpeg'},
    { id: 3, name: 'Image 3', description: 'They are playing soccer outside', src: './images/img3.jpeg'},
    { id: 4, name: 'Image 4', description: 'He drinks coffee every morning', src: './images/img4.jpeg'},
];

function renderSlider(image) {

    const sliderContainer = document.querySelector('#slider');
    const liElement = document.createElement('li');
    sliderContainer.innerHTML = '';

    let prevClass = (image.id === 1) ? 'disabled' : '';
    let nextClass = (image.id === images.length) ? 'disabled' : '';

    let nextId = image.id + 1;
    let prevId = image.id - 1;

    liElement.innerHTML = `
        <div class='imageCard'>
            <img src=${image.src} alt=${image.id} height="150" weight="150" />
            <div class='imageInfo'>
                <h3>${image.name}</h3>
                <p>${image.description}</p>
                <button class="${prevClass}" data-id="${prevId}">Prev</button>
                <button class="${nextClass}" data-id="${nextId}">Next</button>
            </div>
        </div>`;
    sliderContainer.appendChild(liElement);

    images.forEach(image => {
        const pointElement = document.createElement('img');
        pointElement.dataset.id = image.id;
        pointElement.src = './images/point.png';
        pointElement.className = 'point';
        sliderContainer.appendChild(pointElement);
    });
}

function findImageById(imageId) {
    const image = images.find(image => image.id === imageId);
    renderSlider(image);
}

document.querySelector('#slider').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.classList.contains('point') ) {
        const imageId = +e.target.getAttribute('data-id');
        findImageById(imageId);
    }
})

//Main
findImageById(1);