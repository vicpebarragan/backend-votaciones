const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllChats = async (req, res) => {
    try {
        const chats = await prisma.chat.findMany();
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching chats' });
    }
};

const getChatById = async (req, res) => {
    const { id } = req.params;
    try {
        const chat = await prisma.chat.findUnique({
            where: { id: Number(id) },
        });
        if (chat) {
            res.status(200).json(chat);
        } else {
            res.status(404).json({ error: 'Chat not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching chat' });
    }
};

const createChat = async (req, res) => {
    try {
        const newChat = await prisma.chat.create({
            data: req.body
        });
        res.status(201).json(newChat);
    } catch (error) {
        res.status(500).json({ error: 'Error creating chat' });
    }
};

const updateChat = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedChat = await prisma.chat.update({
            where: { id: Number(id) },
            data: req.body
        });
        res.status(200).json(updatedChat);
    } catch (error) {
        res.status(500).json({ error: 'Error updating chat' });
    }
};

const deleteChat = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.chat.delete({
            where: { id: Number(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting chat' });
    }
};

module.exports = {
    getAllChats,
    getChatById,
    createChat,
    updateChat,
    deleteChat,
};