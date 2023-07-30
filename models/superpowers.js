'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superpowers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Superpowers.belongsTo(models.Hero, {
        foreignKey: 'heroId',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
    }
  }
  Superpowers.init(
    {
      superpowers: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Superpowers',
      tableName: 'superpowers',
      underscored: true,
    }
  );
  return Superpowers;
};

