/*
 * @Author: Nundy
 * @Date: 2018-05-26 11:07:11
 * @Last Modified by: 我不是，我没有，别瞎说~ 这个Bug不是我写的
 * @Last Modified time: 2018-05-26 16:13:27
 */

// node 命令行loading效果
var ora = require('ora')
// 用来删除文件和文件夹
var rm = require('rimraf')
// 改变命令行颜色
var chalk = require('chalk')
// webpack
var webpack = require('webpack')
// node 内置path模块
var path = require('path')
// 基础配置
var config = require('./config')
// 生成配置
var webpackConfig = require('./webpack.prod.conf')

// 启动loading
var spinner = ora('  Build Start...\n\n')
spinner.start()

// 删除之前输出的文件及文件夹
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err) => {
    // 结束loading
    spinner.stop()
    if (err) throw err
    console.log(chalk.cyan.bold('\n\n  Build Complete.\n'))
  })
})

/*
  [copy - webpack - plugin] WARNING - unable to locate
  该警告表示输出的目的文件夹不存在，会自动生成，请忽略！
*/
