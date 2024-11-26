const Hora = require('../models/Hora');
const Actividad = require('../models/Actividad');

exports.registrarHoras = async (req, res) => {
  const { actividad_id, horas } = req.body;

  try {
    const actividad = await Actividad.findByPk(actividad_id);
    if (!actividad) return res.status(404).json({ error: 'Actividad no encontrada' });

    const registroHora = await Hora.create({
      actividad_id,
      horas,
    });

    res.status(201).json({ message: 'Horas registradas exitosamente', registroHora });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar horas', details: error.message });
  }
};

exports.validarHoras = async (req, res) => {
  const { hora_id } = req.params;
  const { supervisor_id } = req.body;

  try {
    const hora = await Hora.findByPk(hora_id, { include: Actividad });
    if (!hora) return res.status(404).json({ error: 'Registro de horas no encontrado' });

    hora.validada = true;
    hora.supervisor_id = supervisor_id;
    await hora.save();

    res.json({ message: 'Horas validadas exitosamente', hora });
  } catch (error) {
    res.status(500).json({ error: 'Error al validar horas', details: error.message });
  }
};

exports.listarHoras = async (req, res) => {
  try {
    const horas = await Hora.findAll({
      include: Actividad,
    });
    res.json(horas);
  } catch (error) {
    res.status(500).json({ error: 'Error al listar las horas', details: error.message });
  }
};
