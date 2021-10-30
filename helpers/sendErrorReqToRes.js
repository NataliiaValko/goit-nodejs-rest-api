// const { BadRequest } = require('http-errors')

const sendErrorReqToRes = (res, error) => {
  return res.status(400).json({
    status: 'error',
    code: 400,
    message: error.message,
  })
}

module.exports = sendErrorReqToRes