'use strict';
//Funcion de animación estilo tipeado, para llamar usar
//crear un div <h1 class="crear_un_nombre"> </h1>
//tip("Contenedor", "crear_un_nombre", ["palabra1", "palabra2"],velocidad_escrito, velocidad_borrado);
function tip(padre, hijo, strings, typespeed = 80, backspeed = 75) {

    try {
        $("." + padre).html('<span class="' + hijo + '"></span>');
        const hola = new Typed('.' + hijo, {
            strings,
            //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
            typeSpeed: typespeed, // Velocidad en mlisegundos para poner una letra,
            startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
            backSpeed: backspeed, // Velocidad en milisegundos para borrrar una letra,
            smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
            shuffle: false, // Alterar el orden en el que escribe las palabras.
            backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
            loop: true, // Repetir el array de strings
            loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
            showCursor: true, // Mostrar cursor palpitanto
            cursorChar: '|', // Caracter para el cursor
            contentType: 'null', // 'html' o 'null' para texto sin formato

        });
    } catch (error) {
        location.reload(true);
    }



}



//Movimiento del menu header
//Esconde el header al bajar y lo muestra al subir
function hideHeader(elem) {
    var update;
    $(document).on("scroll", function () {

        //sacamos el desplazamiento actual de la página
        var dA = $(document).scrollTop();
        var pos;
        if (dA > update) {
            $(elem).slideUp("medium");
        } else {
            $(elem).slideDown("medium");
        }

        update = dA;
    });

}



function borderMove(topBorde, bottomBorde) {

    var topBorderWidth = $('.' + topBorde).outerWidth();
    var topBorderHeight = $('.' + topBorde).outerHeight();

    (function (jQuery) {

        function getStyle(elem, name) {
            return (elem.currentStyle && elem.currentStyle[name]) || elem.style[name];
        }

        function getClip(elem) {
            var cssClip = jQuery(elem).css('clip') || '';

            if (!cssClip) {
                // Try to get the clip rect another way for IE8.
                // This is a workaround for jQuery's css('clip') returning undefined
                // when the clip is defined in an external stylesheet in IE8. -JPOEHLS
                var pieces = {
                    top: getStyle(elem, 'clipTop'),
                    right: getStyle(elem, 'clipRight'),
                    bottom: getStyle(elem, 'clipBottom'),
                    left: getStyle(elem, 'clipLeft')
                };

                if (pieces.top && pieces.right && pieces.bottom && pieces.left) {
                    cssClip = 'rect(' + pieces.top + ' ' + pieces.right + ' ' + pieces.bottom + ' ' + pieces.left + ')';
                }
            }

            // Strip commas and return.
            return cssClip.replace(/,/g, ' ');
        }

        jQuery.fx.step.clip = function (fx) {
            if (fx.pos === 0) {
                var cRE = /rect\(([0-9\.]{1,})(px|em)[,]?\s+([0-9\.]{1,})(px|em)[,]?\s+([0-9\.]{1,})(px|em)[,]?\s+([0-9\.]{1,})(px|em)\)/;

                fx.start = cRE.exec(getClip(fx.elem));
                if (typeof fx.end === 'string') {
                    fx.end = cRE.exec(fx.end.replace(/,/g, ' '));
                }
            }
            if (fx.start && fx.end) {
                var sarr = new Array(), earr = new Array(), spos = fx.start.length, epos = fx.end.length,
                    emOffset = fx.start[ss + 1] == 'em' ? (parseInt($(fx.elem).css('fontSize')) * 1.333 * parseInt(fx.start[ss])) : 1;
                for (var ss = 1; ss < spos; ss += 2) { sarr.push(parseInt(emOffset * fx.start[ss])); }
                for (var es = 1; es < epos; es += 2) { earr.push(parseInt(emOffset * fx.end[es])); }
                fx.elem.style.clip = 'rect(' +
                    parseInt((fx.pos * (earr[0] - sarr[0])) + sarr[0]) + 'px ' +
                    parseInt((fx.pos * (earr[1] - sarr[1])) + sarr[1]) + 'px ' +
                    parseInt((fx.pos * (earr[2] - sarr[2])) + sarr[2]) + 'px ' +
                    parseInt((fx.pos * (earr[3] - sarr[3])) + sarr[3]) + 'px)';
            }
        }
    })(jQuery);

    /* Code to actually animate the borders */

    var IntervalTimer = 1;
    varAnmiSpeed = 1000;
    setInterval(function () {
        $(window).resize(function () {
            var topBorderWidth = $('.' + topBorde).outerWidth();
            var topBorderHeight = $('.' + topBorde).outerHeight();
        });
        $('.' + topBorde).animate({ 'clip': 'rect(0px ' + topBorderWidth + 'px ' + (topBorderHeight - topBorderHeight + 2) + 'px 0px)' }, varAnmiSpeed);
        $('.' + topBorde).animate({ 'clip': 'rect(0px ' + topBorderWidth + 'px ' + (topBorderHeight) + 'px ' + (topBorderWidth - 2) + 'px)' }, varAnmiSpeed);
        $('.' + topBorde).animate({ 'clip': 'rect(' + (topBorderHeight - 2) + 'px ' + topBorderWidth + 'px ' + (topBorderHeight) + 'px 0px)' }, varAnmiSpeed);
        $('.' + topBorde).animate({ 'clip': 'rect(0px ' + (topBorderWidth - topBorderWidth + 2) + 'px ' + (topBorderHeight) + 'px 0px)' }, varAnmiSpeed)

        $('.' + bottomBorde).animate({ 'clip': 'rect(' + (topBorderHeight - 2) + 'px ' + topBorderWidth + 'px ' + (topBorderHeight) + 'px 0px)' }, varAnmiSpeed);
        $('.' + bottomBorde).animate({ 'clip': 'rect(0px ' + (topBorderWidth - topBorderWidth + 2) + 'px ' + (topBorderHeight) + 'px 0px)' }, varAnmiSpeed)
        $('.' + bottomBorde).animate({ 'clip': 'rect(0px ' + topBorderWidth + 'px ' + (topBorderHeight - topBorderHeight + 2) + 'px 0px)' }, varAnmiSpeed);
        $('.' + bottomBorde).animate({ 'clip': 'rect(0px ' + topBorderWidth + 'px ' + (topBorderHeight) + 'px ' + (topBorderWidth - 2) + 'px)' }, varAnmiSpeed);

        IntervalTimer = varAnmiSpeed * 4;
    }, IntervalTimer);
}

//bordes animados, para usar, agregar la clase principal del contenedor
//a esta función rainbow("nombre de la clase");
function rainbow(elem) {
    $(elem).addClass("rainbow");
}

function pulse(elem) {
    $(elem).addClass("pulse");
}

function wallparalax(elem) {
    var barra = $(window).scrollTop();
    var posicion = (barra * 0.20);
    $(elem).css({
        'background-position': '0 ' + posicion + 'px'
    });
}


function box3d(identificador, mover, area) {

    $(identificador).append(style3dBox(mover) +

        '<div class="' + mover + '">'
        + '    <div class="image first">'
        + '        <div class="screen"></div>'
        + '        <div class="text">'
        + '            <p>Escritorio, tablet & mobile</p>'
        + '            <p>Visualiza tu web donde quieras.</p>'
        + 'Expande tus oportunidades.'
        + '        </div>'
        + '    </div>'
        + '</div>'
        + ' <script>       $(function () {'
        + '            var target = $(".' + mover + '");'
        + '            var ' + mover + ' = $("' + area + '");'
        + '            ' + mover + '.on("mousemove", function (e) {'
        + '                var x = e.clientX - $(target).offset().left + $(window).scrollLeft();'
        + '                var y = e.clientY - $(target).offset().top + $(window).scrollTop();'
        + '                var rY = map(x, 0, $(target).width(), -17, 17);'
        + '                var rX = map(y, 0, $(target).height(), -17, 17);'
        + '                $(target).children(".image").css("transform", "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)");'
        + '            });'
        + '            ' + mover + '.on("mouseenter", function () {'
        + '                $(target).children(".image").css({'
        + '                    transition: "all " + 0.05 + "s" + " linear",'
        + '                });'
        + '            });'
        + '            ' + mover + '.on("mouseleave", function () {'
        + '                $(target).children(".image").css({'
        + '                    transition: "all " + 0.2 + "s" + " linear",'
        + '                });'
        + '                $(target).children(".image").css("transform", "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)");'
        + '            });'
        + '            function map(x, in_min, in_max, out_min, out_max) {'
        + '                return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;'
        + '            }'
        + '        });</script>'
    );
}

function style3dBox(mover) {
    return "<style> ." + mover + " {"
        + "    width: 100%;"
        + "    height: 20vw;"
        + "    perspective: 500px;"
        + "    position: relative;"
        + "    background-color: transparent;"
        + "    box-shadow: none;"
        + "}"
        + ""
        + ".image {"
        + "    width: 100%;"
        + "    height: 100%;"
        + "    transform-style: preserve-3d;"
        + "    transform: rotateX(30deg) rotateY(30deg);"
        + "    background-position: center;"
        + "    background-size: cover;"
        + "    border:1px solid rgb(117, 117, 117);"
        + "}"
        + ""
        + ".screen {"
        + "    background-color: rgba(0, 0, 0, 0.22);"
        + "    width: 100%;"
        + "    height: 100%;"
        + "    transform: translateZ(30px) scale(0.940);"
        + "}"
        + ""
        + ".text {"
        + "    position: absolute;"
        + "    bottom: 25px;"
        + "    left: 30px;"
        + "    color: white;"
        + "    transform: translateZ(30px) scale(0.940);"
        + "    font-family: 'Quicksand', sans-serif;"
        + "text-shadow:"
        + "}"
        + ""
        + ".text p {"
        + "    cursor: default;"
        + "    padding: 0;"
        + "    margin: 0;"
        + "    text-shadow: 1px 1px 10px black !important;"
        + "}"
        + ""
        + ".text p:first-of-type {"
        + "    font-size: 2em;"
        + "    margin-bottom: 5px;"
        + "    font-weight: 500;"
        + "} </style>";
}



//Elemento que sigue al mouse
function followMouse() {
    $('body').addClass("centerdiv"); //contiene al div
    $('body').before("<div id='follower'></div>"); //div que se mueve
    //Estilos del div->
    $('body').append("  <style>.centerdiv {    position: relative;}#follower {    position: absolute;    background-color: rgb(255, 255, 255);    display: block !important;    width: 8px;    height: 8px;    margin-left: 26px;    margin-top: 8px;    border-radius: 50px;    z-index: 8000;    border: 1px solid black;  } </style>");
    var mouseX = 0, mouseY = 0, limitX = 100, limitY = 100;
    $(window).mousemove(function (e) {
        var offset = $('body').offset();
        mouseX = Math.min(e.pageX - offset.left);
        mouseY = Math.min(e.pageY - offset.top);
        if (mouseX < 0) mouseX = 0;
        if (mouseY < 0) mouseY = 0;
    });

    // cache the selector
    var follower = $("#follower");
    var xp = 0, yp = 0;
    var loop = setInterval(function () {
        // change 12 to alter damping higher is slower
        xp += (mouseX - xp) / 2;
        yp += (mouseY - yp) / 2;
        follower.css({ left: xp, top: yp });
    }, 30);
}