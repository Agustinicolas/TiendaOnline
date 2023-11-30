const express = require('express');
const routerProducts = express.Router(); // evita repeticion en las rutas

const fs = require('fs');
let products = JSON.parse(fs.readFileSync('./data/products.json')); //JSON -> JS Object
let categories = JSON.parse(fs.readFileSync('./data/categories.json'));

//GET - /api/products
routerProducts.get('/', (req,res)=>{
    res.status(200).json({
        status:"success",
        data: {
            products: products
        }
    })
});

//GET - /api/products/view?count=x&from=Y
routerProducts.get('/view', (req,res)=>{
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

//GET - /api/products/category/:categoria
routerProducts.get('/category/:category', (req,res) =>{
    let productosAMostrar ="";
    let categoriaFiltrada = req.params;
    categoriaFiltrada = categoriaFiltrada.category;
    console.log(categoriaFiltrada);
    if (categories.includes(categoriaFiltrada)){
        productosAMostrar = products.filter((elem) => elem.categoria === categoriaFiltrada);
        res.status(200).json(
            {
                status:"success",
                data:{
                    products: productosAMostrar
                }
            }
        )
    }else{
        res.status(400).json({
            status:"error",
            data:{
                message: "categoria no encontrada"
            }
        })
    }
})

//POST - /api/products
routerProducts.post('/', (req,res)=>{
    const nuevaId = products[products.length -1].id + 1; //ID del nuevo producto
    const nuevoProducto = Object.assign({id: nuevaId}, req.body); //"mergea" 2 objetos en uno solo
    const categoriaNuevoProd = nuevoProducto.categoria;

    if(categories.includes(categoriaNuevoProd)){
        products.push(nuevoProducto);

        fs.writeFile('./data/products.json', JSON.stringify(products), (err)=>{
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