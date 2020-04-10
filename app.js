const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index');
const helpers = require('./helpers');

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
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

// parsing the request object (req.body / req.query / req.params)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// parsing the cookies that come with the request, sticks them into req.cookies
app.use(cookieParser());

app.use((req, res, next) => {
  res.locals.h = helpers;
  res.locals.currentPath = req.path;
  next();
});

app.use('/', routes);

app.listen(PORT, () => console.log(`Backend server started on port: ${PORT}`));