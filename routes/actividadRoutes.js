const express = require('express');
const { crearActividad, listarActividades } = require('../controllers/actividadController');
const router = express.Router();

router.post('/', crearActividad);
router.get('/', listarActividades);

module.exports = router;
