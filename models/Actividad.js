const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Usuario = require('./Usuario');

const Actividad = sequelize.define('Actividad', {
  descripcion: { type: DataTypes.TEXT, allowNull: false },
  tipo_actividad: { type: DataTypes.STRING },
  estudiante_id: { type: DataTypes.INTEGER, allowNull: false },
});

Actividad.belongsTo(Usuario, { foreignKey: 'estudiante_id' });

module.exports = Actividad;
