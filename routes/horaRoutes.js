const express = require('express');
const { registrarHoras, validarHoras, listarHoras } = require('../controllers/horaController');
const router = express.Router();

router.post('/', registrarHoras);
router.put('/:hora_id/validar', validarHoras);
router.get('/', listarHoras);

module.exports = router;
