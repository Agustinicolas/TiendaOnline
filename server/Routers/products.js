const express = require('express');
const routerProducts = express.Router(); // evita repeticion en las rutas

const fs = require('fs');
let products = JSON.parse(fs.readFileSync('./data/products.json')); //JSON -> JS Object

//GET - /api/products
routerProducts.get('/', (req,res)=>{
    res.status(200).json({
        status:"success",
        data: {
            products: products
        }
    })
});

//GET - /api/products/:id
routerProducts.get('/:id', (req,res) =>{
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

//POST - /api/products
routerProducts.post('/', (req,res)=>{
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

module.exports = routerProducts;