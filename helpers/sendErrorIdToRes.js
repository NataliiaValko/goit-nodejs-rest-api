const { NotFound } = require('http-errors')

const sendErrorIdRes = (contactId) => {
  throw new NotFound(`Contact with id '${contactId}' not found`)
}

module.exports = sendErrorIdRes
