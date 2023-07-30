'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperHeroImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SuperHeroImage.init({
    imgName: {type:DataTypes.STRING,
    allowNull:false}
  }, {
    sequelize,
    modelName: 'SuperHeroImage',
  });
  return SuperHeroImage;
};