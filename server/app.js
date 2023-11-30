const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const fs = require('fs');
let products = JSON.parse(fs.readFileSync('./data/products.json')); //JSON -> JS Object

app.use(express.json()); // para que node compreda que trabajamos con datos (c.r.u.d) en un json
app.use(express.static(path.join(__dirname , '/public')));
//Routers, rutas web
app.use('/api/products', require('./routes/products')) //rutas de api/Products

app.listen(
    port,
    () => console.log(`Listening -> http://localhost:${port}`)
);

// /api/products
// TODO: UNIR TODOS LOS PRODUCTOS EN UN MISMO JSON -> LUEGO MODIFICAR LOS JS