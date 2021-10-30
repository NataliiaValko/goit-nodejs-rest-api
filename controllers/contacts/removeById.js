const contactsOperation = require('../../models/contacts')
const { sendSuccessToRes, sendErrorIdToRes } = require('../../helpers')

const removeById = async (req, res) => {
  const { contactId } = req.params
  const result = await contactsOperation.removeById(contactId)

  return result
    ? sendSuccessToRes(res, { message: 'Remove success' })
    : sendErrorIdToRes(contactId)
}

module.exports = removeById
