const contactsOperation = require('../../models/contacts')
const { sendSuccessToRes, throwErrorId } = require('../../helpers')

const removeById = async (req, res) => {
  const { contactId } = req.params
  const result = await contactsOperation.removeById(contactId)

  return result
    ? sendSuccessToRes(res, { message: 'Remove success' })
    : throwErrorId(contactId)
}

module.exports = removeById
