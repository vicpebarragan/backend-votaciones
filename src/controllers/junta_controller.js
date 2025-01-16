const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getJuntas = async (req, res) => {
    try {
        const juntas = await prisma.junta.findMany();
        res.status(200).json(juntas);
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
    try {

        const lastJunta = await prisma.junta.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          req.body.id = lastJunta ? lastJunta.id + 1 : 1;
          req.body.fecha_ingreso = new Date();
        const newJunta = await prisma.junta.create({
            data: req.body,
        });
        res.status(201).json(newJunta);
    } catch (error) {
        res.status(500).json({ error: 'Error creating junta' });
    }
};

const updateJunta = async (req, res) => {
    const { id } = req.params;
    try {

        req.body.fecha_modificacion = new Date();
        const updatedJunta = await prisma.junta.update({
            where: { id: parseInt(id) },
            data: req.body,
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