const { Contact } = require('../../models')
const { sendSuccessToRes } = require('../../helpers')

const getAll = async (req, res) => {
  const { page, limit } = req.query
  const { _id } = req.user
  const skip = (page - 1) * limit
  const result = await Contact.find(
    { owner: _id },
    '_id name email phone favorite owner',
    { skip, limit: +limit }
  ).populate('owner', '_id email')

  sendSuccessToRes(res, { result })
}

module.exports = getAll
