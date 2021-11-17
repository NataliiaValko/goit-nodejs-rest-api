const { User } = require('../../models')
const { Conflict } = require('http-errors')
const { sendSuccessToRes } = require('../../helpers')

const signUp = async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    next(new Conflict('Email in use'))
  }

  const newUser = new User({ email })
  newUser.setPassword(password)
  await newUser.save()
  sendSuccessToRes(
    res,
    {
      user: {
        email,
        subscription: 'starter',
      },
    },
    201
  )
}

module.exports = signUp
