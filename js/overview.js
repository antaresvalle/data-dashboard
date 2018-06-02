window.addEventListener('load', function() {
    var btnDefault = document.getElementById('activo');
    btnDefault.className += "activo";

})

// obtener valor sede de select

var sede = document.getElementById('sede-overview');

sede.addEventListener('select', function(){
	var sedeValor = sede.options[sede.selectedIndex].value;
 var text = sede.options[sede.selectedIndex].text;

console.log(text);

});

/*  ---------------- Obtencion de datos principales ---------------- */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);


// Variable para obtener la data de las sedes
var aqp = data['AQP'];
var cdmx = data['CDMX'];
var lim = data['LIM'];
var scl = data['SCL'];




/*  ---------------- Cantidad de estudiantes activas ---------------- */

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
			
		});

	}

	//Muestra la suma total de las estudiantes activas e inactivas
	elementoActivas();
	console.log(active)
	console.log(inactive)
}

function elementoActivas(){
	var divActivas = document.getElementById('activas');
	console.log(divActivas);
};

/*  ---------------- % de estudiantes no activas x sede y x generacion ---------------- */


/*  ---------------- % de estudiantes no activas x sede y x generacion ---------------- */


/*  ---------------- Cantidad y porcentaje mayor que 70% x generacion ---------------- */


	/*  ---------------- cantidad y porcentaje mayor a 70% : TECH ---------------- */


	/*  ---------------- cantidad y porcentaje mayor a 70% : HSE ---------------- */


/*  ---------------- Porcentaje estudiantes satisfechas ---------------- */


/*  ---------------- Puntuacion promedio de Profesores ---------------- */


/*  ---------------- Puntuacion promedio de las JediMasters ---------------- */
