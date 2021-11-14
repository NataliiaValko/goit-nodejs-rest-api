const express = require('express')
const { joiUserSchema } = require('../../models')
const { controllerWrapper, validation } = require('../../middlewares')
const { signUp, logIn } = require('../../controllers')
const router = new express.Router()

router.post('/signup', validation(joiUserSchema), controllerWrapper(signUp))
router.post('/login', validation(joiUserSchema), controllerWrapper(logIn))

module.exports = router
