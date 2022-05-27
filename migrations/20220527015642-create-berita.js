'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('berita', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      judul: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      tanggal: {
        type: Sequelize.DATE
      },
      isiBerita: {
        type: Sequelize.TEXT
      },
      pencipta: {
        type: Sequelize.STRING
      },
      kategori: {
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
    await queryInterface.dropTable('berita');
  }
};