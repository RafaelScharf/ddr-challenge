'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('matchings', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,

        },
        recordId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {         // matchings belongsTo record 1:1
            model: 'recordings',
            key: 'id'
          }
        },
        tabulationId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {         // matchings belongsTo tabulations 1:1
            model: 'tabulations',
            key: 'id'
          }
        },
  
      
      
      });
   
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('matchings');
   
  }
};
