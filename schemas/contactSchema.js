const Joi = require('joi')
const schemas = require('./schemas')

const contactSchema = Joi.object({
  name: schemas.name.required(),
  email: schemas.email.required(),
  phone: schemas.phone.required(),
})

module.exports = contactSchema
