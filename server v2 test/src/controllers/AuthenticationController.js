const { Admin } = require('../models')
const { Landlord } = require('../models')
const { Tenant } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignAdmin(admin) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(admin, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}
function jwtSignTenant(tenant) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(tenant, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}
function jwtSignLandlord(landlord) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(landlord, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async registeradmin (req, res) {
    try {
        const admin = await Admin.create(req.body)
        const adminJson = admin.toJSON()
        res.send({
            admin: adminJson,
            token: jwtSignAdmin(adminJson)
        })
    } catch (err) {
        res.status(400).send({
            error: 'An error occured trying to register'
    })
    }
  },
  async registertenant (req, res) {
    try {
        const tenant = await Tenant.create(req.body)
        const tenantJson = tenant.toJSON()
        res.send({
            tenant: tenantJson,
            token: jwtSignTenant(tenantJson)
        })
    } catch (err) {
        res.status(400).send({
            error: 'An error occured trying to register'
    })
    }
  },
  async registerlandlord (req, res) {
    try {
        const landlord = await Landlord.create(req.body)
        const landlordJson = landlord.toJSON()
        res.send({
            landlord: landlordJson,
            token: jwtSignLandlord(landlordJson)
        })
    } catch (err) {
        res.status(400).send({
            error: 'An error occured trying to register'
    })
    }
  },
  async logintenant(req, res) {
    try {
      const { email, password } = req.body
      const tenant = await Tenant.findOne({
        where: {
          email: email
        }
      })
      if (!tenant) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const isTenantPasswordValid = tenant.comparePassword(password)
      if (!isTenantPasswordValid) {
        return res.status(403).send({
          error: 'The password information was incorrect'
        })
      }

      const tenantJson = await tenant.toJSON()
      res.send({
        tenant: tenantJson,
        token: jwtSignTenant(tenantJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured when trying to login'
      })
    }
  },
  async loginlandlord(req, res) {
    try {
      const { email, password } = req.body
      const landlord = await Landlord.findOne({
        where: {
          email: email
        }
      })
      if (!landlord) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const isLandlordPasswordValid = landlord.comparePassword(password)
      if (!isLandlordPasswordValid) {
        return res.status(403).send({
          error: 'The password information was incorrect'
        })
      }

      const landlordJson = await landlord.toJSON()
      res.send({
        landlord: landlordJson,
        token: jwtSignTenant(landlordJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured when trying to login'
      })
    }
  },
  async loginadmin(req, res) {
    try {
      const { email, password } = req.body
      const admin = await Admin.findOne({
        where: {
          email: email
        }
      })
      if (!admin) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const isAdminPasswordValid = admin.comparePassword(password)
      if (!isAdminPasswordValid) {
        return res.status(403).send({
          error: 'The password information was incorrect'
        })
      }

      const adminJson = await admin.toJSON()
      res.send({
        admin: adminJson,
        token: jwtSignAdmin(adminJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured when trying to login'
      })
    }
  },


  async tenantIndex(req, res) {
    try {
      const tenant = await Tenant.findAll({
        limit: 50
      })
      res.send(tenant)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch number of tenants'
      })
    }
  },
  async landlordIndex(req, res) {
    try {
      const landlord = await Landlord.findAll({
        limit: 50
      })
      res.send(landlord)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch number of landlords'
      })
    }
  },
}