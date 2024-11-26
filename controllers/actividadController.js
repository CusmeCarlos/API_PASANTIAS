const Actividad = require('../models/Actividad');
const Usuario = require('../models/Usuario');

exports.crearActividad = async (req, res) => {
  const { descripcion, tipo_actividad } = req.body;
  const estudiante_id = req.user.id; // Obtenemos el ID del estudiante autenticado

  try {
    const actividad = await Actividad.create({
      descripcion,
      tipo_actividad,
      estudiante_id,
    });
    res.status(201).json(actividad);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la actividad' });
  }
};

exports.listarActividades = async (req, res) => {
  const estudiante_id = req.user.id; // Obtenemos el ID del estudiante autenticado

  try {
    const actividades = await Actividad.findAll({
      where: { estudiante_id },
    });
    res.json(actividades);
  } catch (error) {
    res.status(500).json({ error: 'Error al listar actividades' });
  }
};
