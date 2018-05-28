const user = {
  index: ctx => {
    ctx.response.body = `test`
  }
}

module.exports = {
  'GET /user/userinfo': user.index
}
