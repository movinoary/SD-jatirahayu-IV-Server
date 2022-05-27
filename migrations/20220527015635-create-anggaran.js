'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('anggarans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      judul: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      jumlahRp: {
        type: Sequelize.STRING
      },
      dataRp: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('anggarans');
  }
};