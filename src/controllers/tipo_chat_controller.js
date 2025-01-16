const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllTipoChats = async (req, res) => {
    try {
        const tipoChats = await prisma.tipoChat.findMany();
        res.status(200).json(tipoChats);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tipo chats' });
    }
};

const getTipoChatById = async (req, res) => {
    const { id } = req.params;
    try {
        const tipoChat = await prisma.tipoChat.findUnique({
            where: { id: parseInt(id) },
        });
        if (tipoChat) {
            res.status(200).json(tipoChat);
        } else {
            res.status(404).json({ error: 'Tipo chat not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tipo chat' });
    }
};

const createTipoChat = async (req, res) => {
    try {

        const lastTipoChat = await prisma.tipoChat.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          req.body.id = lastTipoChat ? lastTipoChat.id + 1 : 1;

          req.body.fecha_ingreso = new Date();
        const newTipoChat = await prisma.tipoChat.create({
            data: req.body,
        });
        res.status(201).json(newTipoChat);
    } catch (error) {
        res.status(500).json({ error: 'Error creating tipo chat' });
    }
};

const updateTipoChat = async (req, res) => {
    const { id } = req.params;
    try {

        req.body.fecha_modificacion = new Date();
        const updatedTipoChat = await prisma.tipoChat.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.status(200).json(updatedTipoChat);
    } catch (error) {
        res.status(500).json({ error: 'Error updating tipo chat' });
    }
};

const deleteTipoChat = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.tipoChat.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting tipo chat' });
    }
};

module.exports = {
    getAllTipoChats,
    getTipoChatById,
    createTipoChat,
    updateTipoChat,
    deleteTipoChat,
};