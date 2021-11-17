const contacts = require('./contacts')
const {
  logIn,
  signUp,
  updateSubscription,
  logOut,
  getDataCurrentUser,
} = require('./auth')

module.exports = {
  contacts,
  signUp,
  logIn,
  updateSubscription,
  logOut,
  getDataCurrentUser,
}
