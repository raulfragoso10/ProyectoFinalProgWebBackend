const mysql = require ('mysql');

const objectConnection = {
    "host": "localhost",
    "port": "3306",
    "user": "root",
    "password": "quintero173",
    "database": "tickets_node"
}

// creando conexión
const myConn = mysql.createConnection(objectConnection);

//conectando
myConn.connect((error) => {
    if(error) {
        console.log("Error bd:", error);
    }else {
        console.log("Base de datos conectada");
    }
});

module.exports = myConn; 