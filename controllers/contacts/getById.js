const { Contact } = require('../../models/contacts')
const { sendSuccessToRes, getNotFoundId } = require('../../helpers')

const getById = async (req, res, next) => {
  const { contactId } = req.params
  const result = await Contact.findById(contactId)

  return result
    ? sendSuccessToRes(res, { result })
    : next(getNotFoundId(contactId))
}

module.exports = getById
