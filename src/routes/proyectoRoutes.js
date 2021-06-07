const express = require('express');

const routes = express.Router();

const {listarCategoria, crearCategoria, eliminarCategoria, listarPersonal, crearPersonal, obtenerPersonal, editarPersonal, 
    eliminarPersonal, listarTickets, crearTicket, obtenerTicket, editarTicket, estatusTicket} = require ('../Controllers/proyectoController');

routes.get('/', listarCategoria);

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

routes.put('/ticket/:id', estatusTicket)

module.exports = routes;