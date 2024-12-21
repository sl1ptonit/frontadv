
const contactForm = document.querySelector("#contactForm");

const contactInfo = {};
const phoneRegex = /^\+380\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm() {
    let isValid = true;

    if (!contactInfo.name.trim()) {
        document.querySelector('#nameError').innerHTML = 'Name required!';
        isValid = false;
    }

    if (contactInfo.message.length < 5) {
        document.querySelector('#messageError').innerHTML = 'Message is too short!';
        isValid = false;
    }

    if (!phoneRegex.test(contactInfo.phone)) {
        document.querySelector('#phoneError').innerHTML = 'Phone is not valid!';
        isValid = false;
    }

    if (!emailRegex.test(contactInfo.email)) {
        document.querySelector('#emailError').innerHTML = 'Email is not valid!';
        isValid = false;
    }

    return isValid;
}

function clearErrors() {
    document.querySelector('#nameError').innerHTML = '';
    document.querySelector('#messageError').innerHTML = '';
    document.querySelector('#phoneError').innerHTML = '';
    document.querySelector('#emailError').innerHTML = '';
}

contactForm.addEventListener('submit', (e) => {

    e.preventDefault();

    //Clear error
    clearErrors();

    //Get data
    contactInfo.name = document.querySelector('#name').value;
    contactInfo.message = document.querySelector('#message').value;
    contactInfo.phone = document.querySelector('#phoneNumber').value;
    contactInfo.email = document.querySelector('#email').value;

    if (validateForm()) {
        console.log('form', contactInfo);
    } else {
        console.log('Data is not valid');
    }
});