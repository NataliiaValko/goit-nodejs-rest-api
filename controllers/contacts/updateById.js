const { Contact } = require('../../models/contacts')
const { sendSuccessToRes, getNotFoundId } = require('../../helpers')

const updateById = async (req, res, next) => {
  const { contactId } = req.params
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  })
  return result
    ? sendSuccessToRes(res, { result })
    : next(getNotFoundId(contactId))
}

module.exports = updateById
