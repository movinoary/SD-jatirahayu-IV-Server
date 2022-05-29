'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bankSoals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      soal: {
        type: Sequelize.TEXT
      },
      pilihanJawaban: {
        type: Sequelize.TEXT
      },
      kunciJawaban: {
        type: Sequelize.TEXT
      },
      idkelas: {
        type: Sequelize.INTEGER,
        references: {
          model: "kelas",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
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
    await queryInterface.dropTable('bankSoals');
  }
};