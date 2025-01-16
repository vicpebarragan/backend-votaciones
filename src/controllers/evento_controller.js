const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllEventos = async (req, res) => {
    try {
        const eventos = await prisma.evento.findMany();
        res.status(200).json(eventos);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching eventos' });
    }
};

const getEventoById = async (req, res) => {
    const { id } = req.params;
    try {
        const evento = await prisma.evento.findUnique({
            where: { id: Number(id) },
        });
        if (evento) {
            res.status(200).json(evento);
        } else {
            res.status(404).json({ error: 'Evento not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching evento' });
    }
};

const createEvento = async (req, res) => {
    try {

        const lastEvento = await prisma.evento.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          req.body.id = lastEvento ? lastEvento.id + 1 : 1;
          req.body.fecha_ingreso = new Date();
        const newEvento = await prisma.evento.create({
            data: req.body,
        });
        res.status(201).json(newEvento);
    } catch (error) {
        res.status(500).json({ error: 'Error creating evento' });
    }
};

const updateEvento = async (req, res) => {
    const { id } = req.params;
    try {

        req.body.fecha_modificacion = new Date();
        const updatedEvento = await prisma.evento.update({
            where: { id: Number(id) },
            data: req.body,
        });
        res.status(200).json(updatedEvento);
    } catch (error) {
        res.status(500).json({ error: 'Error updating evento' });
    }
};

const deleteEvento = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.evento.delete({
            where: { id: Number(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting evento' });
    }
};

module.exports = {
    getAllEventos,
    getEventoById,
    createEvento,
    updateEvento,
    deleteEvento,
};