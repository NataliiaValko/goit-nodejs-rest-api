const contactsOperation = require('../../models/contacts')
const { sendSuccessToRes } = require('../../helpers')

const addContact = async (req, res) => {
  const result = await contactsOperation.addContact(req.body)

  sendSuccessToRes(res, { result }, 201)
}

module.exports = addContact
