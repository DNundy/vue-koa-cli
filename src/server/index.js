/*
 * @Author: Nundy
 * @Date: 2018-05-19 08:26:53
 * @Last Modified by: 我不是，我没有，别瞎说~ 这个Bug不是我写的
 * @Last Modified time: 2018-05-26 22:08:36
 */

/****************************************/
const Koa = require('koa')
const router = require('koa-router')()
const serve = require('koa-static')
const logger = require('koa-morgan')
const favicon = require('koa-favicon')
const onerror = require('koa-onerror')
const middleware = require('koa-webpack-middleware')

const webpack = require('webpack')
const webpackCfg = require('../../build/webpack.dev.conf')
const compile = webpack(webpackCfg)

const path = require('path')
const history = require('./config/history')

const ENV_STATUS = process.env.NODE_ENV
const ENV_PORT = require('./config/basic').server_port

const router = require('./router/router')

// 实例应用
const app = new Koa()
onerror(app)

// 数据接口
router.get('/api', router)
app.use(router.routes())

// 静态文件
app.use(history({
  verbose: true
}))
app.use(favicon(path.join(__dirname, 'favicon.ico')))
if (ENV_STATUS === 'development') {
  app.use(middleware.devMiddleware(compile, {
    noInfo: false,
    quiet: false,
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    publicPath: "/",
    stats: {
      colors: true
    }
  }))
  app.use(middleware.hotMiddleware(compile, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }))
} else {
  app.use(serve(path.join(__dirname, 'views')))
}

// 日志服务
app.use(logger('dev'))

// 启动服务
app.listen(ENV_PORT, () => {
  console.info(`服务已经启动，监听端口${ENV_PORT}`)
})

module.exports = app
