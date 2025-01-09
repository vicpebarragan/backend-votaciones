const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllOptions = async (req, res) => {
    try {
        const options = await prisma.rbu_opcion_consulta.findMany();
        res.status(200).json(options);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching options' });
    }
};

const getOptionById = async (req, res) => {
    const { id } = req.params;
    try {
        const option = await prisma.rbu_opcion_consulta.findUnique({
            where: { id: parseInt(id) },
        });
        if (option) {
            res.status(200).json(option);
        } else {
            res.status(404).json({ error: 'Option not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching option' });
    }
};

const createOption = async (req, res) => {
    try {
        const newOption = await prisma.rbu_opcion_consulta.create({
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
        const updatedOption = await prisma.rbu_opcion_consulta.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.status(200).json(updatedOption);
    } catch (error) {
        res.status(500).json({ error: 'Error updating option' });
    }
};

const deleteOption = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.rbu_opcion_consulta.delete({
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