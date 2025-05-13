// src/models/Employee.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const Employee = sequelize.define('Employee', {
  employee_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'employee_id'
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'name'
  },
  gender: {
    type: DataTypes.STRING(10),
    allowNull: false,
    field: 'gender'
  },
  birthdate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'birthdate'
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'address'
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: true,
    field: 'phone'
  },
  schedule_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'schedule_id'
    // ການອ້າງອີງຈະຖືກກຳນົດຫຼັງຈາກນຳເຂົ້າໂມເດວທັງໝົດ
  },
  attendance_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'attendance_id'
    // ການອ້າງອີງຈະຖືກກຳນົດຫຼັງຈາກນຳເຂົ້າໂມເດວທັງໝົດ
  },
  position_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'position_id'
    // ການອ້າງອີງຈະຖືກກຳນົດຫຼັງຈາກນຳເຂົ້າໂມເດວທັງໝົດ
  }
}, {
  tableName: 'employee',
  timestamps: true
});

module.exports = Employee;