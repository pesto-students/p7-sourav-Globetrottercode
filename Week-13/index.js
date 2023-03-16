const express = require("express");
const app = express();
const { getWeather } = require("./modules/weather");
const { getForecast } = require("./modules/forecast");
const port = 3000;
require("dotenv").config();

let info = {
  Count_Forecast: "Every 3 hour forecast",
  Forecast_available: "max 5 days",
  Max_count_accepted: "40",
  Reading:
    "for count = 1 - one 3 hour forecast, for a whole day every 3 hour forecast count = 8 ",
};

app.get("/", (req, res) => {
  res.status(200).json({ status: "SUCCESS", info: info });
});

app.get("/:city", async (req, res) => {
  const { city } = req.params;
  const data = await getWeather(city);
  res.status(200).json({ status: "SUCCESS", info: data });
});

app.get("/:city/:count", async (req, res) => {
  const { city, count } = req.params;
  const data = await getForecast(city, count);
  res.status(200).json({ status: "SUCCESS", info: data });
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server connected at port 3000`);
});
