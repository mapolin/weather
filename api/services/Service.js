const axios = require('axios');
const queryString = require('query-string');

class Service {
  static get Status () {
    return {
      '200': 'OK',
      '404': 'Not Found',
      '500': 'Internal Error'
    }
  };

  request (url = '', params = {}) {
    return axios.get(url, params);
  }

  buildUrl (route = '', params = {}) {
    return `${this.url}${route}?${queryString.stringify(params)}`;
  }
}

module.exports = Service;