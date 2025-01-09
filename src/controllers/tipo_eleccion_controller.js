const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllTipoElecciones = async (req, res) => {
    try {
        const tipoElecciones = await prisma.tipoEleccion.findMany();
        res.status(200).json(tipoElecciones);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tipo elecciones' });
    }
};

const getTipoEleccionById = async (req, res) => {
    const { id } = req.params;
    try {
        const tipoEleccion = await prisma.tipoEleccion.findUnique({
            where: { id: Number(id) },
        });
        if (tipoEleccion) {
            res.status(200).json(tipoEleccion);
        } else {
            res.status(404).json({ error: 'Tipo eleccion not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tipo eleccion' });
    }
};

const createTipoEleccion = async (req, res) => {
    try {
        const newTipoEleccion = await prisma.tipoEleccion.create({
            data: req.body,
        });
        res.status(201).json(newTipoEleccion);
    } catch (error) {
        res.status(500).json({ error: 'Error creating tipo eleccion' });
    }
};

const updateTipoEleccion = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedTipoEleccion = await prisma.tipoEleccion.update({
            where: { id: Number(id) },
            data: req.body,
        });
        res.status(200).json(updatedTipoEleccion);
    } catch (error) {
        res.status(500).json({ error: 'Error updating tipo eleccion' });
    }
};

const deleteTipoEleccion = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.tipoEleccion.delete({
            where: { id: Number(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting tipo eleccion' });
    }
};

module.exports = {
    getAllTipoElecciones,
    getTipoEleccionById,
    createTipoEleccion,
    updateTipoEleccion,
    deleteTipoEleccion,
};