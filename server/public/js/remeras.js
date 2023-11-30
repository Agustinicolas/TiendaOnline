import { mostrarProductos } from "./funciones.js";
const contenedor = document.getElementById("main__contenido");

fetch("http://localhost:3000/api/products/category/remeras")
    .then(res => res.json())
    .then(data => {
        let productosAMostrar = data.data.products;
        mostrarProductos(productosAMostrar,contenedor);
    })
    .catch(error => console.log(error));
