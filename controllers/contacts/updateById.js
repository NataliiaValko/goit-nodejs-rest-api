const contactsOperation = require('../../models/contacts')
const { sendSuccessToRes, getNotFoundId } = require('../../helpers')

const updateById = async (req, res, next) => {
  const { contactId } = req.params
  const result = await contactsOperation.updateById(contactId, req.body)
  return result
    ? sendSuccessToRes(res, { result })
    : next(getNotFoundId(contactId))
}

module.exports = updateById
