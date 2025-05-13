// src/models/SpecialAllowance.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const SpecialAllowance = sequelize.define('SpecialAllowance', {
  special_allowance_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'special_allowance_id'
  },
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'employee_id'
    // ການອ້າງອີງຈະຖືກກຳນົດຫຼັງຈາກສ້າງໂມເດວ Employee
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'amount'
  },
  food_money: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'food_money'
  }
}, {
  tableName: 'special_allowance',
  timestamps: true
});

module.exports = SpecialAllowance;