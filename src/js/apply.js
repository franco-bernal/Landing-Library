$(document).ready(function () {
    $("body").addClass("scrol");//scroll modificado para el body
    tip("hola", "typed1", ["Simple", "Programación"], 78, 80);//tipeado pagina1
    tip("hola2", "typed2", ["landing", "librería"], 10, 10);//tipeado pagina2
    rainbow("button");//efecto borde animado pagina1
    hideHeader(".header");//Header que se esconde de acuerdo a si sube o baja la págona
    pulse(".header a");//Efecto del botón
    box3d(".cajaOne", "card", ".columns");//la var de en medio va sin . o identificador
    followMouse();//Elemento que sigue al mouse
    $(window).scroll(function () {
        wallparalax(".inicio");//Background que baja
    });




})
