import Sequelize, { Model } from 'sequelize';

class Recordings extends Model {
  static init(sequelize) {
    super.init({
      //Id da gravação
      recordId: {
        type: Sequelize.INTEGER,
        references: {         // matchings belongsTo record 1:1
          model: 'recordings',
          key: 'id'
        }
      },
      //Id da tabulação 
      tabulationId: {
        type: Sequelize.INTEGER,
        references: {         // matchings belongsTo tabulations 1:1
          model: 'tabulations',
          key: 'id'
        }
      }
    },
    {
      sequelize,
    });
  }
}

export default Recordings;