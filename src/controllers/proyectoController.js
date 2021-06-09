const { request } = require('express');
const connection = require('../config/connection');

function listarCategoria(req, res) {
    if(connection) {
        let sql = "SELECT * FROM categoria";
        connection.query(sql, (err,contenido) => {
            if(err) {
                res.json(err);
            } else {
                console.log(contenido);
                res.json(contenido);
            }
        });
    }
}

function selectCategoria(req, res) {
    if(connection) {
        let sql = "SELECT id as value, nombre as text FROM categoria";
        connection.query(sql, (err,contenido) => {
            if(err) {
                res.json(err);
            } else {
                console.log(contenido);
                res.json(contenido);
            }
        });
    }
}

function crearCategoria(req, res){
    if(connection){
        console.log(req.body);
        const categoria = req.body;

        if(!categoria.nombre){
            return res.status(400).send({error: true, mensaje: "El nombre de la categoria es obligatorio"});
        }

        let sql = "INSERT INTO categoria set ?";

        connection.query(sql, [categoria], (err, data) => {
            if(err){
                console.log(err);
            } else {
            
                res.json({error: false, data, mensaje: "Categoria agregada con exito"});
            }
        })
    }
}

function eliminarCategoria(req, res) {
    if(connection) {
        const { id } = req.params;
        let sql = "DELETE FROM categoria WHERE id = ?";
        connection.query(sql, [id], (err, data) => {
            if(err) {
                return res.status(400).send({error: true, mensaje: "No se puede eliminar por llave foranea"});
            } else {
                let mensaje = "";
                if(data.affectedRows === 0) {
                    mensaje = "Categoria no encontrada";
                } else {
                    mensaje = "Categoria eliminada con éxito";
                }

                res.json({error: false, data, mensaje});
            }
        })
    }
}

function listarPersonal(req, res) {
    if(connection) {
        let sql = "SELECT * FROM personal";
        connection.query(sql, (err,contenido) => {
            if(err) {
                res.json(err);
            } else {
                console.log(contenido);
                res.json(contenido);
            }
        });
    }
}

function crearPersonal(req, res){
    if(connection){
        console.log(req.body);
        const personal = req.body;

        if(!personal.nombre){
            return res.status(400).send({error: true, mensaje: "El nombre del personal es obligatorio"});
        }

        if(!personal.apellidos){
            return res.status(400).send({error: true, mensaje: "Los apellidos del personal son obligatorios"});
        }

        let sql = "INSERT INTO personal set ?";

        connection.query(sql, [personal], (err, data) => {
            if(err){
                console.log(err);
            } else {
            
                res.json({error: false, data, mensaje: "Personal agregada con exito"});
            }
        })
    }
}

function obtenerPersonal(req, res) {
    if(connection){
        const { id } = req.params; 
        let sql = `SELECT * FROM personal WHERE id = ${connection.escape(id)}`;
        connection.query(sql, (err, personal) => {
            if(err){
                console.log(err);
            } else {
                var mensaje1 = "";
                if(personal === undefined || personal.length == 0)
                mensaje1 = "Personal no encontrado";

                res.json({data: personal[0], mensaje: mensaje1});
            }
        })
    }

}



function editarPersonal(req, res) {
    if(connection){
        const { id } = req.params;
        const personal = req.body;

        let sql = "UPDATE personal set ? WHERE id = ?";

        connection.query(sql, [personal, id], (err, data) => {
            if(err) {
                res.json(err);
            } else {
                let mensaje = "";
                if(data.changedRows === 0) {
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Personal actualizado con exito."
                }

                res.json({error: false, data, mensaje});
            }
        } )


    }
}

function eliminarPersonal(req, res) {
    if(connection) {
        const { id } = req.params;
        let sql = "DELETE FROM personal WHERE id = ?";
        connection.query(sql, [id], (err, data) => {
            if(err) {
                return res.status(400).send({error: true, mensaje: "No se puede eliminar por llave foranea"});
            } else {
                let mensaje = "";
                if(data.affectedRows === 0) {
                    mensaje = "Personal no encontrado";
                } else {
                    mensaje = "Personal eliminado con éxito";
                }

                res.json({error: false, data, mensaje});
            }
        })
    }
}

/*function listarTickets(req, res) {
    if(connection) {
        let sql = "select id, nombre, descripcion, prioridad, personal, categoria, case when estatus = 'ABT' then 'Abierto' when estatus = 'ESP' then 'En espera' when estatus = 'FIN' then 'Finalizado' end as estatus from tickets";
        connection.query(sql, (err,contenido) => {
            if(err) {
                res.json(err);
            } else {
                console.log(contenido);
                res.json(contenido);
            }
        });
    }
}*/

function listarTickets(req, res) {
    if(connection) {
        let sql = "select t.id, t.nombre, t.descripcion, case when t.prioridad = '1' then 'Alta' when t.prioridad = '2' then 'Media' when t.prioridad = '3' then 'Alta' end as prioridad, CONCAT(p.nombre, ' ', p.apellidos) As personal , c.nombre as categoria, case when t.estatus = 'ABT' then 'Abierto' when t.estatus = 'ESP' then 'En espera' when t.estatus = 'FIN' then 'Finalizado' end as estatus  from tickets t inner join personal p on t.personal = p.id inner join categoria c on t.categoria = c.id";
        connection.query(sql, (err,contenido) => {
            if(err) {
                res.json(err);
            } else {
                console.log(contenido);
                res.json(contenido);
            }
        });
    }
}


function crearTicket(req, res){
    if(connection){
        console.log(req.body);
        const ticket = req.body;

        if(!ticket.nombre){
            return res.status(400).send({error: true, mensaje: "El nombre del ticket es obligatorio"});
        }

        if(!ticket.prioridad){
            return res.status(400).send({error: true, mensaje: "La prioridad del ticket es obligatoria"});
        }

        if(!ticket.personal){
            return res.status(400).send({error: true, mensaje: "El personal del ticket es obligatorio"});
        }

        if(!ticket.categoria){
            return res.status(400).send({error: true, mensaje: "La categoria del ticket es obligatoria"});
        }

        let sql = "INSERT INTO tickets set ?";

        connection.query(sql, [ticket], (err, data) => {
            if(err){
                console.log(err);
            } else {
            
                res.json({error: false, data, mensaje: "Ticket agregado con exito"});
            }
        })
    }
}

function obtenerTicket(req, res) {
    if(connection){
        const { id } = req.params; 
        let sql = `SELECT * FROM tickets WHERE id = ${connection.escape(id)}`;
        connection.query(sql, (err, ticket) => {
            if(err){
                console.log(err);
            } else {
                var mensaje1 = "";
                if(ticket === undefined || ticket.length == 0)
                mensaje1 = "Ticket no encontrado";

                res.json({data: ticket[0], mensaje: mensaje1});
            }
        })
    }

}

function ticketFiltro(req, res) {
    if(connection){
        const { id } = req.params; 
        let sql = `select t.id, t.nombre, t.descripcion, case when t.prioridad = '1' then 'Alta' when t.prioridad = '2' then 'Media' when t.prioridad = '3' then 'Alta' end as prioridad, CONCAT(p.nombre, ' ', p.apellidos) As personal , c.nombre as categoria, case when t.estatus = 'ABT' then 'Abierto' when t.estatus = 'ESP' then 'En espera' when t.estatus = 'FIN' then 'Finalizado' end as estatus  from tickets t inner join personal p on t.personal = p.id inner join categoria c on t.categoria = c.id where t.categoria = ${connection.escape(id)}` ;
        connection.query(sql, (err,contenido) => {
            if(err) {
                res.json(err);
                console.log(err)
            } else {
                if(contenido.length < 1){
                    return res.status(400).send({error: true, mensaje: "No se encontro ninguno"});                    
                }
                console.log(contenido);
                res.json(contenido);
            }
        });
    }

}

function editarTicket(req, res) {
    console.log(req.body)
    if(connection){
        const { id } = req.params;
        const ticket = req.body;

        let sql = "UPDATE tickets set ? WHERE id = ?";

        connection.query(sql, [ticket, id], (err, data) => {
            if(err) {
                res.json(err);
            } else {
                let mensaje = "";
                if(data.changedRows === 0) {
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Ticket actualizado con exito."
                }

                res.json({error: false, data, mensaje});
            }
        } )


    }
}

function eliminarTicket(req, res) {
    if(connection) {
        const { id } = req.params;
        let sql = "DELETE FROM tickets WHERE id = ?";
        connection.query(sql, [id], (err, data) => {
            if(err) {
                res.json(err);
            } else {
                let mensaje = "";
                if(data.affectedRows === 0) {
                    mensaje = "Ticket no encontrado";
                } else {
                    mensaje = "Ticket eliminado con éxito";
                }

                res.json({error: false, data, mensaje});
            }
        })
    }
}

function personalConcatenado(req, res) {
    if(connection) {
        let sql = "SELECT id as value, CONCAT(nombre, ' ', apellidos) As text from personal;";
        connection.query(sql, (err,contenido) => {
            if(err) {
                res.json(err);
            } else {
                console.log(contenido);
                res.json(contenido);
            }
        });
    }
}

function cambiarEstatus(req, res) {
    console.log(req.body)
    if(connection){
        const { id } = req.params;

        let sql = "UPDATE tickets set estatus = ? WHERE id = ?";

        connection.query(sql, [req.body.estatus, id], (err, data) => {
            if(err) {
                res.json(err);
            } else {
                let mensaje = "";
                if(data.changedRows === 0) {
                    mensaje = "El estatus es el mismo"
                } else {
                    mensaje = "Estatus actualizado con exito"
                }
                res.json({error: false, data, mensaje});
            }
        } )
    }
}

module.exports = {
    listarCategoria,
    selectCategoria,
    crearCategoria,
    eliminarCategoria,
    personalConcatenado,
    listarPersonal,
    crearPersonal,
    obtenerPersonal,
    editarPersonal,
    eliminarPersonal,
    listarTickets,
    crearTicket,
    obtenerTicket,
    editarTicket,
    eliminarTicket,
    ticketFiltro,
    cambiarEstatus
}