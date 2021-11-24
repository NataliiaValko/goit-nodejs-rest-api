const contacts = require('./contacts')
const {
  logIn,
  signUp,
  updateSubscription,
  logOut,
  getDataCurrentUser,
  updateAvatar,
} = require('./auth')

module.exports = {
  contacts,
  signUp,
  logIn,
  updateSubscription,
  updateAvatar,
  logOut,
  getDataCurrentUser,
}
