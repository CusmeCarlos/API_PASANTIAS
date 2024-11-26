const express = require('express');
const { registrar, login } = require('../controllers/usuarioController');
const router = express.Router();

// Rutas para registrar e iniciar sesión
router.post('/register', registrar);
router.post('/login', login);

module.exports = router;
