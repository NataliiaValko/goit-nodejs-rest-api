const getAll = require('./getAll')
const handleIncorrectId = require('./handleIncorrectId')

const getById = async (id) => {
  const contacts = await getAll()
  const result = contacts.find(
    (contact) => contact.id.toString() === id.toString()
  )
  if (!result) {
    return handleIncorrectId()
  }

  return result
}

module.exports = getById
