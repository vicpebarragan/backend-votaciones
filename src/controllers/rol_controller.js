const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getRoles = async (req, res) => {
    try {
        const roles = await prisma.rol.findMany();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching roles' });
    }
};

const getRolById = async (req, res) => {
    const { id } = req.params;
    try {
        const rol = await prisma.rol.findUnique({
            where: { id: parseInt(id) },
        });
        if (rol) {
            res.status(200).json(rol);
        } else {
            res.status(404).json({ error: 'Role not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching role' });
    }
};

const createRol = async (req, res) => {
    const { name } = req.body;
    try {
        const newRol = await prisma.rol.create({
            data: { name },
        });
        res.status(201).json(newRol);
    } catch (error) {
        res.status(500).json({ error: 'Error creating role' });
    }
};

const updateRol = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const updatedRol = await prisma.rol.update({
            where: { id: parseInt(id) },
            data: { name },
        });
        res.status(200).json(updatedRol);
    } catch (error) {
        res.status(500).json({ error: 'Error updating role' });
    }
};

const deleteRol = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.rol.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting role' });
    }
};

module.exports = {
    getRoles,
    getRolById,
    createRol,
    updateRol,
    deleteRol,
};