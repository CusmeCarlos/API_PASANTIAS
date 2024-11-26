const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

// Extraemos el host y el puerto (en este caso ya conocemos que el puerto es 37100)
const [host, port] = process.env.DB_HOST.split(':');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: host,                  // Host sin el puerto
    port: 37100,                 // Puerto que proporcionaste (37100)
    dialect: 'mysql',
    dialectOptions: {
        connectTimeout: 60000 // Aumenta el tiempo de espera si es necesario
    },
    pool: {
        max: 5,                // Número máximo de conexiones en el pool
        min: 0,                // Número mínimo de conexiones en el pool
        acquire: 30000,        // Tiempo máximo para obtener una conexión
        idle: 10000,           // Tiempo máximo para que una conexión permanezca inactiva
    },
});

sequelize.authenticate()
    .then(() => console.log('Conexión a la base de datos exitosa'))
    .catch(err => console.error('Error al conectar con la base de datos:', err));

module.exports = sequelize;
