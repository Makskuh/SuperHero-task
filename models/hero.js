'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Superpowers}) {
      Hero.hasMany(Superpowers, {
        foreignKey: 'heroId',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
    }
  }
  Hero.init(
    {
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { is: /^[A-Z][a-z]{0,64}$/, notNull: true, notEmpty: true },
      },
      realName: {
        type: DataTypes.STRING,
        field: 'real_name',
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]{0,64}$/,
          notNull: true,
          notEmpty: true,
        },
      },
      originDescription: {
        type: DataTypes.TEXT,
        field: 'origin_description',
        allowNull: false,
        validate: { notNull: true, notEmpty: true },
      },
      catchPhrase: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'catch_phrase',
        validate: { notNull: true, notEmpty: true },
      },
      imagesPath: { type: DataTypes.TEXT, field: 'image_path' },
    },
    {
      sequelize,
      modelName: 'Hero',
      tableName: 'heroes',
      underscored: true,
    }
  );
  return Hero;
};
