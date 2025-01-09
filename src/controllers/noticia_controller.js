const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getNoticias = async (req, res) => {
    try {
        const noticias = await prisma.noticia.findMany();
        res.json(noticias);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las noticias' });
    }
};

const getNoticiaById = async (req, res) => {
    const { id } = req.params;
    try {
        const noticia = await prisma.noticia.findUnique({
            where: { id: Number(id) },
        });
        if (noticia) {
            res.json(noticia);
        } else {
            res.status(404).json({ error: 'Noticia no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la noticia' });
    }
};

const createNoticia = async (req, res) => {
    const { titulo, contenido, autor } = req.body;
    try {
        const nuevaNoticia = await prisma.noticia.create({
            data: { titulo, contenido, autor },
        });
        res.status(201).json(nuevaNoticia);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la noticia' });
    }
};

const updateNoticia = async (req, res) => {
    const { id } = req.params;
    const { titulo, contenido, autor } = req.body;
    try {
        const noticiaActualizada = await prisma.noticia.update({
            where: { id: Number(id) },
            data: { titulo, contenido, autor },
        });
        res.json(noticiaActualizada);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la noticia' });
    }
};

const deleteNoticia = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.noticia.delete({
            where: { id: Number(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la noticia' });
    }
};

module.exports = {
    getNoticias,
    getNoticiaById,
    createNoticia,
    updateNoticia,
    deleteNoticia,
};