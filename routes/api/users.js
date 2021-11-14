const express = require('express')
const { joiUserSchema } = require('../../models')
const {
  controllerWrapper,
  validation,
  authenticate,
} = require('../../middlewares')
const { signUp, logIn, logOut } = require('../../controllers')
const router = new express.Router()

router.post('/signup', validation(joiUserSchema), controllerWrapper(signUp))
router.post('/login', validation(joiUserSchema), controllerWrapper(logIn))
router.get('/logout', authenticate, controllerWrapper(logOut))

module.exports = router
