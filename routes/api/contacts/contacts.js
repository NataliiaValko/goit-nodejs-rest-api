const express = require('express')
const { contactSchema } = require('../../../schemas')
const { controllerWrapper, validation } = require('../../../middlewares')
const {
  getAll,
  getById,
  addContact,
  updateById,
  removeById,
} = require('../../../controllers/contacts')
const router = new express.Router()

router.get('/', (_, res) => {
  res.send('<h1>Hello</h1>')
})
// router.get('/', controllerWrapper(getAll))

// router.get('/:contactId', controllerWrapper(getById))

// router.post('/', validation(contactSchema), controllerWrapper(addContact))

// router.put(
//   '/:contactId',
//   validation(contactSchema),
//   controllerWrapper(updateById)
// )

// router.delete('/:contactId', controllerWrapper(removeById))

module.exports = router
