'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('daftarNilais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idSiswa:{
        type: Sequelize.INTEGER,
        references: {
          model: "dataSiswas",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      uhp1: {
        type: Sequelize.STRING
      },
      uhp2: {
        type: Sequelize.STRING
      },
      uhp3: {
        type: Sequelize.STRING
      },
      uhp4: {
        type: Sequelize.STRING
      },
      uhk1: {
        type: Sequelize.STRING
      },
      uhk2: {
        type: Sequelize.STRING
      },
      uhk3: {
        type: Sequelize.STRING
      },
      uhk4: {
        type: Sequelize.STRING
      },
      pup1: {
        type: Sequelize.STRING
      },
      pup2: {
        type: Sequelize.STRING
      },
      pts1: {
        type: Sequelize.STRING
      },
      pts2: {
        type: Sequelize.STRING
      },
      pas1: {
        type: Sequelize.STRING
      },
      pat1: {
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
    await queryInterface.dropTable('daftarNilais');
  }
};