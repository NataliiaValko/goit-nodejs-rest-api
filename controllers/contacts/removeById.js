const { Contact } = require('../../models')
const { sendSuccessToRes, getNotFoundId } = require('../../helpers')

const removeById = async (req, res, next) => {
  const { contactId } = req.params
  const result = await Contact.findByIdAndRemove(contactId)

  return result
    ? sendSuccessToRes(res, { message: 'Remove success' })
    : next(getNotFoundId(contactId))
}

module.exports = removeById
