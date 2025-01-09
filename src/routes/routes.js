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
const registerRoutes = (path, controller) => {
  router.get(`/${path}`, controller.getAll);
  router.get(`/${path}/:id`, controller.getById);
  router.post(`/${path}`, controller.create);
  router.put(`/${path}/:id`, controller.update);
  router.delete(`/${path}/:id`, controller.delete);
};

// Registrar rutas para todas las entidades
registerRoutes('actas', actaController);
registerRoutes('cantones', cantonController);
registerRoutes('chats', chatController);
registerRoutes('chat-usuarios', chatUsuarioController);
registerRoutes('circunscripciones', circunscripcionController);
registerRoutes('detalle-actas-consulta', detalleActaConsultaController);
registerRoutes('detalle-actas', detalleActaController);
registerRoutes('dignidades', dignidadController);
registerRoutes('eventos', eventoController);
registerRoutes('juntas', juntaController);
registerRoutes('mensajes', mensajeController);
registerRoutes('noticias', noticiaController);
registerRoutes('parroquias', parroquiaController);
registerRoutes('partidos-politicos', partidoPoliticoController);
registerRoutes('preguntas-consulta-popular', preguntaConsultaPopularController);
registerRoutes('procesos-dignidad', procesoDignidadController);
registerRoutes('procesos-electorales', procesoElectoralController);
registerRoutes('provincias', provinciaController);
registerRoutes('rbu', rbuController);
registerRoutes('rbu-opciones-consulta', rbuOpcionConsultaController);
registerRoutes('rbu-opciones-dignidad', rbuOpcionDignidadController);
registerRoutes('rbu-opciones-lista', rbuOpcionListaController);
registerRoutes('recintos-electorales', recintoElectoralController);
registerRoutes('responsabilidades', responsabilidadController);
registerRoutes('roles', rolController);
registerRoutes('tipos-chat', tipoChatController);
registerRoutes('tipos-dignidad', tipoDignidadController);
registerRoutes('tipos-eleccion', tipoEleccionController);
registerRoutes('usuarios', usuarioController);

module.exports = router;
