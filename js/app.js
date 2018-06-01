// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// Variable para obtener la data de las sedes
var aqp = data['AQP'];
var cdmx = data['CDMX'];
var lim = data['LIM'];
var scl = data['SCL'];

// Variable para guardar la suma de las estudiantes activas e inactivas por sede
var active = 0;
var inactive = 0;

// Iteracion para ingresar a los datos por generacion
for (var i in aqp){
	console.log(aqp[i])
// Iteracion para ingresar a los datos de los estudiantes y ratings	
	for (var k in aqp[i]){
		console.log(aqp[i][k])

// Variable para guardar el array de estudiantes por generacion
	var array = aqp[i][k]

// Iteracion para entrar a la informacion de cada estudiante y obtener el valor de active.
		array.forEach(function (element,index) {
			var activeStatus = array[index].active
			console.log(activeStatus)
			if( activeStatus === true){
				active += 1
			} else if(activeStatus === false ){
				inactive += 1
			}
//Muestra la suma total de las estudiantes activas e inactivas
			
		});
		
	}
	console.log(active)
	console.log(inactive)
}
// Boton entrar

var entrar = document.getElementById('btn-entrar');
console.log(entrar);

entrar.addEventListener('click', function(){
	window.location.href='overview.html';
});
