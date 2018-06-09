const _connect = require('../config/mysql')

const UserModel = {
  info: {
    get: async () => {
      let sql = 'select * from trading_goods'
      let dataList = await _connect(sql)
      return dataList
    }
  }
}
module.exports = UserModel
