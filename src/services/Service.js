import { API_URL } from '../config';

class Service {
  API_URL = API_URL;
  defaults = {
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  }
  request (url, params = {}) {
    if (url) {
      if (url.startsWith('/')) url = url.substr(1, url.length);
      return fetch(`${this.API_URL}/${url}`, Object.assign(this.defaults, params));
    } else {
      return Promise.reject('No url given');
    }
  }
}

export { Service };
export default Service;