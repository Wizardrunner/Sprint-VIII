// src/models/locationModel.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const Location = sequelize.define('Location', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: false
  },
  longitude: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: false
  }
}, {
  timestamps: false // Dando por hecho que la tabla no tiene campos de timestamps
});

export default Location;
