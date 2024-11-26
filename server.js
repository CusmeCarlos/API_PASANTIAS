const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta base para verificar que el servidor está funcionando
app.get('/', (req, res) => {
    res.send('API de Pasantías funcionando correctamente');
});

// Configuración del puerto
const PORT = process.env.PORT || 37100;

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
