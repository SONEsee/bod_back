// src/models/Attendance.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const Attendance = sequelize.define('Attendance', {
  attendance_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'attendance_id'
  },
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'employee_id'
    // ການອ້າງອີງຈະຖືກກຳນົດຫຼັງຈາກສ້າງໂມເດວ Employee
  },
  check_in_time: {
    type: DataTypes.TIME,
    allowNull: true,
    field: 'check_in_time'
  },
  check_out_time: {
    type: DataTypes.TIME,
    allowNull: true,
    field: 'check_out_time'
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'date'
  },
  status: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    field: 'status'
  }
}, {
  tableName: 'attendance',
  timestamps: true
});

module.exports = Attendance;