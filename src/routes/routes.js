// routes.js
const express = require('express');
const router = express.Router();

// Importar todos los controladores
const actaController = require('../controllers/acta_controller');
const cantonController = require('../controllers/canton_controller');
const chatController = require('../controllers/chat_controller');
const chatUsuarioController = require('../controllers/chat_usuario_controller');
const circunscripcionController = require('../controllers/circunscripcion_controller');
const detalleActaConsultaController = require('../controllers/detalle_acta_consulta_controller');
const detalleActaController = require('../controllers/detalle_acta_controller');
const dignidadController = require('../controllers/dignidad_controller');
const eventoController = require('../controllers/evento_controller');
const juntaController = require('../controllers/junta_controller');
const mensajeController = require('../controllers/mensaje_controller');
const noticiaController = require('../controllers/noticia_controller');
const parroquiaController = require('../controllers/parroquia_controller');
const partidoPoliticoController = require('../controllers/partido_politico_controller');
const preguntaConsultaPopularController = require('../controllers/pregunta_consulta_popular_controller');
const procesoDignidadController = require('../controllers/proceso_dignidad_controller');
const procesoElectoralController = require('../controllers/proceso_electoral_controller');
const provinciaController = require('../controllers/provincia_controller');
const rbuController = require('../controllers/rbu_controller');
const rbuOpcionConsultaController = require('../controllers/rbu_opcion_consulta_controller');
const rbuOpcionDignidadController = require('../controllers/rbu_opcion_dignidad_controller');
const rbuOpcionListaController = require('../controllers/rbu_opcion_lista_controller');
const recintoElectoralController = require('../controllers/recinto_electoral_controller');
const responsabilidadController = require('../controllers/responsabilidad_controller');
const rolController = require('../controllers/rol_controller');
const tipoChatController = require('../controllers/tipo_chat_controller');
const tipoDignidadController = require('../controllers/tipo_dignidad_controller');
const tipoEleccionController = require('../controllers/tipo_eleccion_controller');
const usuarioController = require('../controllers/usuario_controller');

// Función para agregar las rutas básicas
const registerRoutes = (path, get, getById, create, update, del
) => {
  router.get(`/${path}`, get);
  router.get(`/${path}/:id`, getById);
  router.post(`/${path}`, create);
  router.put(`/${path}/:id`, update);
  router.delete(`/${path}/:id`, del);
};

// Registrar rutas para todas las entidades
registerRoutes('actas', actaController.getAllActas, actaController.getActaById, actaController.createActa, actaController.updateActa, actaController.deleteActa);
registerRoutes('cantones', cantonController.getAllCantons, cantonController.getCantonById, cantonController.createCanton, cantonController.updateCanton, cantonController.deleteCanton);
registerRoutes('chats', chatController.getAllChats, chatController.getChatById, chatController.createChat, chatController.updateChat, chatController.deleteChat);
registerRoutes('chat-usuarios', chatUsuarioController.getAllChatUsuarios, chatUsuarioController.getChatUsuarioById, chatUsuarioController.createChatUsuario, chatUsuarioController.updateChatUsuario, chatUsuarioController.deleteChatUsuario);
registerRoutes('circunscripciones', circunscripcionController.getAllCircunscripciones, circunscripcionController.getCircunscripcionById, circunscripcionController.createCircunscripcion, circunscripcionController.updateCircunscripcion, circunscripcionController.deleteCircunscripcion);
registerRoutes('detalle-actas-consulta', detalleActaConsultaController.getDetalleActaConsulta, detalleActaConsultaController.getDetalleActaConsultaById, detalleActaConsultaController.createDetalleActaConsulta, detalleActaConsultaController.updateDetalleActaConsulta, detalleActaConsultaController.deleteDetalleActaConsulta);
registerRoutes('detalle-actas', detalleActaController.getDetalleActas, detalleActaController.getDetalleActaById, detalleActaController.createDetalleActa, detalleActaController.updateDetalleActa, detalleActaController.deleteDetalleActa);
registerRoutes('dignidades', dignidadController.getAllDignidades, dignidadController.getDignidadById, dignidadController.createDignidad, dignidadController.updateDignidad, dignidadController.deleteDignidad);
registerRoutes('eventos', eventoController.getAllEventos, eventoController.getEventoById, eventoController.createEvento, eventoController.updateEvento, eventoController.deleteEvento);
registerRoutes('juntas', juntaController.getJuntas, juntaController.getJuntaById, juntaController.createJunta, juntaController.updateJunta, juntaController.deleteJunta);
registerRoutes('mensajes', mensajeController.getMensajes, mensajeController.getMensajeById, mensajeController.createMensaje, mensajeController.updateMensaje, mensajeController.deleteMensaje);
registerRoutes('noticias', noticiaController.getNoticias, noticiaController.getNoticiaById, noticiaController.createNoticia, noticiaController.updateNoticia, noticiaController.deleteNoticia);
registerRoutes('parroquias', parroquiaController.getParroquias, parroquiaController.getParroquiaById, parroquiaController.createParroquia, parroquiaController.updateParroquia, parroquiaController.deleteParroquia);
registerRoutes('partidos-politicos', partidoPoliticoController.getAllPartidosPoliticos, partidoPoliticoController.getPartidoPoliticoById, partidoPoliticoController.createPartidoPolitico, partidoPoliticoController.updatePartidoPolitico, partidoPoliticoController.deletePartidoPolitico);
registerRoutes('preguntas-consulta-popular', preguntaConsultaPopularController.getPreguntas, preguntaConsultaPopularController.getPreguntaById, preguntaConsultaPopularController.createPregunta, preguntaConsultaPopularController.updatePregunta, preguntaConsultaPopularController.deletePregunta);
registerRoutes('procesos-dignidad', procesoDignidadController.getAllProcesosDignidad, procesoDignidadController.getProcesoDignidadById, procesoDignidadController.createProcesoDignidad, procesoDignidadController.updateProcesoDignidad, procesoDignidadController.deleteProcesoDignidad);
registerRoutes('procesos-electorales', procesoElectoralController.getAllProcesosElectorales, procesoElectoralController.getProcesoElectoralById, procesoElectoralController.createProcesoElectoral, procesoElectoralController.updateProcesoElectoral, procesoElectoralController.deleteProcesoElectoral);
registerRoutes('provincias', provinciaController.getAllProvincias, provinciaController.getProvinciaById, provinciaController.createProvincia, provinciaController.updateProvincia, provinciaController.deleteProvincia);
registerRoutes('rbu', rbuController.getAllRbus, rbuController.getRbuById, rbuController.createRbu, rbuController.updateRbu, rbuController.deleteRbu);
registerRoutes('rbu-opciones-consulta', rbuOpcionConsultaController.getAllOptions, rbuOpcionConsultaController.getOptionById, rbuOpcionConsultaController.createOption, rbuOpcionConsultaController.updateOption, rbuOpcionConsultaController.deleteOption);
registerRoutes('rbu-opciones-dignidad', rbuOpcionDignidadController.getAllOptions, rbuOpcionDignidadController.getOptionById, rbuOpcionDignidadController.createOption, rbuOpcionDignidadController.updateOption, rbuOpcionDignidadController.deleteOption);
registerRoutes('rbu-opciones-lista', rbuOpcionListaController.getAllOptions, rbuOpcionListaController.getOptionById, rbuOpcionListaController.createOption, rbuOpcionListaController.updateOption, rbuOpcionListaController.deleteOption);
registerRoutes('recintos-electorales', recintoElectoralController.getRecintosElectorales, recintoElectoralController.getRecintoElectoralById, recintoElectoralController.createRecintoElectoral, recintoElectoralController.updateRecintoElectoral, recintoElectoralController.deleteRecintoElectoral);
registerRoutes('responsabilidades', responsabilidadController.getAllResponsabilidades, responsabilidadController.getResponsabilidadById, responsabilidadController.createResponsabilidad, responsabilidadController.updateResponsabilidad, responsabilidadController.deleteResponsabilidad);
registerRoutes('roles', rolController.getRoles, rolController.getRolById, rolController.createRol, rolController.updateRol, rolController.deleteRol);
registerRoutes('tipos-chat', tipoChatController.getAllTipoChats, tipoChatController.getTipoChatById, tipoChatController.createTipoChat, tipoChatController.updateTipoChat, tipoChatController.deleteTipoChat);
registerRoutes('tipos-dignidad', tipoDignidadController.getAllTipoDignidades, tipoDignidadController.getTipoDignidadById, tipoDignidadController.createTipoDignidad, tipoDignidadController.updateTipoDignidad, tipoDignidadController.deleteTipoDignidad);
registerRoutes('tipos-eleccion', tipoEleccionController.getAllTipoElecciones, tipoEleccionController.getTipoEleccionById, tipoEleccionController.createTipoEleccion, tipoEleccionController.updateTipoEleccion, tipoEleccionController.deleteTipoEleccion);
registerRoutes('usuarios', usuarioController.getUsuarios, usuarioController.getUsuarioById, usuarioController.createUsuario, usuarioController.updateUsuario, usuarioController.deleteUsuario);

//Cantones extra
router.get('/cantones/provincia/:provincia_id', cantonController.getCantonsByProvinceId);

module.exports = router;
