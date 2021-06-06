const { request } = require('express');
const connection = require('../config/connection');

function listar(req, res) {
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
module.exports = {
    listar
}