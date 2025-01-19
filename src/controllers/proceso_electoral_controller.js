const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllProcesosElectorales = async (req, res) => {
    try {
        const procesosElectorales = await prisma.proceso_electoral.findMany();
        res.status(200).json(procesosElectorales);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching procesos electorales' });
    }
};

const getProcesoElectoralById = async (req, res) => {
    const { id } = req.params;
    try {
        const procesoElectoral = await prisma.proceso_electoral.findUnique({
            where: { id: Number(id) },
        });
        if (procesoElectoral) {
            res.status(200).json(procesoElectoral);
        } else {
            res.status(404).json({ error: 'Proceso electoral not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching proceso electoral' });
    }
};


const getProcesosElectoralesVigentes = async (req, res) => {
    try {
        const procesosElectorales = await prisma.proceso_electoral.findMany({
            where: {vigente: true},
    });
        res.status(200).json(procesosElectorales);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching procesos electorales' });
    }
}

const createProcesoElectoral = async (req, res) => {
    try {

        const lastProcesoElectoral = await prisma.proceso_electoral.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          req.body.id = lastProcesoElectoral ? lastProcesoElectoral.id + 1 : 1;
          req.body.fecha_ingreso = new Date();
        const newProcesoElectoral = await prisma.proceso_electoral.create({
            data: req.body
        });
        res.status(201).json(newProcesoElectoral);
    } catch (error) {
        res.status(500).json({ error: 'Error creating proceso electoral' });
    }
};

const updateProcesoElectoral = async (req, res) => {
    const { id } = req.params;
    try {
        req.body.fecha_modificacion = new Date();
        const updatedProcesoElectoral = await prisma.proceso_electoral.update({
            where: { id: Number(id) },
            data: req.body
        });
        res.status(200).json(updatedProcesoElectoral);
    } catch (error) {
        res.status(500).json({ error: 'Error updating proceso electoral' });
    }
};

const deleteProcesoElectoral = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.proceso_electoral.delete({
            where: { id: Number(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting proceso electoral' });
    }
};

module.exports = {
    getAllProcesosElectorales,
    getProcesoElectoralById,
    createProcesoElectoral,
    updateProcesoElectoral,
    deleteProcesoElectoral,
    getProcesosElectoralesVigentes
};