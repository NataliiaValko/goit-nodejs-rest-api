const { User } = require('../../models')
const { getNotFoundId } = require('http-errors')
const { sendSuccessToRes } = require('../../helpers')

const updateSubscription = async (req, res, next) => {
  const result = await User.findByIdAndUpdate(
    req.user._id,
    { subscription: req.body.subscription },
    { new: true }
  )

  return result ? sendSuccessToRes(res, { result }) : next(getNotFoundId(_id))
}

module.exports = updateSubscription
