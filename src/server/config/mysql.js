const Sequelize = require('sequelize')

const config = {
  host: 'localhost', // MySQL所在服务器IP
  user: 'root', // 用户名
  password: '', // 密码
  database: 'trading', // 数据库名称
  port: 3306 // 数据库端口号
}

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})

module.exports = sequelize
