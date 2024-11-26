const { Sequelize } = require('sequelize');

// Configuración usando la URL de conexión
const sequelize = new Sequelize('mysql://root:qbfbXvChoLdCtHxrbKQwWDWIQIPxybPh@autorack.proxy.rlwy.net:37100/railway');

// Probar la conexión
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

module.exports = sequelize;
