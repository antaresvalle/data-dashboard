window.addEventListener('load', function() {
    var btnDefault = document.getElementById('activo');
    btnDefault.className += "activo";



});

var btnStudents = document.getElementById('activo');
console.log(btnStudents);

// obtener parametro de url

var getSede = window.location.search.substring(1);
var splitSede = getSede.split("&");
var pair = splitSede[0].split("=");
var sedeValue = pair[1];


// window.location.href='overview.html?sede='+ sedeValor;



var btnEstudiantes = document.getElementById('overview');
var urlBtnEst = btnEstudiantes.href;
var nuevaUrl = urlBtnEst + '?sede=' + sedeValue;
btnEstudiantes.href = nuevaUrl;