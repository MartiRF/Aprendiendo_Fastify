import sequelize from 'sequelize';
import bcript from 'bcrypt';
import db from '../db.js'

export const UserModel = db.define('User',{
  id:{
    type: sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  fullname:{
    type: sequelize.STRING,
    allowNull: false,
  },
  password:{
    type: sequelize.STRING,
    allowNull:false,
  }
})
