const contactsOperation = require('../../models/contacts')
const { sendSuccessToRes, throwErrorId } = require('../../helpers')

const updateById = async (req, res) => {
  const { contactId } = req.params
  const result = await contactsOperation.updateById(contactId, req.body)
  return result ? sendSuccessToRes(res, { result }) : throwErrorId(contactId)
}

module.exports = updateById
