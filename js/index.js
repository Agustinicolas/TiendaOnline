import { mostrarProductos } from "./funciones.js";
const contenedor = document.getElementById("main__contenido");

fetch("../json/productosIndex.json")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        mostrarProductos(data, contenedor);
    })
    .catch(error => console.log(error));

/* function mostrarProductos(data) {
    const contenedor = document.getElementById("main__contenido");
    data.forEach((elem) => {
        let producto = document.createElement("a");
        producto.setAttribute("class","main__caja");
        producto.setAttribute("href","./seleccion.html");
        
        producto.innerHTML=`
        <img src="${elem.imgurl}" alt="">
        <h3 class="nowrap">${elem.nombre}</h3>
        `;
        contenedor.appendChild(producto);
    })
} */