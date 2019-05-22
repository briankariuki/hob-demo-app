const express = require('express')

const PropertyController = require('../controllers/PropertyController')

const router = express.Router()

router.get('/', PropertyController.index)

router.get('/:propertyId', PropertyController.show)

router.post('/add',  PropertyController.post)

router.delete('/:propertyId', PropertyController.remove)

router.put('/:propertyId', )

module.exports = router;
