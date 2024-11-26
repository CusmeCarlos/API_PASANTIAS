const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const usuarioRoutes = require('./routes/usuarioRoutes');
const actividadRoutes = require('./routes/actividadRoutes');
const horaRoutes = require('./routes/horaRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/actividades', actividadRoutes);
app.use('/api/horas', horaRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
});
