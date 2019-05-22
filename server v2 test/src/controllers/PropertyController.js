const { Property } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const property = await Property.findAll({
        limit: 50
      })
      res.send(property)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch available properties for rental'
      })
    }
  },
  async show(req, res) {
    try {
      const Property = await Property.findById(req.params.propertyId)
      res.send(property)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the property details'
      })
    }
  },
  async post(req, res) {
    try {
      const property = await Property.create(req.body)
      res.send(property)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to add the property details'
      })
    }
  },
  async remove(req,res) {
    try {
      const property = await Property.findOne({
        where: {
          id: req.params.propertyId,
        }
      })
      if (!property) {
        return res.status(403).send({
          error: 'Property does not exist'
        })
      }
      await property.destroy()
      res.send(property)
    }
    catch {
      res.status(500).send({
        error: 'an error has occured trying to delete the property entry'
      })
    }
  },
  async put(req, res) {
    try {
      const property = await Property.update(req.body, {
        where: {
          id: req.params.propertyId
        }
      })
      res.send(property)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update the property'
      })
    }
  }
}