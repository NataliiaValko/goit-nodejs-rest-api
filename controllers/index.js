const contacts = require('./contacts')
const {
  logIn,
  signUp,
  updateSubscription,
  logOut,
  getDataCurrentUser,
  updateAvatar,
  verify,
} = require('./auth')

module.exports = {
  contacts,
  verify,
  signUp,
  logIn,
  updateSubscription,
  updateAvatar,
  logOut,
  getDataCurrentUser,
}
