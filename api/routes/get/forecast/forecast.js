const ForecastService = require('../../../services/weather/forecast/Forecast');

const Forecast = new ForecastService();

const city = async () => {
  return await Forecast.city();
};

module.exports = {
  city
};