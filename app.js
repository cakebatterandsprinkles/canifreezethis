const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

require('dotenv').config({
  path: 'variables.env'
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Backend server started on port: ${PORT}`));