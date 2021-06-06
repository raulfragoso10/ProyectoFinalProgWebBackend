const express = require('express');

const routes = express.Router();

const {listar,/*obtenerDato,crear,editar,eliminar*/} = require ('../Controllers/proyectoController');

routes.get('/', listar);

/*routes.get('/:id', obtenerDato); 

routes.post('/', crear);*/

module.exports = routes;