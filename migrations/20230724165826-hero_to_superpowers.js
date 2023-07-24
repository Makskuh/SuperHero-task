'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('heroes_to_superpowers', {
      heroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'hero_id',
        references: {
          model: 'heroes',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      groupId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'superpowers_id',
        references: {
          model: 'superpowers',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('heroes_to_superpowers');
  },
};
