'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class berita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  berita.init({
    judul: DataTypes.STRING,
    image: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    isiBerita: DataTypes.TEXT,
    pencipta: DataTypes.STRING,
    kategori: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'berita',
  });
  return berita;
};