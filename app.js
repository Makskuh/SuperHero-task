const express = require('express');
const router = require('./routers');
const app = express();
const path = require('path');

const bodyParser = express.json();

app.use(bodyParser); 

app.use(router);


module.exports = app;