const express = require('express');
const router = require('./routers');
const path = require('path');
const bodyParser = express.json();
const ErrorHandlers = require('./middlewares/errors');
const app = express();
app.use(bodyParser); 
app.use(router);
app.use(
  ErrorHandlers.sequelizeUniqueConflictHandler,
  ErrorHandlers.basicHandler
);


module.exports = app;