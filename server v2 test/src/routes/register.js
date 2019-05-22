const express = require('express')
const AuthenticationController = require('../controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')
const router = express.Router()

router.post('/tenant', 
  AuthenticationControllerPolicy.register,
  AuthenticationController.registeradmin
)

router.post('/landlord', 
  AuthenticationControllerPolicy.register,
  AuthenticationController.registerlandlord
)

router.post('/admin', 
  AuthenticationControllerPolicy.register,
  AuthenticationController.registeradmin
)
module.exports = router