const {
    sequelize,
    Tenant,
    Admin,
    Landlord,
    Property
} = require('../src/models');

const Promise = require('bluebird')
const tenants = require('./tenants.json')
const admins = require('./admins.json')
const landlords = require('./landlords.json')
const properties = require('./properties.json')

sequelize.sync()
  .then(async function () {
    await Promise.all(
        tenants.map(tenant => {
            Tenant.create(tenant)
        })
    )
    await Promise.all(
        admins.map(admin => {
            Admin.create(admin)
        })
    )
    await Promise.all(
        landlords.map(landlord => {
            Landlord.create(landlord)
        })
    )
    await Promise.all(
        properties.map(property => {
            Property.create(property)
        })
    )
    
})