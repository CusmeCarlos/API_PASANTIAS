const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

// Registrar un nuevo usuario
exports.registrar = async (req, res) => {
  const { nombre, correo, contraseña, rol_id } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    const nuevoUsuario = await Usuario.create({
      nombre,
      correo,
      contraseña: hashedPassword,
      rol_id,
    });

    res.status(201).json({ message: 'Usuario registrado exitosamente', usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario', details: error.message });
  }
};

// Iniciar sesión
exports.login = async (req, res) => {
  const { correo, contraseña } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { correo } });
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    const isMatch = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!isMatch) return res.status(401).json({ error: 'Contraseña incorrecta' });

    res.status(200).json({ message: 'Inicio de sesión exitoso', usuario });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión', details: error.message });
  }
};
