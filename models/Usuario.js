const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('Usuario', {
  nombre: { type: DataTypes.STRING, allowNull: false },
  correo: { type: DataTypes.STRING, allowNull: false, unique: true },
  contraseña: { type: DataTypes.STRING, allowNull: false },
  rol_id: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Usuario;
