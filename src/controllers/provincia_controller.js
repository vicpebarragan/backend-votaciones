const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todas las provincias
exports.getAllProvincias = async (req, res) => {
  try {
    const provincias = await prisma.provincia.findMany();
    res.status(200).json(provincias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener provincias' });
  }
};

// Obtener una provincia por ID
exports.getProvinciaById = async (req, res) => {
  const { id } = req.params;
  try {
    const provincia = await prisma.provincia.findUnique({ where: { id: Number(id) } });
    if (!provincia) return res.status(404).json({ error: 'Provincia no encontrada' });
    res.status(200).json(provincia);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener provincia' });
  }
};

// Crear una nueva provincia
exports.createProvincia = async (req, res) => {
  const data = req.body;
  try {
    const newProvincia = await prisma.provincia.create({ data });
    res.status(201).json(newProvincia);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear provincia' });
  }
};

// Actualizar una provincia
exports.updateProvincia = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedProvincia = await prisma.provincia.update({
      where: { id: Number(id) },
      data,
    });
    res.status(200).json(updatedProvincia);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar provincia' });
  }
};

// Eliminar una provincia
exports.deleteProvincia = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.provincia.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar provincia' });
  }
};
