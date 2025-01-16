const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllTipoDignidades = async (req, res) => {
    try {
        const tipoDignidades = await prisma.tipo_dignidad.findMany();
        res.status(200).json(tipoDignidades);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tipo dignidades' });
    }
};

const getTipoDignidadById = async (req, res) => {
    const { id } = req.params;
    try {
        const tipoDignidad = await prisma.tipo_dignidad.findUnique({
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

        const lastTipoDignidad = await prisma.tipo_dignidad.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          req.body.id = lastTipoDignidad ? lastTipoDignidad.id + 1 : 1;
          req.body.fecha_ingreso = new Date();
        const newTipoDignidad = await prisma.tipo_dignidad.create({
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
        req.body.fecha_modificacion = new Date();
        const updatedTipoDignidad = await prisma.tipo_dignidad.update({
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
        await prisma.tipo_dignidad.delete({
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