const express = require('express');
const morgan = require('morgan');
const config = require('./config/config');

const app = express();

app.use(morgan('combined'));

if(process.env.NODE_ENV === 'production') {

  app.use(express.static(__dirname + '/public'));

  app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'));
}
app.listen(config.port)
console.log(`server started on port ${config.port}`)

