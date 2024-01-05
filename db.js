import Sequelize from 'sequelize';

//Clase de conexion a la base de datos
class DBInstance{
  constructor(){
    const dbConfig = {
      user:'postgres',
      host:'localhost',
      dateBase:'postgres',
      password:'root',
      port:5432
    }
    this.sequelize = new Sequelize(dbConfig.dateBase,dbConfig.user,dbConfig.password,{
      host:dbConfig.host,
      dialect:'postgres',
      logging:false
    })
  }
}
export default new DBInstance().sequelize
