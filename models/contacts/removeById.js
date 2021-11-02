const getAll = require('./getAll')
const updateContacts = require('./updateContacts')
const handleIncorrectId = require('./handleIncorrectId')

const removeById = async (id) => {
  const contacts = await getAll()
  const index = contacts.findIndex((contact) => contact.id === id)
  if (index === -1) {
    return handleIncorrectId()
  }
  const removeContact = contacts.splice(index, 1)
  await updateContacts(contacts)
  return removeContact
}

module.exports = removeById
