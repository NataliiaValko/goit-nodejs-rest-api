const { Contact } = require('../../models/contacts')
const {
  sendSuccessToRes,
  getNotFoundId,
  getBadRequest,
} = require('../../helpers')

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params
  if (!Object.keys(req.body).length) {
    next(getBadRequest({ message: 'missing field favorite' }))
  }

  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite: req.body.favorite },
    {
      new: true,
    }
  )
  return result
    ? sendSuccessToRes(res, { result })
    : next(getNotFoundId(contactId))
}

module.exports = updateStatusContact
