const config = require('../../config');
const Service = require('../Service');

class Weather extends Service {
  constructor () {
    super(...arguments);
    this.url = 'https://api.openweathermap.org/data/2.5/';
  }

  buildUrl (route = '', params = {}) {
    return super.buildUrl(
      route,
      Object.assign(params, {
        appid: config.WEATHER_API_KEY
      })
    )
  }
}

module.exports = Weather;