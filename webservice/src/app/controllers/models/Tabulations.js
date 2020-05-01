import Sequelize, { Model } from 'sequelize';

class Tabulations extends Model {
  static init(sequelize) {
    super.init({
      //Nome cliente
      customer_name: Sequelize.STRING,
      //Protocolo 
      protocol: Sequelize.STRING,
      //Numero Binado
      extension_number: Sequelize.STRING,
      //Numero Acesso
      access_number: Sequelize.STRING,
        
    },
    {
      sequelize,
    });
  }


}

export default Tabulations;