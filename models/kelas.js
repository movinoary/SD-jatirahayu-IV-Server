'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      kelas.hasMany(models.dataSiswa, {
        as: "daftarSiswa",
        foreignKey: {
          name: "idKelas",
        },
      });
    }
  }
  kelas.init({
    kelas: DataTypes.STRING,
    idTahunAjaran: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kelas',
  });
  return kelas;
};