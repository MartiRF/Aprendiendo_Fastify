import sequelize from 'sequelize'
import db from '../db.js'

export const StoreModel = db.define('Store',{
  id:{
    type: sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  store_name:{
    type: sequelize.STRING,
    allowNull: false
  },
  category_store:{
    type: sequelize.STRING,
    allowNull: false
  }
})