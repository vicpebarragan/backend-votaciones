const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllTipoDignidades = async (req, res) => {
    try {
        const tipoDignidades = await prisma.tipoDignidad.findMany();
        res.status(200).json(tipoDignidades);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tipo dignidades' });
    }
};

const getTipoDignidadById = async (req, res) => {
    const { id } = req.params;
    try {
        const tipoDignidad = await prisma.tipoDignidad.findUnique({
            where: { id: parseInt(id) },
        });
        if (tipoDignidad) {
            res.status(200).json(tipoDignidad);
        } else {
            res.status(404).json({ error: 'Tipo dignidad not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tipo dignidad' });
    }
};

const createTipoDignidad = async (req, res) => {
    try {
        const newTipoDignidad = await prisma.tipoDignidad.create({
            data: req.body,
        });
        res.status(201).json(newTipoDignidad);
    } catch (error) {
        res.status(500).json({ error: 'Error creating tipo dignidad' });
    }
};

const updateTipoDignidad = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedTipoDignidad = await prisma.tipoDignidad.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.status(200).json(updatedTipoDignidad);
    } catch (error) {
        res.status(500).json({ error: 'Error updating tipo dignidad' });
    }
};

const deleteTipoDignidad = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.tipoDignidad.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting tipo dignidad' });
    }
};

module.exports = {
    getAllTipoDignidades,
    getTipoDignidadById,
    createTipoDignidad,
    updateTipoDignidad,
    deleteTipoDignidad,
};