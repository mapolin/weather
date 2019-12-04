const NodeCache = require('node-cache');
const _cache = new NodeCache({
  stdTTL: 30 * 60, // 30 minutes
});

const handle = async (request, fn, cache = _cache) => {
  const existing = cache.get(request);
  if (existing) {
    console.log('Request hit cache: ', request);
    return existing;
  } else {
    console.log('Saving request to cache: ', request);
    const response = await fn();
    cache.set(request, response);
    return response;
  }
};

module.exports = {
  cache: _cache,
  handle,
};