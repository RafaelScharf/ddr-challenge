import Sequelize, { Model } from 'sequelize';

class Recordings extends Model {
  static init(sequelize) {
    super.init({
      //Telefone
      phone: Sequelize.STRING,
      //Ramal 
      branch_line: Sequelize.STRING,
     
    },
    {
      sequelize,
    });
  }


}

export default Recordings;