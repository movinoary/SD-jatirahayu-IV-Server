'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class silabus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  silabus.init({
    idMataPelajaran: DataTypes.INTEGER,
    semester: DataTypes.STRING,
    kompetensiDasar: DataTypes.STRING,
    indikator: DataTypes.STRING,
    pendidikanPenguatan: DataTypes.STRING,
    penilaian: DataTypes.STRING,
    materiPembelajaran: DataTypes.TEXT,
    sumberPembelajaran: DataTypes.TEXT,
    pembelajaran: DataTypes.TEXT,
    alokasiWaktu: DataTypes.STRING,
    tema: DataTypes.STRING,
    subtema: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'silabus',
  });
  return silabus;
};