'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperHeroImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SuperHeroImage.belongsTo(models.Hero, {
        foreignKey: 'heroId',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
    }
  }
  SuperHeroImage.init(
    {
      imgPath: { type: DataTypes.STRING, allowNull: false ,field: 'img_path'},
    },
    {
      sequelize,
      modelName: 'SuperHeroImage',
      tableName: 'superHeroImages',
    }
  );
  return SuperHeroImage;
};
