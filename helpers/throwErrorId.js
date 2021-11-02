const { NotFound } = require('http-errors')

const throwErrorId = (contactId) => {
  throw new NotFound(`Contact with id '${contactId}' not found`)
}

module.exports = throwErrorId
