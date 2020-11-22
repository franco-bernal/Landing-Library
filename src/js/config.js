'use strict';
var metas = ' <meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">';

var srcHead = '<link rel="stylesheet" href="src/css/reset.css">' +
    '<link rel="stylesheet" href="src/css/fonts.css">' +
    '<link rel="stylesheet" href="src/css/index.css">' +
    '<link rel="stylesheet" href="src/css/src.css">' +
    '<link rel="stylesheet" href="src/css/inputs.css">' +
    '<link rel="stylesheet" href="src/css/scroll.css">' +
    '<link rel="shortcut icon" href="src/img/letra-s.jpg" type="image/x-icon">';

var frameworksCss = '<link rel="stylesheet" href="src/css/bulma.min.css">';

var srcBody = ['src/js/global/jquery-3.5.1.min.js',
    'src/js/global/modal.js',
    'src/js/page.js',
    'src/js/global/typed.min.js',
    'src/js/global/resources.js',
    'src/js/global/SinRedire.js',
    'src/js/apply.js',
];//agregar con una coma


//inicializa página
function head(title, framework) {
    title = "<title>" + title + " </title>";

    if (framework == false) {
        srcBody = "";
        frameworksCss = "";
    }
    var all = metas + title + frameworksCss + srcHead;
    document.head.innerHTML = all;
    //------------------------
    srcBody.forEach(element => {

        var script = document.createElement('script');
        script.src = element
        script.type = 'text/javascript';
        document.getElementsByClassName('fw')[0].appendChild(script);
    });
}

head('Simple', true);
