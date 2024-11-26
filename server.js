const express = require('express');
const app = express();
const sequelize = require('./config/db');
// Conectar la base de datos al iniciar el servidor
sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch(err => {
    console.error('Error sincronizando la base de datos:', err);
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
