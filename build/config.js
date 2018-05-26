/*
 * @Author: Nundy
 * @Date: 2018-05-26 16:14:12
 * @Last Modified by:   我不是，我没有，别瞎说~ 这个Bug不是我写的
 * @Last Modified time: 2018-05-26 16:14:12
 */

var path = require('path')
module.exports = {
  build: {
    index: path.resolve(__dirname, '../src/server/views/index.html'),
    assetsRoot: path.resolve(__dirname, '../src/server/views/'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    cssSourceMap: false
  }
}
