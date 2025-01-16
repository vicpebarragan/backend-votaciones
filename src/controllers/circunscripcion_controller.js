const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todas las circunscripciones
exports.getAllCircunscripciones = async (req, res) => {
    try {
        const circunscripciones = await prisma.circunscripcion.findMany();
        res.status(200).json(circunscripciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una circunscripción por ID
exports.getCircunscripcionById = async (req, res) => {
    try {
        const circunscripcion = await prisma.circunscripcion.findUnique({
            where: { id: parseInt(req.params.id) }
        });
        if (!circunscripcion) {
            return res.status(404).json({ message: 'Circunscripción no encontrada' });
        }
        res.status(200).json(circunscripcion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Obtener una circunscripción por provincia_id
exports.getCircunscripcionByProvinciaId = async (req, res) => {
    try {
        const circunscripcion = await prisma.circunscripcion.findMany({
            where: { provincia_id: parseInt(req.params.provincia_id) }
        });
        if (!circunscripcion) {
            return res.status(404).json({ message: 'Circunscripción no encontrada' });
        }
        res.status(200).json(circunscripcion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Crear una nueva circunscripción
exports.createCircunscripcion = async (req, res) => {
    try {

        const lastCircunscripcion = await prisma.circunscripcion.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          req.body.id = lastCircunscripcion ? lastCircunscripcion.id + 1 : 1;
          req.body.fecha_ingreso = new Date();
        const nuevaCircunscripcion = await prisma.circunscripcion.create({
            data: req.body
        });
        res.status(201).json(nuevaCircunscripcion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar una circunscripción existente
exports.updateCircunscripcion = async (req, res) => {
    try {

        req.body.fecha_modificacion = new Date();
        const circunscripcion = await prisma.circunscripcion.update({
            where: { id: parseInt(req.params.id) },
            data: req.body
        });
        res.status(200).json(circunscripcion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una circunscripción
exports.deleteCircunscripcion = async (req, res) => {
    try {
        const circunscripcion = await prisma.circunscripcion.delete({
            where: { id: parseInt(req.params.id) }
        });
        res.status(200).json({ message: 'Circunscripción eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};