'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.createTable('tabulations', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        customer_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        protocol: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        extension_number: {
          type: Sequelize.STRING,
          allowNull: false,

        },
        access_number: {
          type: Sequelize.STRING,
          allowNull: false,
        }
        //dataAtendimento não necessário pois TIMESTAMPS HABILITADO
        
      });
   
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.dropTable('tabulations');
    
  }
};
