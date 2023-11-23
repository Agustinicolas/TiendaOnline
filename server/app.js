const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const fs = require('fs');
let products = JSON.parse(fs.readFileSync('./products.json')); //JSON -> JS Object

app.use(express.json() );
app.use(express.static(path.join(__dirname , '/public')));

//GET - /api/products
app.get('/api/products', (req,res)=>{
    res.status(200).json({
        status:"success",
        data: {
            products: products
        }
    })
});



app.listen(
    port,
    () => console.log(`Listening -> http://localhost:${port}`)
);

// /api/products
// TODO: UNIR TODOS LOS PRODUCTOS EN UN MISMO JSON -> LUEGO MODIFICAR LOS JS