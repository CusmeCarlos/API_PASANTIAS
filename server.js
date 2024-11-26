const app = require('./app');  // Importar la instancia de express desde app.js

const PORT = process.env.PORT || 37100;  // Usar el puerto de las variables de entorno o 37100 por defecto

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
