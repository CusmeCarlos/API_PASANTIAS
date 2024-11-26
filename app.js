const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/db');  // Tu configuración de base de datos
const usuarioRoutes = require('./routes/usuarioRoutes');
const actividadRoutes = require('./routes/actividadRoutes');
const horaRoutes = require('./routes/horaRoutes');

dotenv.config();  // Cargar variables de entorno

const app = express();  // Crear la instancia de Express

// Configuración de middleware
app.use(cors());  // Habilitar CORS
app.use(express.json());  // Parsear los cuerpos JSON de las solicitudes

// Definir rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/actividades', actividadRoutes);
app.use('/api/horas', horaRoutes);

// Exportar la instancia de la app para usarla en server.js
module.exports = app;
