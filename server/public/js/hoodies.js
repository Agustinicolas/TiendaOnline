import { mostrarProductos } from "./funciones.js";
const contenedor = document.getElementById("main__contenido");

fetch("http://localhost:3000/api/products/category/hoodies")
    .then(res => res.json())
    .then(data => {
        let productos = data.data.products;
        mostrarProductos(productos, contenedor);
    })
    .catch(error => console.log(error));
