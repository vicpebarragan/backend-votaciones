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
    try {


        const lastNoticia = await prisma.noticia.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          req.body.id = lastNoticia ? lastNoticia.id + 1 : 1;
          req.body.fecha_ingreso = new Date();
        const nuevaNoticia = await prisma.noticia.create({
            data: req.body,
        });
        res.status(201).json(nuevaNoticia);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la noticia' });
    }
};

const updateNoticia = async (req, res) => {
    const { id } = req.params;
    try {
        req.body.fecha_modificacion = new Date();
        const noticiaActualizada = await prisma.noticia.update({
            where: { id: Number(id) },
            data: req.body,
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