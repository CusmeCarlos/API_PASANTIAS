const express = require('express');
const { crearActividad, listarActividades } = require('../controllers/actividadController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, crearActividad);
router.get('/', authMiddleware, listarActividades);

module.exports = router;
