const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index');

require('dotenv').config({
  path: 'variables.env'
});
const PORT = process.env.PORT || 5000;
const DATABASE = process.env.DATABASE;

mongoose.connect(DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', error => {
  console.log(`Mongoose connection error: ${error.message}`)
})

// parsing the request object (eg. req.query will give you request params)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// parsing the cookies that come with the request, sticks them into req.cookies
app.use(cookieParser());

app.use('/', routes);

app.listen(PORT, () => console.log(`Backend server started on port: ${PORT}`));