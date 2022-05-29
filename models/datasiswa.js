'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dataSiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dataSiswa.init({
    nama: DataTypes.STRING,
    nik: DataTypes.STRING,
    nik: DataTypes.STRING,
    tempatLahir: DataTypes.STRING,
    agama: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    namaAyah: DataTypes.STRING,
    pendidikanAyah: DataTypes.STRING,
    pekerjaanAyah: DataTypes.STRING,
    namaIbu: DataTypes.STRING,
    pendidikanIbu: DataTypes.STRING,
    pekerjaanIbu: DataTypes.STRING,
    namaWali: DataTypes.STRING,
    pendidikanWali: DataTypes.STRING,
    pekerjaanWali: DataTypes.STRING,
    idKelas: DataTypes.INTEGER,
    idDaftarNilai: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dataSiswa',
  });
  return dataSiswa;
};