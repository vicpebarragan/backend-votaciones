const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllOptions = async (req, res) => {
    try {
        const options = await prisma.rbu_opcion_lista.findMany();
        res.json(options);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching options' });
    }
};

const getOptionById = async (req, res) => {
    const { id } = req.params;
    try {
        const option = await prisma.rbu_opcion_lista.findUnique({
            where: { id: parseInt(id) },
        });
        if (option) {
            res.json(option);
        } else {
            res.status(404).json({ error: 'Option not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching option' });
    }
};

const createOption = async (req, res) => {
    try {

        const lastOption = await prisma.rbu_opcion_lista.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          req.body.id = lastOption ? lastOption.id + 1 : 1;
          req.body.fecha_ingreso = new Date();
        const newOption = await prisma.rbu_opcion_lista.create({
            data: req.body,
        });
        res.status(201).json(newOption);
    } catch (error) {
        res.status(500).json({ error: 'Error creating option' });
    }
};

const updateOption = async (req, res) => {
    const { id } = req.params;
    try {
        req.body.fecha_modificacion = new Date();
        const updatedOption = await prisma.rbu_opcion_lista.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.json(updatedOption);
    } catch (error) {
        res.status(500).json({ error: 'Error updating option' });
    }
};

const deleteOption = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.rbu_opcion_lista.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting option' });
    }
};

module.exports = {
    getAllOptions,
    getOptionById,
    createOption,
    updateOption,
    deleteOption,
};