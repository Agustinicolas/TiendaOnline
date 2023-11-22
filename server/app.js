const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const { products } = require('./routes/products.js');

app.use(express.json() );
app.use(express.static(path.join(__dirname , '/public')));

app.get('/api/products', (req,res)=>{
    res.json(products);
});

//DEVUELVE PRODUCTO POR ID
app.get('/api/products/:prodID', (req,res)=>{
    const { prodID } = req.params;
    const productoIndividual = products.find(
        (product)=>product.id === prodID);
    if(!productoIndividual){
        return res.status(404).send('Producto no existe');
    }
    res.json(productoIndividual);
});

//DEVUELVE TODOS LOS PRODUCTOS DE UNA CATEGORIA
app.get('/api/products/categories/:category', (req,res)=>{
    const {category} = req.params;
    const newProducts = products.filter(
        (product)=> product.categoria === category);
    if(newProducts.length == 0){
        return res.status(404).send('Categoria no encontrada')
    }
    res.json(newProducts);
});

app.listen(
    port,
    () => console.log(`Listening -> http://localhost:${port}`)
);

// /api/products
// TODO: UNIR TODOS LOS PRODUCTOS EN UN MISMO JSON -> LUEGO MODIFICAR LOS JS