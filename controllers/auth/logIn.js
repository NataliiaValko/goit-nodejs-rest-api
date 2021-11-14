const { User } = require('../../models')
const jwt = require('jsonwebtoken')
const { getBadRequest } = require('../../helpers')
const { sendSuccessToRes } = require('../../helpers')

require('dotenv').config()
const { SECRET_KEY } = process.env

const logIn = async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (!user || !user.comparePassword(password)) {
    next(getBadRequest({ message: 'Email or password is wrong' }))
  }

  const payload = { id: user._id }
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })

  await User.findByIdAndUpdate(user._id, { token })
  sendSuccessToRes(res, { token })
}

module.exports = logIn
