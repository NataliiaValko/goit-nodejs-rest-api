const { User } = require('../../models')
const { Conflict } = require('http-errors')
const gravatar = require('gravatar')
const fs = require('fs/promises')
const path = require('path')
const { sendSuccessToRes } = require('../../helpers')
const avatarsDir = path.join(__dirname, '../../public/avatars')

const signUp = async (req, res, next) => {
  const { email, password } = req.body
  const avatarURL = gravatar.url(email)
  const user = await User.findOne({ email })
  if (user) {
    next(new Conflict('Email in use'))
  }

  const newUser = new User({ email, avatarURL })
  newUser.setPassword(password)
  const avatarFolder = path.join(avatarsDir, String(newUser._id))
  await fs.mkdir(avatarFolder)
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
