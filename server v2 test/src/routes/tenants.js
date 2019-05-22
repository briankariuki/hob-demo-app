const express = require('express')

const AuthenticationController = require('../controllers/AuthenticationController')

const router = express.Router()

router.get('/', 
    // refactor in future
    AuthenticationController.tenantIndex)

module.exports = router