'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class promes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  promes.init({
    alokasiWaktu: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    idSilabus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'promes',
  });
  return promes;
};