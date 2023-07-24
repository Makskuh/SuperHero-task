const express = require('express');
const rootRouter = express.Router();
const heroRouter = require('./heroRouters')
const superPowerRouter = require('./superPowerRouters')

rootRouter.use('/heroes', heroRouter );
rootRouter.use('/superpowers', superPowerRouter)

module.exports = rootRouter;