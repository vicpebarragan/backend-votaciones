const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllProcesosDignidad = async (req, res) => {
    try {
        const procesosDignidad = await prisma.proceso_dignidad.findMany();
        res.status(200).json(procesosDignidad);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching procesos dignidad' });
    }
};

const getProcesoDignidadById = async (req, res) => {
    const { id } = req.params;
    try {
        const procesoDignidad = await prisma.proceso_dignidad.findUnique({
            where: { id: parseInt(id) },
        });
        if (procesoDignidad) {
            res.status(200).json(procesoDignidad);
        } else {
            res.status(404).json({ error: 'Proceso dignidad not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching proceso dignidad' });
    }
};

const getProcesoDignidadByProcesoElectoralId = async (req, res) => {
    const { proc_elect_id } = req.params;
    try {
        const procesoDignidad = await prisma.proceso_dignidad.findMany({
            where: { proceso_electoral_id: parseInt(proc_elect_id) },
        });
        if (procesoDignidad) {
            res.status(200).json(procesoDignidad);
        } else {
            res.status(404).json({ error: 'Proceso dignidad not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching proceso dignidad' });
    }
};

const createProcesoDignidad = async (req, res) => {
    try {


        const lastProcesoDignidad = await prisma.proceso_dignidad.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          req.body.id = lastProcesoDignidad ? lastProcesoDignidad.id + 1 : 1;
          req.body.fecha_ingreso = new Date();
        const newProcesoDignidad = await prisma.proceso_dignidad.create({
            data: req.body,
        });
        res.status(201).json(newProcesoDignidad);
    } catch (error) {
        res.status(500).json({ error: 'Error creating proceso dignidad' });
    }
};

const updateProcesoDignidad = async (req, res) => {
    const { id } = req.params;
    try {

        req.body.fecha_modificacion = new Date();
        const updatedProcesoDignidad = await prisma.proceso_dignidad.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.status(200).json(updatedProcesoDignidad);
    } catch (error) {
        res.status(500).json({ error: 'Error updating proceso dignidad' });
    }
};

const deleteProcesoDignidad = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.proceso_dignidad.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting proceso dignidad' });
    }
};

module.exports = {
    getAllProcesosDignidad,
    getProcesoDignidadById,
    createProcesoDignidad,
    updateProcesoDignidad,
    deleteProcesoDignidad,
    getProcesoDignidadByProcesoElectoralId
};