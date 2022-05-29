'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class prota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      prota.belongsTo(models.silabus, {
        as: "silabus",
        foreignKey: {
          name: "idSilabus",
        },
      });
    }
  }
  prota.init({
    hari: DataTypes.DATE,
    minggu: DataTypes.STRING,
    pelaksanaan: DataTypes.STRING,
    idSilabus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'prota',
  });
  return prota;
};