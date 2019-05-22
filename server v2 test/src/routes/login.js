const express = require('express')
const AuthenticationController = require('../controllers/AuthenticationController')
const router = express.Router()

router.post('/tenant', 
  AuthenticationController.logintenant
)

router.post('/landlord', 
  AuthenticationController.loginlandlord
)

router.post('/admin', 
  AuthenticationController.loginadmin
)
module.exports = router