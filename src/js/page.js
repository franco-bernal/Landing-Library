//This js can use jquery
'use strict';
try {

    $(document).ready(function () {


        var header = '<div class="header">    <div class="columns is-gapless  is-multiline  is-centered">        <div class="column is-9-fullhd is-8-desktop  is-6-tablet is-12-mobile is-mobile"> <a href=""> <img class="logo"                    src="" alt=""> </div> </a>        <div class="column centrar-full is-1-fullhd is-1-desktop  is-2-tablet is-12-mobile"> <a id="btn_home">home</a>        </div>        <div class="column centrar-full is-1-fullhd is-2-desktop  is-2-tablet is-12-mobile"> <a                id="btn-contactanos">contactanos</a> </div>        <div class="column centrar-full is-1-fullhd is-1-desktop  is-2-tablet is-12-mobile"> <a                id="btn-politicas">politicas</a> </div>    </div></div><!--FIN HEADER-->';
        var footer = '<div class="footer">    <div class="columns is-gapless  is-multiline">        <div class="column is-4-fullhd is-4-desktop  is-12-tablet  is-12-mobile ">            <p>Header para rellenar</p>        </div>        <div class="column is-4-fullhd is-4-desktop  is-12-tablet  is-12-mobile ">            <p>Contacto</p>        </div>        <div class="column is-4-fullhd is-4-desktop  is-12-tablet  is-12-mobile ">            <p>Dirección</p>        </div>    </div></div>';
        var formulario = '<div class="sec-form " id="formula">    <div class=" formulario">        <div class="titulo centrar-full">            <h1>Contacto</h1>        </div>        <div class="cuerpo-form ">            <form method="POST" action="correo.php" name="enviar" class="formulario-contacto" id="limpiar-form"> <label                    for="">Nombre*</label> <input type="text" name="nombre" id="nombre-form" maxlength="50"                    required="true"> <label for="">Email*</label> <input type="email" name="email" maxlength="60"                    required> <label for="">Teléfono*</label> <input type="number" name="telefono" minlength="8"                    maxlength="15" required="true"> <label for="">Mensaje</label> <br> <textarea class="estilotextarea"                    name="observaciones" maxlength="200">                            </textarea> <button                    class="button form-boton " type="submit" name="enviar">ENVIAR </button> </form>        </div>    </div>   </div>';
        var paginas = {
            'p1': '<div id="p1">    <div class="global centrar">       <div class="inicio centrar-full back-class">            <div><h1>Franco Bernal Gutiérrez</h1><br><h2 style="text-align:center;">Freelance</h2></div>        </div>        <div class="img-perfil">            <img class="" src="src/img/perfil/perfil.jpg" alt="">        </div>        <div class="columns is-gapless  is-multiline">            <div class="column is-6-fullhd is-6-desktop  is-12-tablet  is-12-mobile "><br> ' + formulario + ' <br></div>            <div class="column is-6-fullhd is-6-desktop  is-12-tablet  is-12-mobile ">                <div> <br>                    <h1 class="hola"> </h1>                    <h2 class="hola2"></h2>                    <ul>                        <li>Páginas sin tener que actualizar</li>                        <li>Elementos como slices o animaciones sólo llamando una función</li>                    </ul> <br>                    <div class="cajaOne"></div>                </div>            </div>        </div>    </div></div>',
            'p2': '<div id="p2"><h1>Este es contáctanos</h1></div>',
            'p3': '<div id="p3"><h1>Este es politicas</h1><img src="src/img/logo0.png" alt=""></div>',
        };
        function desactivar(activar) {
            $('#p1').slideUp();
            $('#p2').slideUp();
            $('#p3').slideUp();
            $(activar).slideDown();
        }

        function probar() {
            $(".hero-body").load('pruebas.html');
            $(document).prop('title', 'Pruebas');
        }


        function home(pagina = paginas['p1']) {
            var nuevo;
            nuevo = paginas["p1"];
            nuevo += paginas["p2"];
            nuevo += paginas["p3"];
            activar(nuevo);
            desactivar('#p1');
            $(document).prop('title', 'home');
        }
        function activar(pag) {
            var estructura = header + "<div id='pag-on'>" + pag + "</div>" + footer;
            $('.hero-body').html(estructura);
            desactivar('#p3');
        }

        home();
        //probar();

        $('#btn_home').on('click', function () {
            desactivar('#p1');
        });
        $('#btn-contactanos').on('click', function () {
            desactivar('#p2');

        });
        $('#btn-politicas').on('click', function () {
            desactivar('#p3');
        });
        //**** */

    });

    /*
    $('#-agregar').on('click', function () {
    
        alert("Hiciste click sobre un párrafo  location.reload(true); ");
    });
    */



} catch (error) {
    /*

    */
}
