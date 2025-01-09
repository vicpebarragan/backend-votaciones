const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getUsuarios = async (req, res) => {
    try {
        const usuarios = await prisma.usuario.findMany();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

const getUsuarioById = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await prisma.usuario.findUnique({
            where: { id: Number(id) },
        });
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};

const createUsuario = async (req, res) => {
    const { nombre, email } = req.body;
    try {
        const nuevoUsuario = await prisma.usuario.create({
            data: { nombre, email },
        });
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

const updateUsuario = async (req, res) => {
    const { id } = req.params;
    const { nombre, email } = req.body;
    try {
        const usuarioActualizado = await prisma.usuario.update({
            where: { id: Number(id) },
            data: { nombre, email },
        });
        res.json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};

const deleteUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.usuario.delete({
            where: { id: Number(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};

module.exports = {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
};