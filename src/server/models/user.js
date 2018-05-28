const user = require('../config/mysql')

module.exports = user.defineModel('pets', {
  ownerId: user.ID,
  name: user.STRING(100),
  gender: user.BOOLEAN,
  birth: user.STRING(10)
})
