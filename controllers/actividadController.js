const Actividad = require('../models/Actividad');

exports.crearActividad = async (req, res) => {
  const { descripcion, tipo_actividad, estudiante_id } = req.body;

  try {
    const actividad = await Actividad.create({
      descripcion,
      tipo_actividad,
      estudiante_id,
    });

    res.status(201).json({ message: 'Actividad creada exitosamente', actividad });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la actividad', details: error.message });
  }
};

exports.listarActividades = async (req, res) => {
  const { estudiante_id } = req.query; // Filtrar por estudiante_id

  try {
    const actividades = await Actividad.findAll({
      where: estudiante_id ? { estudiante_id } : undefined,
    });

    res.json(actividades);
  } catch (error) {
    res.status(500).json({ error: 'Error al listar actividades', details: error.message });
  }
};
