const getAll = require('./getAll')
const updateContacts = require('./updateContacts')
const handleIncorrectId = require('./handleIncorrectId')

const updateById = async (id, { name, email, phone }) => {
  const contacts = await getAll()
  const index = contacts.findIndex((contact) => contact.id === id)
  if (index === -1) {
    return handleIncorrectId()
  }
  contacts[index] = { name, email, phone, id }
  await updateContacts(contacts)
  return contacts[index]
}

module.exports = updateById
