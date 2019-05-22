const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(landlord, options) {
  const SALT_FACTOR = 8
  if (!landlord.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(landlord.password, salt, null))
    .then(hash => {
      landlord.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const Landlord = sequelize.define(
    'Landlord',
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

  Landlord.prototype.comparePassword = function(password) {
    console.log(password, this.password)
    return bcrypt.compareAsync(password, this.password)
  }

  return Landlord
}