'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      realName: {
        type: Sequelize.STRING,
        field: 'real_name',
        allowNull:false
      },
      originDescription: {
        type: Sequelize.TEXT,
        allowNull:false,
        field: 'origin_description'
      },
      catchPhrase: {
        type: Sequelize.STRING,
        allowNull:false,
        field: 'catch_phrase'
      },
      imagesPath: {
        type: Sequelize.TEXT,
        field: 'image_path'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('heroes');
  }
};