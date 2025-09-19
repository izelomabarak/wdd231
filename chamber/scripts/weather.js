const myGraphic = document.querySelector("#graphic");
const myTemperature = document.querySelector("#temperature");
const myDescription = document.querySelector("#description");
const myTemperatureHigh = document.querySelector("#temperatureHigh");
const myTemperatureLow = document.querySelector("#temperatureLow");
const myHumidity = document.querySelector("#humidity");
const mySunrise = document.querySelector("#sunrise");
const mySunset = document.querySelector("#sunset");

const myKey = "2330df0e341dd08e14a87b75e8bedcdf"
const myLat = "44.32"
const myLong = "-76.58"

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResults(data) {
    console.log('hello')
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('SRC', iconsrc)
    myGraphic.setAttribute('alt', data.weather[0].description)
    myTemperature.innerHTML = `${data.main.temp}&deg:F`
    myDescription.innerHTML = data.weather[0].description
    myTemperatureHigh.innerHTML = `High: ${data.main.temp_max}&deg:F`
    myTemperatureLow.innerHTML = `Low: ${data.main.temp_min}&deg:F`
    myHumidity.innerHTML = `Humidity: ${data.main.humidity}%`
    mySunrise.innerHTML = `Sunrise: ${formatTime(data.sys.sunrise)}`
    mySunset.innerHTML = `Sunset: ${formatTime(data.sys.sunset)}`
}

function formatTime(time) {
  const date = new Date(time * 1000);
  return date.toLocaleTimeString('en-CA', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}

apiFetch();