const createHttpError = require('http-errors');
const { Hero,Superpowers } = require('../models');

module.exports.createHero = async (req, res, next) => {
  try {
    const { body } = req;
    const hero = await Hero.create(body);
    res.status(201).send({ data: hero });
  } catch (error) {
    next(error);
  }
};

module.exports.getHeroes = async (req, res, next) => {
  try {
    const heroes = await Hero.findAll({
      include: [
        {
          model: Superpowers,
          through: {
            attributes: [],
          },
        },
      ],
    });
    res.send({ data: heroes });
  } catch (error) {
    next(error);
  }
};

module.exports.getHero = async (req, res, next) => {
  try {
    const {
      params: { heroId },
    } = req;

    const hero = await Hero.findByPk(heroId, {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    if (!hero) {
      const error = createHttpError(404, 'Hero not found');
      return next(error);
    }
    res.status(201).send({ data: hero });
  } catch (error) {
    next(error);
  }
};

module.exports.updateHero = async (req, res, next) => {
  try {
    const {
      body,
      params: { heroId },
    } = req;

    const [heroesUpdated, [updatedHero]] = await User.update(body, {
      where: {
        id: heroId,
      },
      returning: true,
    });

    if (usersUpdated !== 1) {
      return next(createHttpError(404, 'Hero not found'));
    }

    res.status(201).send({ data: updatedHero });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteHero = async (req, res, next) => {
  try {
    const {
      params: { heroId },
    } = req;

    const amountDeleted = await User.destroy({
      where: {
        id: heroId,
      },
    });

    if (amountDeleted === 0) {
      return next(createHttpError(404, 'Hero not found'));
    }

    res.status(201).send({ data: amountDeleted });
  } catch (error) {
    next(error);
  }
};
