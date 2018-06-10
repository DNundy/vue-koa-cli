const history = require('connect-history-api-fallback')

module.exports = options => {
  const middleware = history(options)
  const noop = () => {
  }

  return async (ctx, next) => {
    middleware(ctx, null, noop)
    await next()
  }
}

/*
    调试时控制台有时会输出如下格式的提示，是因为该插件所导致的
    'Not rewriting' + method + url + 'because ...'
    详细解释见：
    https://segmentfault.com/a/1190000007890379
*/
