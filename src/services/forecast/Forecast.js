import Service from '../Service';

class Forecast extends Service {
  url = '/forecast';

  request (params = {}) {
    return super.request(this.url, params)
  }
}

export { Forecast };
export default Forecast;