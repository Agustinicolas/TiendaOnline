import { mostrarProductos } from "./funciones.js";
const contenedor = document.getElementById("main__contenido");

fetch("../json/productosRemeras.json")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        mostrarProductos(data,contenedor);
    })
    .catch(error => console.log(error));
