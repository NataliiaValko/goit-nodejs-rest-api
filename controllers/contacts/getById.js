const contactsOperation = require('../../models/contacts')
const { sendSuccessToRes, sendErrorIdToRes } = require('../../helpers')

const getById = async (req, res) => {
  const { contactId } = req.params
  const result = await contactsOperation.getById(contactId)

  return result
    ? sendSuccessToRes(res, { result })
    : sendErrorIdToRes(contactId)
}

module.exports = getById
