require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
const app = express();

sequelize.sync() // Sincroniza la base de datos
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch(err => {
    console.error('Error sincronizando la base de datos:', err);
  });

const port = process.env.PORT || 3000; // Usa el puerto de las variables de entorno

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
