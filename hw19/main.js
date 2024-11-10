
const apiKey = '31e087a0129726b3941ddd9ac0a049b4';
const lat = 50.450001;
const lon = 30.523333;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

getWeather();

function getWeather() {
    fetch(apiUrl).then((response) => {
        return response.json();
    }).then((data) => {
        renderWidget(data);
    }).catch((error) => {
        console.log(error);
    });
}

function renderWidget(data) {
    console.log(data);

    let container = document.querySelector("#weatherWidget");
    let html = `
                <h2>Weather in ${data.name}</h2>
                <p><strong>Location:</strong> ${data.coord.lat}, ${data.coord.lon}</p>
                <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                <p><strong>Feels Like:</strong> ${data.main.feels_like} °C</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Pressure:</strong> ${data.main.pressure} hPa</p>
                <p><strong>Weather:</strong> ${data.weather[0].main} - ${data.weather[0].description}</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                <p><strong>Cloudiness:</strong> ${data.clouds.all}%</p>
                <p><strong>Visibility:</strong> ${data.visibility} m</p>
            `;
    container.innerHTML = html;
}


document.querySelector("#refresh").addEventListener("click", () => {
    getWeather();
});


