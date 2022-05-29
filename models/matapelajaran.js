'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mataPelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      mataPelajaran.hasMany(models.silabus, {
        as: "silabus",
        foreignKey: {
          name: "idMataPelajaran",
        },
      });
      mataPelajaran.hasOne(models.kkm, {
        as: "kkm",
        foreignKey: {
          name: "idMataPelajaran",
        },
      });
    }
  }
  mataPelajaran.init({
    nama: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'mataPelajaran',
  });
  return mataPelajaran;
};