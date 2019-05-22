const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const config = require('../config/config')

passport.use(
    new GoogleStrategy({
        clientID: config.google.clientID,
        clientSecret: config.google.clientSecret,
    },
    function(accessToken, refreshToken, profile, done) {
        console.log('accessToken', accessToken)
        console.log('profile', profile)
    }
))
