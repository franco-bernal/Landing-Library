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
