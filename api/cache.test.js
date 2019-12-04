const NodeCache = require('node-cache');
const { handle } = require('./cache');

// setup test cache with TTL of 5 seconds
const cache = new NodeCache({ ttl: 5 });
const asyncFn = () => Promise.resolve('test');
const asyncFn2 = () => Promise.resolve('new-test');

describe('the caching function should always return a response', () => {
  beforeEach(() => {
    // clear the cache before each test
    cache.close();
  });

  it('should cache and return the data', async () => {
    const response = await handle('test-url', asyncFn, cache);
    expect(response).toEqual('test');
    expect(cache.get('test-url')).toEqual('test')
  });

  it('should return the response from the cache, rather then the one from the server', async () => {
    const response = await handle('test-url', asyncFn, cache);
    const response2 = await handle('test-url', asyncFn2, cache);
    expect(response2).toEqual('test');
  });
});