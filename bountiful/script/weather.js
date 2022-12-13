const currentTemp = document.querySelector('#current-temp');
const weatherhumidity = document.querySelector('#humidity');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('.describe')





const link = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=70f32d8e36945d218801df44e122e1c2&units=imperial"
const link2 = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&cnt=3&appid=70f32d8e36945d218801df44e122e1c2&units=imperial"

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data)
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
            displayResults2(data)
            console.log(data); 
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
    description.textContent = desc;
    

}

function displayResults2(weatherData2) {
    weatherhumidity.innerHTML = `<strong>${weatherData2.list[0].main.humidity.toFixed(0)}</strong>`;
    const desc = weatherData2.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    description.textContent = desc;

    

}

apiFetch(link);
apiFetch2(link2);
