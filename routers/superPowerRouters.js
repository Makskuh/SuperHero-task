const express = require('express');
const superPowerRouter = express.Router();
const superPowersController = require('../controllers/superPowerController');

superPowerRouter
  .route('/superpowers')
  .get(superPowersController.getSuperpowers)
  .post(superPowersController.createSuperpowers);

module.exports = superPowerRouter;