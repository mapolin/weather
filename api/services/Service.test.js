const Service = require('./Service');
const mockAxios = require('axios');

class ExtendedService extends Service {
  constructor() {
    super()
    this.url = 'http://test.url'
  }
}

describe('sevice class', () => {
  let ServiceInstance;
  let ExtendedServiceInstance;

  mockAxios.get.mockImplementationOnce(() => {
    return Promise.resolve(true);
  })

  beforeEach(() => {
    ServiceInstance = new Service();
    ExtendedServiceInstance = new ExtendedService();
  });

  describe('static status codes', () => {
    it('provide status 200 code message', () => {
      expect(Service.Status['200']).toEqual('OK');
    });
    it('provide status 404 code message', () => {
      expect(Service.Status['404']).toEqual('Not Found');
    });
    it('provide status 500 code message', () => {
      expect(Service.Status['500']).toEqual('Internal Error');
    });
  });
  
  it('should provide a generic url building method for classes that inherit it', () => {
    expect(ExtendedServiceInstance.buildUrl('/route', { param: 'test' })).toEqual('http://test.url/route?param=test')
  });

  it('should provide a generic request method that returns a promise', async () => {
    const response = ServiceInstance.request();
    expect(response).toBeInstanceOf(Promise);
    expect(await response).toEqual(true);
  });
})