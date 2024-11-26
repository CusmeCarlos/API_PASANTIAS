const Hora = require('../models/Hora');
const Actividad = require('../models/Actividad');

exports.registrarHoras = async (req, res) => {
  const { actividad_id, horas } = req.body;

  try {
    const actividad = await Actividad.findByPk(actividad_id);
    if (!actividad) return res.status(404).json({ error: 'Actividad no encontrada' });

    if (actividad.estudiante_id !== req.user.id)
      return res.status(403).json({ error: 'No tienes permisos para esta acción' });

    const registroHora = await Hora.create({
      actividad_id,
      horas,
    });

    res.status(201).json(registroHora);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar horas' });
  }
};

exports.validarHoras = async (req, res) => {
  const { hora_id } = req.params;

  try {
    const hora = await Hora.findByPk(hora_id, { include: Actividad });
    if (!hora) return res.status(404).json({ error: 'Registro de horas no encontrado' });

    if (req.user.rol_id !== 2) // Validar que sea un supervisor
      return res.status(403).json({ error: 'Solo un supervisor puede validar horas' });

    hora.validada = true;
    hora.supervisor_id = req.user.id;
    await hora.save();

    res.json({ message: 'Horas validadas exitosamente', hora });
  } catch (error) {
    res.status(500).json({ error: 'Error al validar horas' });
  }
};

exports.listarHoras = async (req, res) => {
  try {
    const horas = await Hora.findAll({
      include: Actividad,
    });
    res.json(horas);
  } catch (error) {
    res.status(500).json({ error: 'Error al listar las horas' });
  }
};
