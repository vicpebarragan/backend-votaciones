const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todos los recintos electorales
exports.getRecintosElectorales = async (req, res) => {
    try {
        const recintos = await prisma.recinto_Electoral.findMany();
        res.status(200).json(recintos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un recinto electoral por ID
exports.getRecintoElectoralById = async (req, res) => {
    try {
        const recinto = await prisma.recinto_Electoral.findUnique({
            where: { id: parseInt(req.params.id) }
        });
        if (!recinto) {
            return res.status(404).json({ message: 'Recinto electoral no encontrado' });
        }
        res.status(200).json(recinto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo recinto electoral
exports.createRecintoElectoral = async (req, res) => {
    try {

        const lastRecinto = await prisma.recinto_Electoral.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          req.body.id = lastRecinto ? lastRecinto.id + 1 : 1;
          req.body.fecha_ingreso = new Date();
        const newRecinto = await prisma.recinto_Electoral.create({
            data: req.body
        });
        res.status(201).json(newRecinto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un recinto electoral existente
exports.updateRecintoElectoral = async (req, res) => {
    try {
        req.body.fecha_modificacion = new Date();
        const updatedRecinto = await prisma.recinto_Electoral.update({
            where: { id: parseInt(req.params.id) },
            data: req.body
        });
        if (!updatedRecinto) {
            return res.status(404).json({ message: 'Recinto electoral no encontrado' });
        }
        res.status(200).json(updatedRecinto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un recinto electoral
exports.deleteRecintoElectoral = async (req, res) => {
    try {
        const deletedRecinto = await prisma.recinto_Electoral.delete({
            where: { id: parseInt(req.params.id) }
        });
        if (!deletedRecinto) {
            return res.status(404).json({ message: 'Recinto electoral no encontrado' });
        }
        res.status(200).json({ message: 'Recinto electoral eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};