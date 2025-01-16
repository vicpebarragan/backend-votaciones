const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getMensajes = async (req, res) => {
    try {
        const mensajes = await prisma.mensaje.findMany();
        res.json(mensajes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los mensajes' });
    }
};

const getMensajeById = async (req, res) => {
    const { id } = req.params;
    try {
        const mensaje = await prisma.mensaje.findUnique({
            where: { id: Number(id) },
        });
        if (mensaje) {
            res.json(mensaje);
        } else {
            res.status(404).json({ error: 'Mensaje no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el mensaje' });
    }
};

const createMensaje = async (req, res) => {
    try {

        const lastMensaje = await prisma.mensaje.findFirst({
            orderBy: {
              id: 'desc',
            },
          });
          req.body.id = lastMensaje ? lastMensaje.id + 1 : 1;
          req.body.fecha_ingreso = new Date();
        const nuevoMensaje = await prisma.mensaje.create({
            data: req.body
        });
        res.status(201).json(nuevoMensaje);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el mensaje' });
    }
};

const updateMensaje = async (req, res) => {
    const { id } = req.params;
    try {

        req.body.fecha_modificacion = new Date();
        const mensajeActualizado = await prisma.mensaje.update({
            where: { id: Number(id) },
            data: req.body,
        });
        res.json(mensajeActualizado);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el mensaje' });
    }
};

const deleteMensaje = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.mensaje.delete({
            where: { id: Number(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el mensaje' });
    }
};

module.exports = {
    getMensajes,
    getMensajeById,
    createMensaje,
    updateMensaje,
    deleteMensaje,
};