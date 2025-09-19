
const myToday = document.querySelector("#today");
const myTomorrow = document.querySelector("#tomorrow");
const myDayAfterTomorrow = document.querySelector("#dayAfterTomorrow");

const myURLForecast = `https://api.openweathermap.org/data/2.5/forecast/daily?cnt=3&lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetchForecast() {
  try {
    const response = await fetch(myURLForecast);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResultsForecast(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResultsForecast(data) {
    myToday.innerHTML = `Today: ${data.list[0].temp.min}&deg:F`
    myTomorrow.innerHTML = `Wednesday: ${data.list[1].temp.min}&deg:F`
    myDayAfterTomorrow.innerHTML = `Thursday: ${data.list[2].temp.min}&deg:F`
}

apiFetchForecast();