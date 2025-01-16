const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getDetalleActaConsulta = async (req, res) => {
    try {
        const detalleActaConsulta = await prisma.detalle_acta_consulta.findMany();
        res.status(200).json(detalleActaConsulta);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
};

const getDetalleActaConsultaById = async (req, res) => {
    const { id } = req.params;
    try {
        const detalleActaConsulta = await prisma.detalle_acta_consulta.findUnique({
            where: { id: Number(id) },
        });
        if (detalleActaConsulta) {
            res.json(detalleActaConsulta);
        } else {
            res.status(404).json({ error: 'Detalle Acta Consulta not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
};

const createDetalleActaConsulta = async (req, res) => {
    const { data } = req.body;
    try {


        const lastActaConsulta = await prisma.detalle_acta_consulta.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          data.id = lastActaConsulta ? lastActaConsulta.id + 1 : 1;
          data.fecha_ingreso = new Date();
        const newDetalleActaConsulta = await prisma.detalle_acta_consulta.create({
            data,
        });
        res.status(201).json(newDetalleActaConsulta);
    } catch (error) {
        res.status(500).json({ error: 'Error creating data' });
    }
};

const updateDetalleActaConsulta = async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    try {
        
        data.fecha_modificacion = new Date();
        const updatedDetalleActaConsulta = await prisma.detalle_acta_consulta.update({
            where: { id: Number(id) },
            data,
        });
        res.json(updatedDetalleActaConsulta);
    } catch (error) {
        res.status(500).json({ error: 'Error updating data' });
    }
};

const deleteDetalleActaConsulta = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.detalleActaConsulta.delete({
            where: { id: Number(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting data' });
    }
};

module.exports = {
    getDetalleActaConsulta,
    getDetalleActaConsultaById,
    createDetalleActaConsulta,
    updateDetalleActaConsulta,
    deleteDetalleActaConsulta,
};