const Weather = require('../Weather');

class Forecast extends Weather {
  // 727011 is the id of Sofia
  async city (id = '727011') {
    const response = await this.request(this.buildUrl('forecast', { id }));
    return response;
  }
}

module.exports = Forecast;