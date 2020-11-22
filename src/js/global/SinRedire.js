$(document).ready(function () {
    var modal = '<div class="container" id="app">    <div class="modal modal_true">        <div class="modal-background"></div>        <div class="modal-content ">            <button class="modal-close"></button>            <h3 style="color:white;  text-align: center;" class="center ">Información enviada, lo contactaremos a la                brevedad.</h3>            <br>            <br>            <button class="button cerrar-modal">Aceptar </button>        </div>    </div></div><div class="container" id="app">    <div class="modal modal_false">        <div class="modal-background"></div>        <div class="modal-content">            <button class="modal-close"></button>            <h3 style="color:white;" class="centrar-texto">No se pudo enviar, intentelo nuevamente.</h3>            <button class="button cerrar-modal">Aceptar </button>        </div>    </div></div><div class="container" id="app">    <div class="modal modal_error">        <div class="modal-background"></div>        <div class="modal-content ">            <button class="modal-close"></button>            <h3 style="color:white;" class="centrar-texto ">Error</h3>            <button class="button cerrar-modal">Aceptar </button>        </div>    </div></div>';

    $(".formulario-contacto").bind("submit", function () {
        $(".form-boton").addClass("is-loading");
        $("body").append(modal);
        $.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: $(this).serialize(),
            success: function (respuesta) {
                if (respuesta == '"ok"') {
                    $(".modal_true").addClass("is-active");
                    $("#limpiar-form")[0].reset();
                } else {

                    $(".modal_false").addClass("is-active");
                }
                $(".form-boton").removeClass("is-loading");

            },
            error: function () {
                $(".modal_error").addClass("is-active");
            }
        });

        return false;
    });


});
