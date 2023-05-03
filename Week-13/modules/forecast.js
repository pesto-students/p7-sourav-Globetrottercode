const timestamp = require("unix-timestamp");

async function getForecast(city, count) {
  if (count > 40) {
    count = 40;
  }
  const res = await fetch(`
    https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=${count}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
  const data = await res.json(); // getting response data in data
  //Extracting data
  const list = data.list;
  const forecastData = {};
  forecastData.city = data.city;
  forecastData.forecast = [];
  for (let i = 0; i < list.length; i++) {
    let current = {};
    current.day = list[i].dt;
    current.day = timestamp.toDate(current.day).toString();
    current.temparature = `${list[i].main.temp}°C`;
    (current.min_temp = `${list[i].main.temp_min}°C`),
      (current.max_temp = `${list[i].main.temp_max}°C`),
      (current.conditions = list[i].weather[0].description);
    forecastData.forecast.push(current);
  }
  return forecastData;
}

module.exports = { getForecast };
