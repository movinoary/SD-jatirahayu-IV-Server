'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class daftarNilai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      daftarNilai.belongsTo(models.dataSiswa, {
        as: "namaSiswa",
        foreignKey: {
          name: "idSiswa",
        },
      });
    }
  }
  daftarNilai.init({
    idSiswa: DataTypes.INTEGER,
    mataPelajaran: DataTypes.STRING,
    uhp1: DataTypes.STRING,
    uhp2: DataTypes.STRING,
    uhp3: DataTypes.STRING,
    uhp4: DataTypes.STRING,
    uhk1: DataTypes.STRING,
    uhk2: DataTypes.STRING,
    uhk3: DataTypes.STRING,
    uhk4: DataTypes.STRING,
    pup1: DataTypes.STRING,
    pup2: DataTypes.STRING,
    pts1: DataTypes.STRING,
    pts2: DataTypes.STRING,
    pas1: DataTypes.STRING,
    pat1: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'daftarNilai',
  });
  return daftarNilai;
};