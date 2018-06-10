const UserCtrl = require('../controllers/user')

const UserRouter = {
  info: {
    get: ctx => UserCtrl.info.get(ctx)
  }
}

module.exports = {
  'GET /user/userinfo': UserRouter.info.get
}
