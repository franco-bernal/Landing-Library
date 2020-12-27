$(document).ready(function () {

    var logo = "src/img/perfil/perfil.jpg";
    var fuenteGlobal = 'fuente';

    $("*").css("font-family", fuenteGlobal);//fuente
    $(".shortcut").attr("href", logo);//shortcut
    $(".logo").attr("src", logo);//logo de la web


    //to erase
    var one_piece = "https://upload.wikimedia.org/wikipedia/commons/7/7b/Responsive_Web_Design_for_Desktop%2C_Notebook%2C_Tablet_and_Mobile_Phone.png";
    var one_piece2 = "https://c.pxhere.com/images/1a/22/4382c349e807087e67b1f8f73000-1593762.jpg!d";
    $(".inicio").css("background-image", "url(" + one_piece2 + ")");
    

    $(".card .image").css("background-image", "url(" + one_piece + ")");
})
