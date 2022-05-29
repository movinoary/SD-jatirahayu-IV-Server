'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('prota', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hari: {
        type: Sequelize.DATE
      },
      minggu: {
        type: Sequelize.STRING
      },
      pelaksanaan: {
        type: Sequelize.STRING
      },
      idSilabus: {
        type: Sequelize.INTEGER,
        references: {
          model: "silabuses",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
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
    await queryInterface.dropTable('prota');
  }
};