// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windchill = document.querySelector('#windchill-temp');

const link = "https://api.openweathermap.org/data/2.5/weather?q=Yelm&appid=70f32d8e36945d218801df44e122e1c2&units=imperial"


async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data)
            displayWindchill(data)
            console.log(data); // this is for testing the call
            // displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

}

function displayWindchill(weatherData) {
    const windspeed = weatherData.wind.speed;
    const airTemp = weatherData.main.temp;
    let x = Math.pow(windspeed, 0.16);
// f = 35.74+0.6215*t-35.75*x+0.4275*t*x; 
// f is the wind chill factor in Fahrenheit
//t is the air average temperature in Fahrenheit
// s is the wind speed in miles per hour
    let chillwind = 35.74+0.6215*airTemp-35.75*x+0.4275*airTemp*x;
    
    windchill.innerHTML = `${chillwind.toFixed(0)}`;

}

apiFetch(link);
