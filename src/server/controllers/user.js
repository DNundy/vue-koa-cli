const UserModel = require('../models/user')

const UserCtrl = {
  info: {
    get: (ctx) => {
      UserModel.info.get(ctx)
      console.log(UserModel.info.get(ctx))
    }
  }
}

module.exports = UserCtrl
