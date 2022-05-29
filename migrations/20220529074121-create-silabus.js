'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('silabuses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      semester: {
        type: Sequelize.STRING
      },
      kompetensiDasar: {
        type: Sequelize.STRING
      },
      indikator: {
        type: Sequelize.STRING
      },
      idMataPelajaran: {
        type: Sequelize.INTEGER,
        references: {
          model: "mataPelajarans",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      pendidikanPenguatan: {
        type: Sequelize.STRING
      },
      penilaian: {
        type: Sequelize.STRING
      },
      materiPembelajaran: {
        type: Sequelize.TEXT
      },
      sumberPembelajaran: {
        type: Sequelize.TEXT
      },
      pembelajaran: {
        type: Sequelize.TEXT
      },
      alokasiWaktu: {
        type: Sequelize.STRING
      },
      tema: {
        type: Sequelize.STRING
      },
      subtema: {
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
    await queryInterface.dropTable('silabuses');
  }
};