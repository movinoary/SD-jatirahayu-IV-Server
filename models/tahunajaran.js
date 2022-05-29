'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tahunAjaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here 
      tahunAjaran.belongsTo(models.kelas, {
        as: "daftarKelas",
        foreignKey: {
          name: "idKelas",
        },
      });
    }
  }
  tahunAjaran.init({
    tahun: DataTypes.STRING,
    idKelas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tahunAjaran',
  });
  return tahunAjaran;
};