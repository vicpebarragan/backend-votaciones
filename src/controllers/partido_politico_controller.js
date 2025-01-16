const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllPartidosPoliticos = async (req, res) => {
    try {
        const partidosPoliticos = await prisma.partido_politico.findMany();
        res.status(200).json(partidosPoliticos);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching partidos politicos' });
    }
};

const getPartidoPoliticoById = async (req, res) => {
    const { id } = req.params;
    try {
        const partidoPolitico = await prisma.partido_politico.findUnique({
            where: { id: parseInt(id) },
        });
        if (partidoPolitico) {
            res.json(partidoPolitico);
        } else {
            res.status(404).json({ error: 'Partido politico not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching partido politico' });
    }
};

const createPartidoPolitico = async (req, res) => {
    try {

        const lastPartidoPolitico = await prisma.partido_politico.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          req.body.id = lastPartidoPolitico ? lastPartidoPolitico.id + 1 : 1;
          req.body.fecha_ingreso = new Date();
        const newPartidoPolitico = await prisma.partido_politico.create({
            data: req.body,
        });
        res.status(201).json(newPartidoPolitico);
    } catch (error) {
        res.status(500).json({ error: 'Error creating partido politico' });
    }
};

const updatePartidoPolitico = async (req, res) => {
    const { id } = req.params;
    try {

        req.body.fecha_modificacion = new Date();
        const updatedPartidoPolitico = await prisma.partido_politico.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.json(updatedPartidoPolitico);
    } catch (error) {
        res.status(500).json({ error: 'Error updating partido politico' });
    }
};

const deletePartidoPolitico = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.partido_politico.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting partido politico' });
    }
};

module.exports = {
    getAllPartidosPoliticos,
    getPartidoPoliticoById,
    createPartidoPolitico,
    updatePartidoPolitico,
    deletePartidoPolitico,
};