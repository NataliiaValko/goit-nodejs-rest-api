const contactsOperation = require('../../models/contacts')
const { sendSuccessToRes, sendErrorIdToRes } = require('../../helpers')

const updateById = async (req, res) => {
  const { contactId } = req.params
  const result = await contactsOperation.updateById(contactId, req.body)
  return result
    ? sendSuccessToRes(res, { result })
    : sendErrorIdToRes(contactId)
}

module.exports = updateById
