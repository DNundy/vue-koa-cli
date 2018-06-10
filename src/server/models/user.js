const _connect = require('../config/mysql')

const UserModel = {
  info: {
    get: async (ctx) => {
      let sql = 'select * from trading_goods'
      let data = await _connect(sql)
      return data
    }
  }
}
module.exports = UserModel
