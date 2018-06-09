const UserModel = require('../models/user')

const UserCtrl = {
  info: {
    get: () => {
      console.log('ctrl -> ')
      return UserModel.info.get()
    }
  }
}

console.log(UserModel.info.get)

module.exports = UserCtrl
