const express = require('express');
const heroRouter = express.Router();
const HeroController = require('../controllers/heroController');

heroRouter
  .route('/')
  .get(HeroController.getHeroes)
  .post(HeroController.createHero);

heroRouter
  .route('/heroes/:heroId')
  .get(HeroController.getHero)
  .put(HeroController.updateHero)
  .delete(HeroController.deleteHero);

module.exports = heroRouter;
