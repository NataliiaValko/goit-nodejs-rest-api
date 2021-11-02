const contactsOperation = require('../../models/contacts')
const { sendSuccessToRes, throwErrorId } = require('../../helpers')

const getById = async (req, res) => {
  const { contactId } = req.params
  const result = await contactsOperation.getById(contactId)

  return result ? sendSuccessToRes(res, { result }) : throwErrorId(contactId)
}

module.exports = getById
