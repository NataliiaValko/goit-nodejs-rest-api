const { User } = require('../../models')
const { NotFound } = require('http-errors')
const { sendSuccessToRes } = require('../../helpers')

const verify = async (req, res, next) => {
  const { verificationToken } = req.params
  const user = await User.findOne({ verificationToken })
  if (!user) {
    return next(new NotFound('User not found'))
  }

  await User.findByIdAndUpdate(user._id, {
    verificationToken: null,
    verify: true,
  })

  return user
    ? sendSuccessToRes(res, { message: 'Verification successful' })
    : next(new NotFound('User not found'))
}

module.exports = verify
