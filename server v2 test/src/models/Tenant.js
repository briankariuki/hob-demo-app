const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(tenant, options) {
  const SALT_FACTOR = 8
  if (!tenant.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(tenant.password, salt, null))
    .then(hash => {
      tenant.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const Tenant = sequelize.define(
    'Tenant',
    {
      firstname: DataTypes.STRING,
      secondname: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      phonenumber: {
        type: DataTypes.STRING,
      },
      password: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword
        //beforeSave: hashPassword,
      }
    }
  )

  Tenant.prototype.comparePassword = function(password) {
    console.log(password, this.password)
    return bcrypt.compareAsync(password, this.password)
  }

  return Tenant
}