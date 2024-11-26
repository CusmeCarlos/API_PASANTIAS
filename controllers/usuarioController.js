const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

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
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

exports.login = async (req, res) => {
  const { correo, contraseña } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { correo } });
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    const isMatch = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!isMatch) return res.status(401).json({ error: 'Credenciales incorrectas' });

    const token = jwt.sign({ id: usuario.id, rol_id: usuario.rol_id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error en el inicio de sesión' });
  }
};
