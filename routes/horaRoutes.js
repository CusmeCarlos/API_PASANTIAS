const express = require('express');
const { registrarHoras, validarHoras, listarHoras } = require('../controllers/horaController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, registrarHoras);
router.put('/:hora_id/validar', authMiddleware, validarHoras);
router.get('/', authMiddleware, listarHoras);

module.exports = router;
