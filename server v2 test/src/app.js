const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config');
const passportSetup = require('./controllers/passportGoogleAuth')

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const properties = require('./routes/properties')
const register = require('./routes/register')
const login = require('./routes/login')
const tenants = require('./routes/tenants')
const landlords = require('./routes/landlords')


//Express Routes
app.use('/api/properties', properties)
app.use('/api/register', register)
app.use('/api/login', login)
app.use('/api/tenants', tenants)
app.use('/api/landlords', landlords)

sequelize.sync({force: false})
  .then(() =>{
    app.listen(config.port)
    console.log(`server started on port ${config.port}`)
})

