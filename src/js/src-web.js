$(document).ready(function () {

    var logo = "src/img/logo0.png";
    var fuenteGlobal = 'fuente';

    $("*").css("font-family", fuenteGlobal);//fuente
    $(".shortcut").attr("href", logo);//shortcut
    $(".logo").attr("src", logo);//logo de la web
    
    
    //to erase
    var one_piece = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/73b49398-555e-4714-8529-1e26c6571674/d3jxv98-3371c362-4c0e-4e5a-98d4-69c7d22e2830.jpg/v1/fill/w_1600,h_706,q_75,strp/one_piece___bye_alabasta_by_diabolumberto_d3jxv98-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MDYiLCJwYXRoIjoiXC9mXC83M2I0OTM5OC01NTVlLTQ3MTQtODUyOS0xZTI2YzY1NzE2NzRcL2Qzanh2OTgtMzM3MWMzNjItNGMwZS00ZTVhLTk4ZDQtNjljN2QyMmUyODMwLmpwZyIsIndpZHRoIjoiPD0xNjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.PeszyJUjS1YXbEQ9J2iLDwqORjRTVXZcOzZZi27Qd3k";
    var one_piece2="https://www.alfabetajuega.com/wp-content/uploads/2019/08/poster-one-piece-stampede.jpg";
    $(".inicio").css("background-image", "url("+one_piece2+")");
    $(".logotip").attr("src", one_piece); //extra
})
