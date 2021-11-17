const express = require('express')
const { joiUserSchema, joiSubscriptionSchema } = require('../../models')
const {
  controllerWrapper,
  validation,
  authenticate,
} = require('../../middlewares')
const {
  signUp,
  logIn,
  logOut,
  updateSubscription,
  getDataCurrentUser,
} = require('../../controllers')
const router = new express.Router()

router.post('/signup', validation(joiUserSchema), controllerWrapper(signUp))
router.post('/login', validation(joiUserSchema), controllerWrapper(logIn))
router.get('/current', authenticate, controllerWrapper(getDataCurrentUser))
router.get('/logout', authenticate, controllerWrapper(logOut))
router.patch(
  '/',
  authenticate,
  validation(joiSubscriptionSchema),
  controllerWrapper(updateSubscription)
)

module.exports = router
