// usuarioController.js
const Usuario = require('../models/Usuario'); // Verifica que este modelo exista

exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios', error });
    }
};

exports.crearUsuario = async (req, res) => {
    try {
        const { nombre, correo, contraseña, rol_id } = req.body;
        const nuevoUsuario = await Usuario.create({ nombre, correo, contraseña, rol_id });
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear usuario', error });
    }
};

exports.actualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, correo } = req.body;
        const usuario = await Usuario.update({ nombre, correo }, { where: { id } });
        if (usuario[0] === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar usuario', error });
    }
};

exports.eliminarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await Usuario.destroy({ where: { id } });
        if (!resultado) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar usuario', error });
    }
};
