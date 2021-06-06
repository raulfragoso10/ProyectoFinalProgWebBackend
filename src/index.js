const express= require('express');
// const cors = require ('cors') para despues


//Inicializando
const app = express();

//configuración
app.set('port',process.env.PORT || 3000);

//middleware
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());
// app.use(cors()); para despues

//base de datos
require('./config/connection');

// rutas
app.use(require('./routes/proyectoRoutes'));

// levantar servidor
app.listen(app.get('port'),(error)=>{
    if(error){
        console.log("Ha ocurrido un error:",error);
    }else{
            console.log(`Servidor en puerto: ${app.get('port')}`)
    }
});