const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todas las parroquias
exports.getParroquias = async (req, res) => {
    try {
        const parroquias = await prisma.parroquia.findMany();
        res.status(200).json(parroquias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una parroquia por ID
exports.getParroquiaById = async (req, res) => {
    try {
        const parroquia = await prisma.parroquia.findUnique({
            where: { id: parseInt(req.params.id) }
        });
        if (!parroquia) return res.status(404).json({ message: 'Parroquia no encontrada' });
        res.status(200).json(parroquia);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//Obtener una parroquia por canton_id
exports.getParroquiaByCantonId = async (req, res) => {
    try {
        const parroquia = await prisma.parroquia.findMany({
            where: { canton_id: parseInt(req.params.canton_id) }
        });
        if (!parroquia) return res.status(404).json({ message: 'Parroquia no encontrada' });
        res.status(200).json(parroquia);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Crear una nueva parroquia
exports.createParroquia = async (req, res) => {
    try {

        const lastParroquia = await prisma.parroquia.findFirst({

            orderBy: {
                id: 'desc',
                },
            });
            req.body.id = lastParroquia ? lastParroquia.id + 1 : 1;
            req.body.fecha_ingreso = new Date();
        const nuevaParroquia = await prisma.parroquia.create({
            data: req.body
        });
        res.status(201).json(nuevaParroquia);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar una parroquia existente
exports.updateParroquia = async (req, res) => {
    try {
        req.body.fecha_modificacion = new Date();
        const parroquia = await prisma.parroquia.update({
            where: { id: parseInt(req.params.id) },
            data: req.body
        });
        if (!parroquia) return res.status(404).json({ message: 'Parroquia no encontrada' });
        res.status(200).json(parroquia);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una parroquia
exports.deleteParroquia = async (req, res) => {
    try {
        const parroquia = await prisma.parroquia.delete({
            where: { id: parseInt(req.params.id) }
        });
        if (!parroquia) return res.status(404).json({ message: 'Parroquia no encontrada' });
        res.status(200).json({ message: 'Parroquia eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};