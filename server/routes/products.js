const products = [
    {
        id:"1",
        nombre:"Gafas de sol azules",
        categoria:"accesorios",
        color:"azul",
        imgurl:"../public/img/productos/accesorios/gafas-sol-azul-500x500.png",
        descripcion:"Gafas de sol azules",
        precio:7999
    },
    {
        id:"2",
        nombre:"Gafas de sol negras",
        categoria:"accesorios",
        color:"negro",
        imgurl:"../public/img/productos/accesorios/gafas-sol-negras-500x500.png",
        descripcion:"Gafas de sol negras",
        precio:7999
    },
    {
        id:"3",
        nombre:"Gafas de sol rojas",
        categoria:"accesorios",
        color:"rojo",
        imgurl:"../public/img/productos/accesorios/gafas-sol-rojas-500x500.png",
        descripcion:"Gafas de sol rojas",
        precio:7999
    },
    {
        id:"4",
        nombre:"Gorra gris",
        categoria:"accesorios",
        color:"gris",
        imgurl:"../public/img/productos/accesorios/gorra-gris-500x500.png",
        descripcion:"Gorra gris",
        precio:3999
    },
    {
        id:"5",
        nombre:"Gorra negra",
        categoria:"accesorios",
        color:"negro",
        imgurl:"../public/img/productos/accesorios/gorra-negra-500x500.png",
        descripcion:"Gorra negra",
        precio:3999
    },
    {
        id:"6",
        nombre:"Gorra roja",
        categoria:"accesorios",
        color:"rojo",
        imgurl:"../public/img/productos/accesorios/gorra-roja-500x500.png",
        descripcion:"Gorra roja",
        precio:3999
    },
    {
        id:"7",
        nombre:"Gorra azul",
        categoria:"accesorios",
        color:"azul",
        imgurl:"../public/img/productos/accesorios/gorra-azul-500x500.png",
        descripcion:"Gorra azul",
        precio:3999
    },
    {
        id:"8",
        nombre:"Hoodie amarillo",
        categoria:"hoodies",
        color:"amarillo",
        imgurl:"../public/img/productos/hoodies/hoodie-amarillo-500x500.png",
        descripcion:"Hoodie clasico",
        precio:6999
    },
    {
        id:"9",
        nombre:"Hoodie azul",
        categoria:"hoodies",
        color:"azul",
        imgurl:"../public/img/productos/hoodies/hoodie-azul-500x500.png",
        descripcion:"Hoodie clasico",
        precio:6999
    },
    {
        id:"10",
        nombre:"Hoodie celeste",
        categoria:"hoodies",
        color:"celeste",
        imgurl:"../public/img/productos/hoodies/hoodie-celeste-500x500.png",
        descripcion:"Hoodie clasico",
        precio:6999
    },
    {
        id:"11",
        nombre:"Hoodie gris",
        categoria:"hoodies",
        color:"gris",
        imgurl:"../public/img/productos/hoodies/hoodie-gris-500x500.png",
        descripcion:"Hoodie clasico",
        precio:6999
    },
    {
        id:"12",
        nombre:"Hoodie naranja",
        categoria:"hoodies",
        color:"naranja",
        imgurl:"../public/img/productos/hoodies/hoodie-naranja-500x500.png",
        descripcion:"Hoodie clasico",
        precio:6999
    },
    {
        id:"13",
        nombre:"Hoodie negro",
        categoria:"hoodies",
        color:"negro",
        imgurl:"../public/img/productos/hoodies/hoodie-negro-500x500.png",
        descripcion:"Hoodie clasico",
        precio:6999
    },
    {
        id:"14",
        nombre:"Hoodie rojo",
        categoria:"hoodies",
        color:"rojo",
        imgurl:"../public/img/productos/hoodies/hoodie-rojo-500x500.png",
        descripcion:"Hoodie clasico",
        precio:6999
    },
    {
        id:"15",
        nombre:"Hoodie turquesa",
        categoria:"hoodies",
        color:"turquesa",
        imgurl:"../public/img/productos/hoodies/hoodie-turquesa-500x500.png",
        descripcion:"Hoodie clasico",
        precio:6999
    },
    {
        id:"16",
        nombre:"Hoodie verde",
        categoria:"hoodies",
        color:"verde",
        imgurl:"../public/img/productos/hoodies/hoodie-verde-500x500.png",
        descripcion:"Hoodie clasico",
        precio:6999
    },
    {
        id:"17",
        nombre:"Hoodie violeta",
        categoria:"hoodies",
        color:"violeta",
        imgurl:"../public/img/productos/hoodies/hoodie-violeta-500x500.png",
        descripcion:"Hoodie clasico",
        precio:6999
    },
    {
        id:"18",
        nombre:"Remera azul",
        categoria:"remeras",
        color:"azul",
        imgurl:"../public/img/productos/remeras/remera-azul-500x500.png",
        descripcion:"Remera",
        precio:4999
    },
    {
        id:"19",
        nombre:"Remera blanca",
        categoria:"remeras",
        color:"blanco",
        imgurl:"../public/img/productos/remeras/remera-blanca-500x500.png",
        descripcion:"Remera",
        precio:4999
    },
    {
        id:"20",
        nombre:"Remera celeste",
        categoria:"remeras",
        color:"celeste",
        imgurl:"../public/img/productos/remeras/remera-celeste-500x500.png",
        descripcion:"Remera",
        precio:4999
    },
    {
        id:"21",
        nombre:"Remera gris",
        categoria:"remeras",
        color:"gris",
        imgurl:"../public/img/productos/remeras/remera-gris-500x500.png",
        descripcion:"Remera",
        precio:4999
    },
    {
        id:"22",
        nombre:"Remera naranja",
        categoria:"remeras",
        color:"naranja",
        imgurl:"../public/img/productos/remeras/remera-naranja-500x500.png",
        descripcion:"Remera",
        precio:4999
    },
    {
        id:"23",
        nombre:"Remera negra",
        categoria:"remeras",
        color:"negro",
        imgurl:"../public/img/productos/remeras/remera-negra-500x500.png",
        descripcion:"Remera",
        precio:4999
    },
    {
        id:"24",
        nombre:"Remera roja",
        categoria:"remeras",
        color:"rojo",
        imgurl:"../public/img/productos/remeras/remera-roja-500x500.png",
        descripcion:"Remera",
        precio:4999
    },
    {
        id:"25",
        nombre:"Remera rosa",
        categoria:"remeras",
        color:"rosa",
        imgurl:"../public/img/productos/remeras/remera-rosa-500x500.png",
        descripcion:"Remera",
        precio:4999
    },
    {
        id:"26",
        nombre:"Remera verde",
        categoria:"remeras",
        color:"verde",
        imgurl:"../public/img/productos/remeras/remera-verde-500x500.png",
        descripcion:"Remera",
        precio:4999
    },
    {
        id:"27",
        nombre:"Remera violeta",
        categoria:"remeras",
        color:"violeta",
        imgurl:"../public/img/productos/remeras/remera-violeta-500x500.png",
        descripcion:"Remera",
        precio:4999
    }
]

module.exports = {products};