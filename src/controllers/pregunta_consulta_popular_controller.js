const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getPreguntas = async (req, res) => {
    try {
        const preguntas = await prisma.pregunta.findMany();
        res.json(preguntas);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching preguntas' });
    }
};

const getPreguntaById = async (req, res) => {
    const { id } = req.params;
    try {
        const pregunta = await prisma.pregunta.findUnique({
            where: { id: parseInt(id) },
        });
        if (pregunta) {
            res.json(pregunta);
        } else {
            res.status(404).json({ error: 'Pregunta not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching pregunta' });
    }
};

const createPregunta = async (req, res) => {
    try {

        const lastPregunta = await prisma.pregunta.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          req.body.id = lastPregunta ? lastPregunta.id + 1 : 1;
          req.body.fecha_ingreso = new Date();

        const newPregunta = await prisma.pregunta.create({
            data: req.body,
        });
        res.status(201).json(newPregunta);
    } catch (error) {
        res.status(500).json({ error: 'Error creating pregunta' });
    }
};

const updatePregunta = async (req, res) => {
    const { id } = req.params;
    try {
        req.body.fecha_modificacion = new Date();
        const updatedPregunta = await prisma.pregunta.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.json(updatedPregunta);
    } catch (error) {
        res.status(500).json({ error: 'Error updating pregunta' });
    }
};

const deletePregunta = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.pregunta.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting pregunta' });
    }
};

module.exports = {
    getPreguntas,
    getPreguntaById,
    createPregunta,
    updatePregunta,
    deletePregunta,
};