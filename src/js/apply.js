$(document).ready(function () {
    $("body").addClass("scrol");//scroll modificado para el body
    tip("hola", "typed1", ["Simple", "Programación"], 78, 80);//tipeado pagina1
    tip("hola2", "typed2", ["landing", "librería"], 10, 10);//tipeado pagina2
    rainbow("button");//efecto borde animado pagina1
    hideHeader(".header");
    pulse(".header a");


    $(window).scroll(function () {
        wallparalax(".inicio");

    });

})
