const express = require('express');
const app = express();
const routers = require('./routes/index.routes'); 
let cors = require("cors");

app.use(cors());
app.use(express.json())
app.use('/', routers);


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})

app.listen(3000, ()=>{
    console.log('Servidor a la espera de conexiones');   
});