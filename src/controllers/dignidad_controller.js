const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllDignidades = async (req, res) => {
    try {
        const dignidades = await prisma.dignidad.findMany();
        res.json(dignidades);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching dignidades' });
    }
};

const getDignidadById = async (req, res) => {
    const { id } = req.params;
    try {
        const dignidad = await prisma.dignidad.findUnique({
            where: { id: parseInt(id) },
        });
        if (dignidad) {
            res.json(dignidad);
        } else {
            res.status(404).json({ error: 'Dignidad not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching dignidad' });
    }
};

const createDignidad = async (req, res) => {
    try {
        const newDignidad = await prisma.dignidad.create({
            data: req.body,
        });
        res.status(201).json(newDignidad);
    } catch (error) {
        res.status(500).json({ error: 'Error creating dignidad' });
    }
};

const updateDignidad = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedDignidad = await prisma.dignidad.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.json(updatedDignidad);
    } catch (error) {
        res.status(500).json({ error: 'Error updating dignidad' });
    }
};

const deleteDignidad = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.dignidad.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting dignidad' });
    }
};

module.exports = {
    getAllDignidades,
    getDignidadById,
    createDignidad,
    updateDignidad,
    deleteDignidad,
};