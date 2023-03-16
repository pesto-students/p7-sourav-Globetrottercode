async function getWeather(city) {
  if (city) {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );
    let data = await res.json();
    if (data.message !== "city not found") {
      const weatherData = {
        location: city,
        temparature: `${data.main.temp}°C`,
        min_temp: `${data.main.temp_min}°C`,
        max_temp: `${data.main.temp_max}°C`,
        conditions: data.weather[0].description,
      };
      return weatherData;
    }
  }
}
getWeather();
module.exports = { getWeather };
