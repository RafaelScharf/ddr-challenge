'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.createTable('recordings', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        branch_line: {
          type: Sequelize.STRING,
          allowNull: false,
        }
        //dataGravacao não necessário pois TIMESTAMPS HABILITADO
        
      });
   
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.dropTable('recordings');
    
  }
};
