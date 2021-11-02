const { getBadRequest } = require('../helpers')

const validation = (schema) => {
  return async (req, res, next) => {
    const { error } = schema.validate(req.body)
    if (error) {
      next(getBadRequest(res, error, 400))
    }
    next()
  }
}

module.exports = validation
