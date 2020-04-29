import express from 'express';
import routes from './routes';

class App {
  constructor(){
    //instacia o conector
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    //Diz que as chamadas e retornos serão em json
    this.server.use(express.json());
  }

  routes(){
    //Instacia todas as rotas existentes
    this.server.use(routes);
  }
}

export default new App().server;