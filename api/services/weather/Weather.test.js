const Weather = require('./Weather');
const config = require('../../config');
const testUrls = {
  forecast: `https://api.openweathermap.org/data/2.5/forecast?appid=${config.WEATHER_API_KEY}&id=1`,
  forecastMultiParam: `https://api.openweathermap.org/data/2.5/forecast?appid=${config.WEATHER_API_KEY}&id=test&test=id`,
  default: `https://api.openweathermap.org/data/2.5/?appid=${config.WEATHER_API_KEY}`
}

describe('weather class', () => {
  let WeatherInstance;
  beforeEach(() => {
    WeatherInstance = new Weather();
  });

  it('should build a correct request url', () => {
    expect(WeatherInstance.buildUrl('forecast', { id: 1 })).toEqual(testUrls.forecast);
    expect(WeatherInstance.buildUrl('forecast', { id: 'test', test: 'id' })).toEqual(testUrls.forecastMultiParam);
  });

  it('should return the default url if there are no parameters passed', () => {
    expect(WeatherInstance.buildUrl()).toEqual(testUrls.default);
  });
})