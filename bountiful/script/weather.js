//Temp
const currentTemp = document.querySelector('#current-temp');
const DaytwoTemp = document.querySelector('#secondndtemp');
const DayThreeTemp = document.querySelector('#thirdtemp');

//Humidity
const weatherhumidity = document.querySelector('#humidity');
const weatherhumidity2 = document.querySelector('#humidity-second');
const weatherhumidity3 = document.querySelector('#humidity-third');

//Weather Icon
const weatherIcon = document.querySelector('#weather-icon');
const weatherIcon2 = document.querySelector('#weather-icon-second');
const weatherIcon3 = document.querySelector('#weather-icon-third');

//Description
const description = document.querySelector('#describe');
const description2 = document.querySelector('#describe-second');
const description3 = document.querySelector('#describe-third');

//Links to openweather.org
const link = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=b5cf513fee5b29c16ccd6349eff084ae&cnt=12&units=imperial"
const link2 = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=70f32d8e36945d218801df44e122e1c2&units=imperial"
//----------------

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayDayTwo(data)
            displayDayThree(data)
            console.log(data); 
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiFetch2(url2) {
    try {
        const response = await fetch(url2);
        if (response.ok) {
            const data = await response.json();
            displayDayOne(data)
            console.log(data); 
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
//----------------------

function displayDayOne(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    weatherhumidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    description.textContent = desc;

}

function displayDayTwo(weatherData) {
    DaytwoTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;
    weatherhumidity2.innerHTML = `<strong>${weatherData.list[0].main.humidity.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;

    weatherIcon2.setAttribute('src', iconsrc);
    weatherIcon2.setAttribute('alt', desc);
    description2.textContent = desc;

}

function displayDayThree(weatherData) {
    DayThreeTemp.innerHTML = `<strong>${weatherData.list[11].main.temp.toFixed(0)}</strong>`;
    weatherhumidity3.innerHTML = `<strong>${weatherData.list[11].main.humidity.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[11].weather[0].icon}.png`;
    const desc = weatherData.list[11].weather[0].description;

    weatherIcon3.setAttribute('src', iconsrc);
    weatherIcon3.setAttribute('alt', desc);
    description3.textContent = desc;

}

apiFetch(link);
apiFetch2(link2);


