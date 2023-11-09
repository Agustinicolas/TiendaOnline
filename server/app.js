const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
//const productos = require('public/json/productosAccesorios.json');

app.use(express.json() )
app.use(express.static("public"));

app.listen(
    port,
    () => console.log(`Listening on port ${port}`)
)

app.get('/', (req,res) => {
    res.status(200).sendFile('public/html/index.html', {root: __dirname});
})

app.get('/index.html', (req,res) => {
    res.status(200).sendFile('public/html/index.html', {root: __dirname});
})

app.get('/accesorios.html', (req,res) => {
    res.status(200).sendFile('public/html/accesorios.html', {root: __dirname});
})

app.get('/guiatalles.html', (req,res) => {
    res.status(200).sendFile('public/html/guiatalles.html', {root: __dirname});
})

app.get('/remeras.html', (req,res) => {
    res.status(200).sendFile('public/html/remeras.html', {root: __dirname});
})

app.get('/hoodies.html', (req,res) => {
    res.status(200).sendFile('public/html/hoodies.html', {root: __dirname});
})

// /api/products
// TODO: UNIR TODOS LOS PRODUCTOS EN UN MISMO JSON -> LUEGO MODIFICAR LOS JS

app.get('/api/products/', (req,res) => {
    res.sendFile('public/json/productosAccesorios.json', {root: __dirname});
});

app.get('/api/products/:id', (req,res) => {

});