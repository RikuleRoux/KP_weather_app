
// Define and initialize currentUnit variable
let currentUnit = 'Celsius';

// Function to change background image
function changeBackgroundImage() {
    const backgroundImages = [
        'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662edae776afcc87a962a8cc_pexels-nout-gons-80280-378570.jpg',
        'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662edb27e535323a6e6f80b5_pexels-phil-goulson-1001118-2058911.jpg',
        'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662eabd13480e9da2bc6d603_background1.png'
    ];
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = `url('${backgroundImages[randomIndex]}')`;
}

// Call changeBackgroundImage function initially
changeBackgroundImage();

// Object to map weather condition codes to icons
const iconMap = {
    '1000': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f3480e9da2bb9e8d7_113.png', // Sunny
    '1003': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5ef45e3c7858455d96_116.png', // Partly cloudy
    '1006': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5db3e4f33a5b9f5832_119.png', // Cloudy
    '1009': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5e0b042c52b3ac035f_122.png', // Overcast
    '1030': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5d9c5c5e9eeaf4055b_143.png', // Mist
    '1063': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5d5f4c3853d1890be8_176.png', // Patchy rain possible
    '1066': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5d9c5c5e9eeaf4055b_179.png', // Patchy snow possible
    '1069': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5e3480e9da2bb9e845_182.png', // Patchy sleet possible
    '1072': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5e1887e04770834863_185.png', // Patchy freezing drizzle possible
    '1087': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5e69f13d81f4e254cd_200.png', // Thundery outbreaks possible
    '1114': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5e96448b5ba1e1da78_227.png', // Blowing snow
    '1117': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5eb3e4f33a5b9f5919_230.png', // Blizzard
    '1135': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5ec221d8b5697a26ee_248.png', // Fog
    '1147': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5edba3b48ba6119bfa_260.png', // Freezing fog
    '1150': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5ef6f97fbaec87542d_263.png', // Patchy light drizzle
    '1153': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5ef8ac0adbf88939d3_266.png', // Light drizzle
    '1168': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f0acef96920493001_281.png', // Freezing drizzle
    '1171': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f0b042c52b3ac0375_284.png', // Heavy freezing drizzle
    '1180': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f1887e04770834863_293.png', // Patchy light rain
    '1183': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f2efe8bdddf0dc1b6_296.png', // Light rain
    '1186': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f3480e9da2bb9e8d7_299.png', // Moderate rain at times
    '1189': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f3e4f33a5b9f5832_302.png', // Moderate rain
    '1192': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f0b042c52b3ac0375_305.png', // Heavy rain at times
    '1195': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f337907f2e6c92635_308.png', // Heavy rain
    '1198': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f3f4c3853d1890c92_311.png', // Light freezing rain
    '1201': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f6888e04770834863_314.png', // Moderate or heavy freezing rain
    '1204': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f2efe8bdddf0dc1b6_317.png', // Light sleet
    '1207': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f1887e04770834863_320.png', // Moderate or heavy sleet
    '1210': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f163f23fdaf16ac42_323.png', // Patchy light snow
    '1213': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f3480e9da2bb9e8d7_326.png', // Light snow
    '1216': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f3e4f33a5b9f5832_329.png', // Patchy moderate snow
    '1219': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f9817e0bbcf2a16b0_332.png', // Moderate snow
    '1222': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5fb3e4f33a5b9f5857_335.png', // Patchy heavy snow
    '1225': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f9817e0bbcf2a16b0_338.png', // Heavy snow
    '1237': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f9c5c5e9eeaf4055b_350.png', // Ice pellets
    '1240': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5faeab55128dfbb004_353.png', // Light rain shower
    '1243': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f164b5f8e4dabce33_356.png', // Moderate or heavy rain shower
    '1246': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f6f12f5305e20a387_359.png', // Torrential rain shower
    '1249': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f6f12f5305e20a387_362.png', // Light sleet showers
    '1252': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f7ae5350e2f12639d_365.png', // Moderate or heavy sleet showers
    '1255': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f7ae5350e2f12639d_368.png', // Light snow showers
    '1258': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f7ae5350e2f12639d_371.png', // Moderate or heavy snow showers
    '1261': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f9c5c5e9eeaf4055b_374.png', // Light showers of ice pellets
    '1264': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5faeab55128dfbb004_377.png', // Moderate or heavy showers of ice pellets
    '1273': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f9c5c5e9eeaf4055b_386.png', // Patchy light rain with thunder
    '1276': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5faeab55128dfbb004_389.png', // Moderate or heavy rain with thunder
    '1279': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5f9c5c5e9eeaf4055b_392.png', // Patchy light snow with thunder
    '1282': 'https://uploads-ssl.webflow.com/6033f41cf7c21610a8e93855/662e9d5faeab55128dfbb004_395.png'  // Moderate or heavy snow with thunder
};

// Function to fetch weather data
function getWeather() {
    const apiKey = '9125d754bff44307aa374614242604';
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1`;

    // Show loading spinner
    document.getElementById('loading-spinner').style.display = 'block';

    // Fetch current weather data
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data); // Display current weather
            // Show temperature unit toggle
            document.getElementById('unit-toggle').style.display = 'block';
            // Show refresh button after first API call completes
            document.getElementById('refresh-button').style.display = 'inline-block';
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data. Please try again.');
        })
        .finally(() => {
            // Hide loading spinner when done
            document.getElementById('loading-spinner').style.display = 'none';
        });

    // Fetch hourly forecast data
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            displayHourlyForecast(data.forecast.forecastday[0].hour); // Display hourly forecast
        })
        .catch(error => {
            console.error('Error fetching hourly forecast data:', error);
            alert('Error fetching hourly forecast data. Please try again.');
        });
}

// Function to display current weather
function displayWeather(data) {
    const cityName = data.location.name;
    let temperature = data.current.temp_c;
    if (currentUnit === 'Fahrenheit') {
        temperature = (temperature * 9 / 5) + 32; // Convert to Fahrenheit
    }
    temperature = temperature.toFixed(1); // Round to 1 decimal place
    const description = data.current.condition.text;
    const conditionCode = data.current.condition.code;

    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');

    tempDivInfo.innerHTML = `<p>${temperature}°${currentUnit.charAt(0)}</p>`;
    weatherInfoDiv.innerHTML = `<p>${cityName}</p><p>${description}</p>`;
    weatherIcon.alt = description;
    weatherIcon.style.display = 'block';

    // Update weather icon dynamically based on condition code
    if (iconMap[conditionCode]) {
        weatherIcon.src = iconMap[conditionCode];
    } else {
        // Default icon if no matching icon found
        weatherIcon.src = 'url/to/default-weather-icon.png';
    }
}

// Function to display hourly forecast
function displayHourlyForecast(hourlyData) {
    const hourlyForecastDiv = document.getElementById('hourly-forecast');
    hourlyForecastDiv.innerHTML = '';

    hourlyData.forEach(hour => {
        const hourTime = new Date(hour.time_epoch * 1000).getHours();
        const temperature = hour.temp_c;
        const conditionCode = hour.condition.code;

        const hourlyItemHtml = `
            <div class="hourly-item">
                <span>${hourTime}:00</span>
                <img src="${iconMap[conditionCode] || 'url/to/default-weather-icon.png'}" alt="Hourly Weather Icon">
                <span>${temperature}°C</span>  
            </div>  
        `;
        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });
}

// Function to toggle temperature unit
function toggleUnit() {
    currentUnit = currentUnit === 'Celsius' ? 'Fahrenheit' : 'Celsius';
    getWeather(); // Refresh weather data with new unit
}

// Call getWeather function initially
getWeather();
