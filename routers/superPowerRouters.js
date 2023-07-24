const express = require('express');
const superPowerRouter = express.Router();
const superPowersController = require('../controllers/superPowerController');

superPowerRouter
  .route('/')
  .post(superPowersController.createSuperpowers)
  .get(superPowersController.getSuperpowers);

module.exports = superPowerRouter;