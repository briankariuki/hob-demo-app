const path = require('path')
module.exports = {
  port: process.env.PORT || 8085,
  db: {
    database: process.env.DB_NAME || 'hobwebapp',
    user: process.env.DB_USER || 'hobwebapp',
    password: process.env.DB_PASS || 'hobwebapp',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: (__dirname, '././hobwebapp.sqlite')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'hobwebappkenya'
  },
  google: {
    clientID: '763081660536-o6rbp5klioqshjefj3084qisdqucu6gt.apps.googleusercontent.com',
    clientSecret: 'rFr4SlbWXJp2BZEGauEvF2Zu'
  }
}