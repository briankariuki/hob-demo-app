const express = require('express')

const AuthenticationController = require('../controllers/AuthenticationController')

const routerLandlord = express.Router()

routerLandlord.get('/', 
    // refactor in future
    AuthenticationController.landlordIndex)

module.exports = routerLandlord