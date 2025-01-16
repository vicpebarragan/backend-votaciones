const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllActas = async (req, res) => {
    try {
        const actas = await prisma.acta.findMany();
        res.status(200).json(actas);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching actas' });
    }
};

const getActaById = async (req, res) => {
    const { id } = req.params;
    try {
        const acta = await prisma.acta.findUnique({ where: { id: Number(id) } });
        if (acta) {
            res.status(200).json(acta);
        } else {
            res.status(404).json({ error: 'Acta not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching acta' });
    }
};

const createActa = async (req, res) => {
    
    try {

        const lastActa = await prisma.acta.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          req.body.id = lastActa ? lastActa.id + 1 : 1;
          req.body.fecha_ingreso = new Date();
        const newActa = await prisma.acta.create({
            data: req.body
        });
        res.status(201).json(newActa);
    } catch (error) {
        res.status(500).json({ error: 'Error creating acta' });
    }
};

const updateActa = async (req, res) => {
    const { id } = req.params;
    try {

        req.body.fecha_modificacion = new Date();
        const updatedActa = await prisma.acta.update({
            where: { id: Number(id) },
            data: req.body
        });
        res.status(200).json(updatedActa);
    } catch (error) {
        res.status(500).json({ error: 'Error updating acta' });
    }
};

const deleteActa = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.acta.delete({ where: { id: Number(id) } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting acta' });
    }
};

module.exports = {
    getAllActas,
    getActaById,
    createActa,
    updateActa,
    deleteActa,
};