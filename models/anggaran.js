'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class anggaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  anggaran.init({
    judul: DataTypes.STRING,
    icon: DataTypes.STRING,
    jumlahRp: DataTypes.STRING,
    dataRp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'anggaran',
  });
  return anggaran;
};