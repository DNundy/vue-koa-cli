const fs = require('fs')

const addMapping = (router, mapping) => {
  let path = '/api'
  for (var url in mapping) {
    if (url.startsWith('GET ')) {
      path += url.substring(4)
      router.get(path, mapping[url])
    } else if (url.startsWith('POST ')) {
      path += url.substring(5)
      router.post(path, mapping[url])
    } else if (url.startsWith('PUT ')) {
      path += url.substring(4)
      router.put(path, mapping[url])
    } else if (url.startsWith('DELETE ')) {
      path += url.substring(7)
      router.del(path, mapping[url])
    }
  }
}

const addRouters = (router, dir) => {
  let __PUBLIC__ = __dirname
  fs.readdirSync(__PUBLIC__ + '/' + dir).filter((f) => {
    return f.endsWith('.js')
  }).forEach((f) => {
    let mapping = require(__PUBLIC__ + '/' + dir + '/' + f)
    addMapping(router, mapping)
  })
}

module.exports = (dir) => {
  let controllersDir = dir || 'routers'
  let router = require('koa-router')()
  addRouters(router, controllersDir)
  return router.routes()
}
