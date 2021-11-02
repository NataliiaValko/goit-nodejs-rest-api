const getBadRequest = (res, error, status) => {
  return res.status(status).json({
    status: 'error',
    code: status,
    message: error.message,
  })
}

module.exports = getBadRequest
