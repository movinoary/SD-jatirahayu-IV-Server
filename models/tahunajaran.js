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
      tahunAjaran.hasMany(models.kelas, {
        as: "daftarKelas",
        foreignKey: {
          name: "idTahunAjaran",
        },
      });
    }
  }
  tahunAjaran.init({
    tahun: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tahunAjaran',
  });
  return tahunAjaran;
};