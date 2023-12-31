const header = document.getElementById("header");
const footer = document.getElementById("footer");

header.innerHTML = `
<h1 class="header__titulo"><a href="index.html">Unniq</a></h1>
<nav class="header__nav">
    <ul class="header__menu">
        <li><a href="./productos.html" target="_blank">Productos</a>
            <ul class="submenu">
                <li><a href="./remeras.html" target="_blank">Remeras</a></li>
                <li><a href="./hoodies.html" target="_blank">Hoodies</a></li>
                <li><a href="./accesorios.html" target="_blank">Accesorios</a></li>
            </ul>
        </li>
        <li><a href="./guiatalles.html" target="_blank"><span class="nowrap">Guia de talles</span></a></li>
        <!-- <li>Ofertas</li> -->
        <li><a href="#contacto">Contacto</a></li>
    </ul>
</nav>
`;

footer.innerHTML = `
<ul class="footer__mediospago">
    <li><span class="nowrap">Medios de pago</span></li>
    <li>
        <img src="../img/mediospago/amex@2x.png" alt="Amex" width="40" height="25">
        <img src="../img/mediospago/banelco@2x.png" alt="Banelco" width="40" height="25">
        <img src="../img/mediospago/mastercard@2x.png" alt="MasterCard" width="40" height="25">
        <img src="../img/mediospago/mercadopago@2x.png" alt="Mercadopago" width="40" height="25">
        <img src="../img/mediospago/pagofacil@2x.png" alt="pagofacil" width="40" height="25">
        <img src="../img/mediospago/rapipago@2x.png" alt="rapipago" width="40" height="25">
        <img src="../img/mediospago/tarjeta-naranja@2x.png" alt="Naranja" width="40" height="25">
        <img src="../img/mediospago/visa@2x.png" alt="Visa" width="40" height="25">
    </li>
</ul>
<ul class="footer__contacto" id="contacto">
    <li><h4>Contacto</h4></li>
    <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
    <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
    <li><a href="tel:+5492995123456">Telefono</a></li>
    <li><a href="mailto:TiendaOnline@gmail.com">Correo</a></li>
</ul>
`;