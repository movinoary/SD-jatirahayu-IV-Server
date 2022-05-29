'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bankSoal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bankSoal.init({
    soal: DataTypes.TEXT,
    pilihanJawaban: DataTypes.TEXT,
    kunciJawaban: DataTypes.TEXT,
    idkelas: DataTypes.INTEGER,
    idSilabus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bankSoal',
  });
  return bankSoal;
};