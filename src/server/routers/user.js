const UserCtrl = require('../controllers/user')

const UserRouter = {
  info: {
    get: ctx => {
      console.log('router -> ')
      ctx.response.body = UserCtrl.info.get
    }
  }
}

module.exports = {
  'GET /user/userinfo': UserRouter.info.get
}
