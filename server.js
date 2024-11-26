const app = require('./app');
const PORT = process.env.PORT || 37100;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
