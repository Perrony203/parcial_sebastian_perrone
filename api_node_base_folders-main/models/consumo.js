'use strict';
const { Model, DataTypes } = require('sequelize');
 
module.exports = (sequelize) => {
  class Consumo extends Model {
    static associate(models) {
    }
  }
 
  Consumo.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4, 
            allowNull: false,
            primaryKey: true, 
          },
        usuario_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        consumo_kwh: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tarifa: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
      sequelize,
      modelName: "Consumo",
      tableName: "consumo",
      timestamps: false, 
    }
  );
 
  return Consumo;
};