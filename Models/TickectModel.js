import sequelize from 'sequelize';
import db from '../db';
import { UserModel } from './UserModel';
import { StoreModel } from './SotoreModel';

export const TickectModel = db.define('tickets',{
  id:{
    type:sequelize.STRING,
    allowNull:false,
    primaryKey:true,
  },
  data_time:{
    type:'TIMESTAMP',
    allowNull:false,
  },
  status:{
    type: sequelize.NUMBER([
      'Creado', 'Confirmado', 'Atendido', 'Cancelado','En progreso'
    ]),
    allowNull:false
  },
  observation:{
    type: sequelize.TEXT,
    allowNull:false
  },
  end_data_time:{
    type: 'TIMESTAMP',
    allowNull:false
  },
})
UserModel.hasMany(TickectModel,{
  foreingKey: {
    name: 'user_id',
    type: sequelize.TEXT,
    allowNull:false
  }
})
StoreModel.hasMany(TickectModel,{
  foreingKey:{
    name:'store_id',
    type:sequelize.INTEGER,
    allowNull: false,
  }
})
