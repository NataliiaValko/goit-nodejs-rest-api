const { sendErrorReqToRes } = require('../helpers')

const validation = (schema) => {
  return async (req, res, next) => {
    const { error } = schema.validate(req.body)
    if (error) {
      sendErrorReqToRes(res, error)
      return
    }

    next()
  }
}

module.exports = validation
