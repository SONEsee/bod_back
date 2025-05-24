const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

  const MainMenu = sequelize.define('MainMenu', {
    main_id: {
      type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'main_id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE, 
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'main_menus',
    timestamps: false, // ຖ້າເຈົ້າໃຊ້ timestamps: true ຈະຕ້ອງຕັ້ງ column ຊື່ createdAt, updatedAt ແບບ Sequelize
    underscored: true
  });

module.exports = MainMenu

