// src/models/Position.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const Position = sequelize.define('Position', { 
  position_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'position_id'
  },
  position_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'position_name'
  },
  salary_rate: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'salary_rate'
  },
  ot_rate: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'ot_rate'
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at'
  }
}, {
  tableName: 'position',
  timestamps: true
});


module.exports = Position;