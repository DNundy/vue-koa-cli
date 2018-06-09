const mysql = require('mysql')

const pool = mysql.createPool({
  host: 'localhost', // MySQL所在服务器IP
  user: 'root', // 用户名
  password: '', // 密码
  database: 'trading', // 数据库名称
  port: 3306 // 数据库端口号
})

const query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = query
