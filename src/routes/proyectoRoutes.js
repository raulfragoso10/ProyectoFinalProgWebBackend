const express = require('express');

const routes = express.Router();

const {listarCategoria, selectCategoria, crearCategoria, personalConcatenado, eliminarCategoria, listarPersonal, crearPersonal, obtenerPersonal, editarPersonal, 
    eliminarPersonal, listarTickets, ticketFiltro, crearTicket, obtenerTicket, editarTicket,eliminarTicket, cambiarEstatus} = require ('../Controllers/proyectoController');

routes.get('/', listarCategoria);

routes.get('/ticketFiltro/:id', ticketFiltro); 

routes.get('/selectCategoria', selectCategoria);

routes.get('/personalConcatenado', personalConcatenado);

routes.post('/', crearCategoria);

routes.delete('/:id', eliminarCategoria); 

routes.get('/personal', listarPersonal);

routes.post('/personal', crearPersonal);

routes.get('/personal/:id', obtenerPersonal); 

routes.put('/personal/:id', editarPersonal);

routes.delete('/personal/:id', eliminarPersonal);

routes.get('/ticket', listarTickets);

routes.post('/ticket', crearTicket);

routes.get('/ticket/:id', obtenerTicket); 

routes.put('/ticket/:id', editarTicket)

routes.delete('/ticket/:id', eliminarTicket);

routes.put('/cambiarEstatus/:id', cambiarEstatus)

module.exports = routes;