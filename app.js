const express = require('express');
const router = require('./routers');
const path = require('path');
const bodyParser = express.json();

const app = express();
app.use(bodyParser); 

app.use(router);


module.exports = app;