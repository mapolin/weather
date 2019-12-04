const axios = require('axios');
const queryString = require('query-string');
const cache = require('../cache');

class Service {
  static get Status () {
    return {
      '200': 'OK',
      '404': 'Not Found',
      '500': 'Internal Error'
    }
  };

  request (url = '', params = {}) {
    return cache.handle(url, async () => {
      const response = await axios.get(url, params);
      return response.data;
    });
  }

  buildUrl (route = '', params = {}) {
    return `${this.url}${route}?${queryString.stringify(params)}`;
  }
}

module.exports = Service;