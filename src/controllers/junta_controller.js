const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getJuntas = async (req, res) => {
    try {
        const juntas = await prisma.junta.findMany();
        res.json(juntas);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching juntas' });
    }
};

const getJuntaById = async (req, res) => {
    const { id } = req.params;
    try {
        const junta = await prisma.junta.findUnique({
            where: { id: parseInt(id) },
        });
        if (junta) {
            res.json(junta);
        } else {
            res.status(404).json({ error: 'Junta not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching junta' });
    }
};

const createJunta = async (req, res) => {
    const { name, description } = req.body;
    try {
        const newJunta = await prisma.junta.create({
            data: { name, description },
        });
        res.status(201).json(newJunta);
    } catch (error) {
        res.status(500).json({ error: 'Error creating junta' });
    }
};

const updateJunta = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const updatedJunta = await prisma.junta.update({
            where: { id: parseInt(id) },
            data: { name, description },
        });
        res.json(updatedJunta);
    } catch (error) {
        res.status(500).json({ error: 'Error updating junta' });
    }
};

const deleteJunta = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.junta.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting junta' });
    }
};

module.exports = {
    getJuntas,
    getJuntaById,
    createJunta,
    updateJunta,
    deleteJunta,
};