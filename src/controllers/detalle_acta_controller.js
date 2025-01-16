const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getDetalleActas = async (req, res) => {
    try {
        const detalleActas = await prisma.detalleActa.findMany();
        res.json(detalleActas);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching detalle actas' });
    }
};

const getDetalleActaById = async (req, res) => {
    const { id } = req.params;
    try {
        const detalleActa = await prisma.detalleActa.findUnique({
            where: { id: Number(id) },
        });
        if (detalleActa) {
            res.json(detalleActa);
        } else {
            res.status(404).json({ error: 'Detalle acta not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching detalle acta' });
    }
};

const createDetalleActa = async (req, res) => {
    const { data } = req.body;
    try {

        const lastDetalleActa = await prisma.detalleActa.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          data.id = lastDetalleActa ? lastDetalleActa.id + 1 : 1;
          data.fecha_ingreso = new Date();
        const newDetalleActa = await prisma.detalleActa.create({
            data,
        });
        res.status(201).json(newDetalleActa);
    } catch (error) {
        res.status(500).json({ error: 'Error creating detalle acta' });
    }
};

const updateDetalleActa = async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    try {
        
        data.fecha_modificacion = new Date();
        const updatedDetalleActa = await prisma.detalleActa.update({
            where: { id: Number(id) },
            data,
        });
        res.json(updatedDetalleActa);
    } catch (error) {
        res.status(500).json({ error: 'Error updating detalle acta' });
    }
};

const deleteDetalleActa = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.detalleActa.delete({
            where: { id: Number(id) },
        });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting detalle acta' });
    }
};

module.exports = {
    getDetalleActas,
    getDetalleActaById,
    createDetalleActa,
    updateDetalleActa,
    deleteDetalleActa,
};