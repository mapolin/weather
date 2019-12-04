const Weather = require('../Weather');
const Forecast = require('./Forecast');

const mockAxios = require('axios');
const forecastResponse = require('../../../../__fixtures__/forecast.response');

describe('Forecast class', () => {
  mockAxios.get.mockImplementationOnce(() => {
    return Promise.resolve({ data: forecastResponse });
  })

  let ForecastInstance;
  beforeEach(() => {
    ForecastInstance = new Forecast();
  });

  it('should inherit the Weather class', () => {
    expect(ForecastInstance).toBeInstanceOf(Weather);    
  });

  it('should implement a method "city" which returns a forecast for a city', async () => {
    const response = await ForecastInstance.city();
    console.log('TEST:', response)
    expect(response).toEqual(forecastResponse);
  });
});