const fs = require('fs/promises')

const contactsDataPath = require('./contactsPath')

const getAll = async () => {
  const data = await fs.readFile(contactsDataPath)
  const contacts = JSON.parse(data)
  return contacts
}

module.exports = getAll
