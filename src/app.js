const express = require('express');
const app = express();
const routers = require('./routes/index.routes'); 

app.use('/Products', routers);

app.listen(3000, ()=>{
    console.log('Servidor a la espera de conexiones');   
});