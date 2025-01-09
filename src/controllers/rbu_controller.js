const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllRbus = async (req, res) => {
    try {
        const rbus = await prisma.rbu.findMany();
        res.json(rbus);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching RBUs' });
    }
};

const getRbuById = async (req, res) => {
    const { id } = req.params;
    try {
        const rbu = await prisma.rbu.findUnique({
            where: { id: parseInt(id) },
        });
        if (rbu) {
            res.json(rbu);
        } else {
            res.status(404).json({ error: 'RBU not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching RBU' });
    }
};

const createRbu = async (req, res) => {
    try {
        const newRbu = await prisma.rbu.create({
            data: req.body,
        });
        res.status(201).json(newRbu);
    } catch (error) {
        res.status(500).json({ error: 'Error creating RBU' });
    }
};

const updateRbu = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedRbu = await prisma.rbu.update({
            where: { id: parseInt(id) },
            data: req.body
        });
        res.json(updatedRbu);
    } catch (error) {
        res.status(500).json({ error: 'Error updating RBU' });
    }
};

const deleteRbu = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.rbu.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting RBU' });
    }
};

module.exports = {
    getAllRbus,
    getRbuById,
    createRbu,
    updateRbu,
    deleteRbu,
};