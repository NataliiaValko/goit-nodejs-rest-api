const contactsOperation = require('../../models/contacts')
const { sendSuccessToRes } = require('../../helpers')

const getAll = async (_, res) => {
  const result = await contactsOperation.getAll()

  sendSuccessToRes(res, { result })
}

module.exports = getAll
