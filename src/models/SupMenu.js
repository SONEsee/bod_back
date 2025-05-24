const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const SupMenu = sequelize.define('SupMenu', {
  sup_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'sup_id'
  },
  main_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  url: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'sup_menus',
  timestamps: false,
  underscored: true
});

module.exports = SupMenu;
