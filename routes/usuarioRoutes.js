const express = require('express');
const { obtenerUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/usuarioController');
const router = express.Router();

router.get('/', obtenerUsuarios); // OK
router.post('/', crearUsuario); // OK
router.put('/:id', actualizarUsuario); // OK
router.delete('/:id', eliminarUsuario); // OK

module.exports = router;
