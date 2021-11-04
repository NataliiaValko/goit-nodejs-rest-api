const fs = require('fs/promises')

const contactsDataPath = require('./contactsPath')

const getAll = async () => {
  const data = await fs.readFile(contactsDataPath)
  return JSON.parse(data)
}

module.exports = getAll
