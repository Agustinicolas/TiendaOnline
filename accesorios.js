fetch("productosAccesorios.json")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        mostrarProductos(data);
    })
    .catch(error => console.log(error));

function mostrarProductos(data) {
    let producto1="";
    const mapeo = data.map((prod) =>{
        producto1+=` <a href="/" class="main__caja">
        <img src="${prod.imgurl}" alt="">
        <h3 class="nowrap">${prod.nombre}</h3> `
    });
    document.getElementById("main__contenido").innerHTML=producto1;

}