const Joi = require('joi')

const patterns = {
  phone:
    /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/,
  name: /^([A-Z]?[a-z]+([ ]?[a-z]?['-]?[A-Z]?[a-z]+)*)$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: null,
}

const schemas = {
  name: Joi.string().pattern(patterns.name),
  email: Joi.string().pattern(patterns.email),
  phone: Joi.string().pattern(patterns.phone),
  password: null,
}

module.exports = schemas
