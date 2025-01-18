const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getJuntasUsuario = async (req, res) => {
    try {
        const noticias = await prisma.junta_usuario.findMany();
        res.json(noticias);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las junta por usuario' });
    }
};

const getJuntaUsuarioById = async (req, res) => {
    const { id } = req.params;
    try {
        const juntaUsuario = await prisma.junta_usuario.findUnique({
            where: { id: Number(id) },
        });
        if (juntaUsuario) {
            res.json(juntaUsuario);
        } else {
            res.status(404).json({ error: 'junta por usuario no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la junta por usuario' });
    }
};

const createJuntaUsuario = async (req, res) => {
    try {


        const lastJuntaUsuario = await prisma.junta_usuario.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          req.body.id = lastJuntaUsuario ? lastJuntaUsuario.id + 1 : 1;
          req.body.fecha_ingreso = new Date();
        const nuevaJuntaUsuario = await prisma.junta_usuario.create({
            data: req.body,
        });
        res.status(201).json(nuevaJuntaUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la junta por usuario' });
    }
};

const updateJuntaUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        req.body.fecha_modificacion = new Date();
        const juntaUsuarioActualizada = await prisma.junta_usuario.update({
            where: { id: Number(id) },
            data: req.body,
        });
        res.json(juntaUsuarioActualizada);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la junta por usuario' });
    }
};

const deleteJuntaUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.juntaUsuario.delete({
            where: { id: Number(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la junta por usuario' });
    }
};

module.exports = {
    getJuntasUsuario,
    getJuntaUsuarioById,
    createJuntaUsuario,
    updateJuntaUsuario,
    deleteJuntaUsuario,
};