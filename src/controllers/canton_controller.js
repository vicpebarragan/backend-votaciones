const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all cantons
exports.getAllCantons = async (req, res) => {
    try {
        const cantons = await prisma.canton.findMany();
        res.status(200).json(cantons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single canton by ID
exports.getCantonById = async (req, res) => {
    try {
        const canton = await prisma.canton.findUnique({
            where: { id: parseInt(req.params.id) }
        });
        if (!canton) {
            return res.status(404).json({ message: 'Canton not found' });
        }
        res.status(200).json(canton);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new canton
exports.createCanton = async (req, res) => {
    try {
        const newCanton = await prisma.canton.create({
            data: {
                name: req.body.name,
                province: req.body.province
            }
        });
        res.status(201).json(newCanton);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a canton by ID
exports.updateCanton = async (req, res) => {
    try {
        const canton = await prisma.canton.findUnique({
            where: { id: parseInt(req.params.id) }
        });
        if (!canton) {
            return res.status(404).json({ message: 'Canton not found' });
        }

        const updatedCanton = await prisma.canton.update({
            where: { id: parseInt(req.params.id) },
            data: {
                name: req.body.name != null ? req.body.name : canton.name,
                province: req.body.province != null ? req.body.province : canton.province
            }
        });
        res.status(200).json(updatedCanton);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a canton by ID
exports.deleteCanton = async (req, res) => {
    try {
        const canton = await prisma.canton.findUnique({
            where: { id: parseInt(req.params.id) }
        });
        if (!canton) {
            return res.status(404).json({ message: 'Canton not found' });
        }

        await prisma.canton.delete({
            where: { id: parseInt(req.params.id) }
        });
        res.status(200).json({ message: 'Canton deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};