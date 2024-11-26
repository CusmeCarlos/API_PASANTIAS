const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡API funcionando correctamente!');
});

const port = process.env.PORT || 37100;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
