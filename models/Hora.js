const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Actividad = require('./Actividad');
const Usuario = require('./Usuario');

const Hora = sequelize.define('Hora', {
  horas: { type: DataTypes.INTEGER, allowNull: false },
  validada: { type: DataTypes.BOOLEAN, defaultValue: false },
  supervisor_id: { type: DataTypes.INTEGER, allowNull: true },
});

Hora.belongsTo(Actividad, { foreignKey: 'actividad_id' });
Hora.belongsTo(Usuario, { foreignKey: 'supervisor_id' });

module.exports = Hora;
