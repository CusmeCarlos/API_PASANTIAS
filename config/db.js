const { Sequelize } = require('sequelize');
require('dotenv').config();  // Asegúrate de cargar el archivo .env

// Obtener las variables de entorno
const sequelize = new Sequelize(
  process.env.DB_NAME,       // Nombre de la base de datos
  process.env.DB_USER,       // Usuario de la base de datos
  process.env.DB_PASSWORD,   // Contraseña de la base de datos
  {
    host: process.env.DB_HOST, // Dirección del servidor
    port: process.env.PORT, // Puerto
    dialect: 'mysql',          // Dialecto de la base de datos (mysql en este caso)
    logging: false,            // Desactivar logs de SQL
  }
);

// Verificar la conexión a la base de datos
sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa'))
  .catch((err) => console.error('Error al conectar la base de datos:', err));

module.exports = sequelize;
