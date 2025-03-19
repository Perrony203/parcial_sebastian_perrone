'use strict';
//Modelo de la base de datos
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("consumo", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, // Genera un UUID automáticamente
        allowNull: false,
        primaryKey: true,
      },
      usuario_id: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      consumo_kwh: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tarifa: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: false,        
      },
    });
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("consumo");
  },
};
// Cada que se hace una migración se hace la comparación con cad una de las anteriores
 