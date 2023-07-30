const { SuperHeroImage } = require('../models');

module.exports.addImage = async (req, res, next) => {
  try {
    const {
      file: { filename },
    } = req;

    const image = await SuperHeroImage.createSuperHeroImage(
      { imagePath: filename }
    );

    res.send({ data: image });
  } catch (error) {
    next(error);
  }
};