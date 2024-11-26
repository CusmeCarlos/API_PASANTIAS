const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Acceso denegado' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await Usuario.findByPk(verified.id);

    if (!req.user) return res.status(404).json({ error: 'Usuario no encontrado' });

    next();
  } catch (error) {
    res.status(400).json({ error: 'Token inválido' });
  }
};
