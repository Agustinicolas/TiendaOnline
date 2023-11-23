export function mostrarProductos(data, contenedor) {
    data.forEach((elem) => {
        let producto = document.createElement("a");/* Creacion elemento a con clase main__caja y direccion a pagina seleccion.html */
        producto.setAttribute("class","main__caja");
        const categoria = elem.categoria;
        const id = elem.id;
        producto.setAttribute("href","./seleccion.html?categoria="+categoria+"&id="+id);
        
        producto.innerHTML=`
        <img src="${elem.imgurl}" alt="">
        <h3 class="nowrap">${elem.nombre}</h3>
        `;
        contenedor.appendChild(producto); /* Se agrega elemento nuevo como hijo de main__contenido */
    })
}