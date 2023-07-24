const createHttpError = require('http-errors');
const { Superpowers } = require('../models');

module.exports.createSuperpowers = async (req, res, next) => {
  try {
    const { body } = req;
    const superPower = await Superpowers.create(body);
    res.send({ data: superPower });
  } catch (error) {
    next(error);
  }
};

module.exports.getSuperpowers = async (req, res, next) => {
  try {
    const superpowers = await Superpowers.findAll();
    res.send({ data: superpowers });
  } catch (error) {
    next(error);
  }
};
