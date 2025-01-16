const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllResponsabilidades = async (req, res) => {
    try {
        const responsabilidades = await prisma.responsabilidad.findMany();
        res.json(responsabilidades);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching responsabilidades' });
    }
};

const getResponsabilidadById = async (req, res) => {
    const { id } = req.params;
    try {
        const responsabilidad = await prisma.responsabilidad.findUnique({
            where: { id: parseInt(id) },
        });
        if (responsabilidad) {
            res.json(responsabilidad);
        } else {
            res.status(404).json({ error: 'Responsabilidad not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching responsabilidad' });
    }
};

const createResponsabilidad = async (req, res) => {
    try {

        const lastResponsabilidad = await prisma.responsabilidad.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          req.body.id = lastResponsabilidad ? lastResponsabilidad.id + 1 : 1;
          req.body.fecha_ingreso = new Date();
        const newResponsabilidad = await prisma.responsabilidad.create({
            data: req.body,
        });
        res.status(201).json(newResponsabilidad);
    } catch (error) {
        res.status(500).json({ error: 'Error creating responsabilidad' });
    }
};

const updateResponsabilidad = async (req, res) => {
    const { id } = req.params;
    try {
        req.body.fecha_modificacion = new Date();
        const updatedResponsabilidad = await prisma.responsabilidad.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.json(updatedResponsabilidad);
    } catch (error) {
        res.status(500).json({ error: 'Error updating responsabilidad' });
    }
};

const deleteResponsabilidad = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.responsabilidad.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting responsabilidad' });
    }
};

module.exports = {
    getAllResponsabilidades,
    getResponsabilidadById,
    createResponsabilidad,
    updateResponsabilidad,
    deleteResponsabilidad,
};