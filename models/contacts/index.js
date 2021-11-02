const getAll = require('./getAll')
const getById = require('./getById')
const addContact = require('./addContact')
const removeById = require('./removeById')
const updateById = require('./updateById')
const handleIncorrectId = require('./handleIncorrectId')

module.exports = {
  getAll,
  getById,
  addContact,
  removeById,
  updateById,
  handleIncorrectId,
}
