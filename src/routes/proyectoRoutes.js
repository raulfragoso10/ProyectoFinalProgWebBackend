const express = require('express');

const routes = express.Router();

const {listarCategoria, crearCategoria, eliminarCategoria, listarPersonal, crearPersonal, obtenerPersonal, editarPersonal
, listarTickets, crearTicket, obtenerTicket, editarTicket, estatusTicket} = require ('../Controllers/proyectoController');

routes.get('/', listarCategoria);

routes.post('/', crearCategoria);

routes.delete('/:id', eliminarCategoria); 

routes.get('/', listarPersonal);

routes.post('/', crearPersonal);

routes.get('/:id', obtenerPersonal); 

routes.put('/:id', editarPersonal)

routes.get('/', listarTickets);

routes.post('/', crearTicket);

routes.get('/:id', obtenerTicket); 

routes.put('/:id', editarTicket)

routes.put('/:id', estatusTicket)

module.exports = routes;