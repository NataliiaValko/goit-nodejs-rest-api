const express = require('express')
const { joiContactSchema, joiFavoriteSchema } = require('../../models')
const { controllerWrapper, validation } = require('../../middlewares')
const {
  getAll,
  getById,
  addContact,
  updateById,
  removeById,
  updateStatusContact,
} = require('../../controllers/contacts')
const router = new express.Router()

router.get('/', controllerWrapper(getAll))

router.get('/:contactId', controllerWrapper(getById))

router.post('/', validation(joiContactSchema), controllerWrapper(addContact))

router.put(
  '/:contactId',
  validation(joiContactSchema),
  controllerWrapper(updateById)
)

router.patch(
  '/:contactId/favorite',
  validation(joiFavoriteSchema),
  controllerWrapper(updateStatusContact)
)

router.delete('/:contactId', controllerWrapper(removeById))

module.exports = router
