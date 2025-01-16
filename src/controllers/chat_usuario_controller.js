const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllChatUsuarios = async (req, res) => {
    try {
        const chatUsuarios = await prisma.chatUsuario.findMany();
        res.status(200).json(chatUsuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching chat usuarios' });
    }
};

const getChatUsuarioById = async (req, res) => {
    const { id } = req.params;
    try {
        const chatUsuario = await prisma.chatUsuario.findUnique({
            where: { id: parseInt(id) },
        });
        if (chatUsuario) {
            res.status(200).json(chatUsuario);
        } else {
            res.status(404).json({ error: 'Chat usuario not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching chat usuario' });
    }
};

const createChatUsuario = async (req, res) => {
    try {

        const lastChatUsuario = await prisma.chatUsuario.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          req.body.id = lastChatUsuario ? lastChatUsuario.id + 1 : 1;
          req.body.fecha_ingreso = new Date();
        const newChatUsuario = await prisma.chatUsuario.create({
            data: req.body,
        });
        res.status(201).json(newChatUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Error creating chat usuario' });
    }
};

const updateChatUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        req.body.fecha_modificacion = new Date();
        const updatedChatUsuario = await prisma.chatUsuario.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.status(200).json(updatedChatUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Error updating chat usuario' });
    }
};

const deleteChatUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.chatUsuario.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting chat usuario' });
    }
};

module.exports = {
    getAllChatUsuarios,
    getChatUsuarioById,
    createChatUsuario,
    updateChatUsuario,
    deleteChatUsuario,
};