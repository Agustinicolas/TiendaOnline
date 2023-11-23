const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const fs = require('fs');
let products = JSON.parse(fs.readFileSync('./products.json')); //JSON -> JS Object

app.use(express.json());
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

//GET - /api/products/:id
app.get('/api/products/:id', (req,res) =>{
    let idBuscada = req.params;
    idBuscada = Number(idBuscada.id)    //Number devuelve NaN si idBuscada.id contiene caracteres o simbolos
    if (isNaN(idBuscada)){
        res.status(400).json({
            status: "error",
            data:{
                message:"formato de id incorrecto"
            }
        })
    }else{
        const productoBuscado = products.find(
            (product)=>product.id === idBuscada);
        if(!productoBuscado){    //ID NO ENCONTRADO
            res.status(404).json({
                status:"error",
                data:{
                    message:"id no encontrado"
                }
            })
        }else{
            res.status(200).json({
                status:"success",
                data:{
                    productoBuscado : productoBuscado
                }
            })
        }
    }
})

//GET - /api/products?count=x&from=Y
app.get('/api/show', (req,res)=>{
    let count = Number(req.query.count);
    let from = Number(req.query.from);

    if(isNaN(count) || isNaN(from)){  //PARAMETROS ENTEROS
        res.status(400).json({
            status:"error",
            data:{
                message:"parametros invalidos"
            }
        })        
    }else{
        from = from-1;
        const tope = from + count;
        const listaProductos = products.slice(from, tope);
        res.status(200).json({
            status:"success",
            data:{
                listaProductos: listaProductos
            }
        })
    }
})

//POST - /api/products
app.post('/api/products', (req,res)=>{
    const nuevaId = products[products.length -1].id + 1; //ID del nuevo producto
    const nuevoProducto = Object.assign({id: nuevaId}, req.body); //"mergea" 2 objetos en uno solo
    const categoriaNuevoProd = nuevoProducto.categoria;

    if(categoriaNuevoProd === "accesorios" || categoriaNuevoProd === "hoodies" || categoriaNuevoProd === "remeras"){
        products.push(nuevoProducto);

        fs.writeFile('./products.json', JSON.stringify(products), (err)=>{
            res.status(201).json({
                status: "success",
                data: {
                    product: nuevoProducto
                }
            })
        });
    }else{  //Devuelve error 400 si el campo categoria es incorrecto
        res.status(400).json({
            status: "error",
            data:{
                message:"Categoria incorrecta"
            }
        })
    }
})


app.listen(
    port,
    () => console.log(`Listening -> http://localhost:${port}`)
);

// /api/products
// TODO: UNIR TODOS LOS PRODUCTOS EN UN MISMO JSON -> LUEGO MODIFICAR LOS JS