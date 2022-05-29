'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dataSiswas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      tempatLahir: {
        type: Sequelize.STRING
      },
      agama: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.TEXT
      },
      namaAyah: {
        type: Sequelize.STRING
      },
      pendidikanAyah: {
        type: Sequelize.STRING
      },
      pekerjaanAyah: {
        type: Sequelize.STRING
      },
      namaIbu: {
        type: Sequelize.STRING
      },
      pendidikanIbu: {
        type: Sequelize.STRING
      },
      pekerjaanIbu: {
        type: Sequelize.STRING
      },
      namaWali: {
        type: Sequelize.STRING
      },
      pendidikanWali: {
        type: Sequelize.STRING
      },
      pekerjaanWali: {
        type: Sequelize.STRING
      },
      idKelas: {
        type: Sequelize.INTEGER,
        references: {
          model: "kelas",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      idDaftarNilai: {
        type: Sequelize.INTEGER,
        references: {
          model: "daftarNilais",
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
    await queryInterface.dropTable('dataSiswas');
  }
};