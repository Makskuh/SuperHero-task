const express = require('express');
const rootRouter = express.Router();
const heroRouter = require('./heroRouters')


rootRouter.use('/heroes', heroRouter );

module.exports = rootRouter;