window.addEventListener('load', function() {
    var btnDefault = document.getElementById('activo');
    btnDefault.className += "activo";

});

var sede = document.getElementById('sede-overview');

console.log(data);

// --------------- obtener parametro de url ---------------------

var getSede = window.location.search.substring(1);
var splitSede = getSede.split("&");
var pair = splitSede[0].split("=");
var sedeValue = pair[1];
// console.log(sedeValue);
getTeacher(sedeValue);	   
getJedi(sedeValue);    

// --------------- cambiar valor de select al mismo valor de parametro en url -----------

var sede = document.getElementById('sede-overview');

var getOptionValue = document.getElementsByTagName('option')[0];
var getOptionText = getOptionValue.textContent;
var nuevoNombre = getOptionValue.textContent = sedeValue;
// console.log(nuevoNombre);
var valores = sede.options[sede.selectedIndex].value;


// --------------- pintar generaciones en el aside ----------------------------------

showGen(nuevoNombre);


function showGen(sedeN){

	var aside = document.getElementById('generaciones-var');

		for (var sede in data){
			if(sede === sedeN){
				// console.log(sedeN);

				for(var gen in data[sede]){
				// console.log(sedeN);
				// console.log('generacion: '+ gen);
				var inputGen = document.createElement('input');
				inputGen.className = 'in';
				inputGen.type = 'radio';
				inputGen.name = 'generacion';
				inputGen.dataset.valor = gen;
				var nombreGen = document.createElement('p');
				var content = document.createTextNode(gen);
				
				aside.appendChild(inputGen);
				nombreGen.appendChild(content);
				aside.appendChild(nombreGen );
			};
		}
			
			
		};

		getGenAsideValue();
				
}


// ---------------- obtener valor sede de select --------------------------------------

var sede = document.getElementById('sede-overview');

sede.addEventListener('change', function(){
	var sedeValor = sede.options[sede.selectedIndex].value;

	// console.log(sedeValor);
	getGen(sedeValor);
	document.getElementById('generaciones-var').innerHTML = '';
	document.getElementById('teachers-var').innerHTML = '';
	document.getElementById('jedis-var').innerHTML = '';
	showGen(sedeValor);
	getTeacher(sedeValor);	
	getJedi(sedeValor);
	
	// obtener y desplegar datos de generacion
	function getGen(sede){
		// console.log(data[sede]);
	};

});

// ---------------- obtener la generacion seleccionada en el aside -----------------------

function getGenAsideValue(){
	var aside = document.getElementsByClassName('in');

// console.log(aside); 

for(var i = 0; i < aside.length; i++){
	var inputElement = aside[i];
	var valorElement = inputElement.dataset.valor;

	inputElement.addEventListener('click', function(evt){
		var valorInputGen = evt.target.dataset.valor;
		console.log(valorInputGen);
		return valorInputGen;
	})
	// console.log(valorElement);
}

}


// ---------------- Pasar parametro de url a btn Estudiantes

var btnEstudiantes = document.getElementById('estudiantes');
var urlBtnEst = btnEstudiantes.href;
var nuevaUrl = urlBtnEst + '?sede=' + sedeValue;
btnEstudiantes.href = nuevaUrl;

// btnEstudiantes.addEventListener('click', function(){
// 	var nuevaUrl = urlBtnEst + '?sede=' + nuevoNombre;
// 	console.log(nuevaUrl);
// })




/*  ---------------- Obtencion de datos principales ---------------- */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);


// Variable para obtener la data de las sedes
var aqp = data['AQP'];
var cdmx = data['CDMX'];
var lim = data['LIM'];
var scl = data['SCL'];




/*  ---------------- Cantidad de estudiantes activas ---------------- */

// Variable para guardar la suma de las estudiantes activas e inactivas por sede
var active = 0;
var inactive = 0;
var countActive = 0;

// Iteracion para ingresar a los datos por generacion


for (var i in aqp){
	// console.log(aqp[i])
	// Iteracion para ingresar a los datos de los estudiantes y ratings	
	for (var k in aqp[i]){
		// console.log(aqp[i][k])

	// Variable para guardar el array de estudiantes por generacion
	var array = aqp[i][k]

	// Iteracion para entrar a la informacion de cada estudiante y obtener el valor de active.
		array.forEach(function (element,index) { // aqui se obtiene el objeto Students con todos los nombres de las estudiantes
		

			if ( element.active ) {
				var activas = active += 1;
			} else {
				var inactivas = inactive += 1
			}
			
		});
		// console.log('activas ' + active)
		// console.log('inactivas ' + inactive)
		var active = 0;
		var inactive = 0;
	}

	//Muestra la suma total de las estudiantes activas e inactivas
	// elementoActivas();
	
}



function elementoActivas(){
	var divActivas = document.getElementById('activas');
	// console.log(divActivas);
}

/*  ---------------- % de estudiantes no activas x sede y x generacion ---------------- */


/*  ---------------- % de estudiantes no activas x sede y x generacion ---------------- */


/*  ---------------- Cantidad y porcentaje mayor que 70% x generacion ---------------- */


	/*  ---------------- cantidad y porcentaje mayor a 70% : TECH ---------------- */


	/*  ---------------- cantidad y porcentaje mayor a 70% : HSE ---------------- */


/*  ---------------- Porcentaje estudiantes satisfechas ---------------- */


/*  ---------------- Puntuacion promedio de PROFESORES ---------------- */


// Por sede 
function getTeacher(sede){
	

	var promedioTotal = 0;
	var promedioParcial = 0;
	var sumaTeachers = 0;
	var aux = 0;
	var ratingGenAnt = 0;

	var sedeGuardada = data[sede];
	console.log(sedeGuardada);
	var seriePromedios = [];
	

	for(var gen in sedeGuardada){
		
		promedioTotal = 0;
		var array = sedeGuardada[gen].ratings;
		var arrayLength = array.length;
		// console.log('LENGTH' + arrayLength);

		array.forEach(function(element,index){
			var teacher = element.teacher;
			// console.log(typeof teacher);
			seriePromedios.push(teacher);
			
		});
		
		ratingGenAnt += arrayLength;
		// console.log('ratingGenAnt '+ratingGenAnt);
	}
	console.log(seriePromedios);

	for(var i=0; i < seriePromedios.length; i++){
		// console.log('PROMEDIO: ' + seriePromedios[i]);
		aux += seriePromedios[i];

		
	};
	var sumaFinal = sumaTeachers += aux / ratingGenAnt;
	// console.log('aux: ' +aux);

	
	// console.log('suma total: '+sumaTeachers);
	
	var teachersId = document.getElementById('teachers-var');

	var puntaje = document.createElement('p');
	var puntajeText = document.createTextNode(sumaTeachers.toFixed(2));

	puntaje.appendChild(puntajeText);
	teachersId.appendChild(puntaje);
}

// por generacion

function getTeacherGen(){
	

}

/*  ---------------- Puntuacion promedio de las JEDI MASTERS ---------------- */
// por sede
function getJedi(sede){
	
	var promedioTotal = 0;
	var promedioParcial = 0;
	var sumaJedis = 0;
	var aux = 0;
	var ratingGenAnt = 0;

	var sedeGuardada = data[sede];
	console.log(sedeGuardada);
	var seriePromedios = [];
	

	for(var gen in sedeGuardada){
		
		promedioTotal = 0;
		var array = sedeGuardada[gen].ratings;
		var arrayLength = array.length;
		// console.log('LENGTH' + arrayLength);

		array.forEach(function(element,index){
			var jedi = element.jedi;
			// console.log(typeof jedi);
			seriePromedios.push(jedi);
			
		});
		
		ratingGenAnt += arrayLength;
		// console.log('ratingGenAnt jedis '+ratingGenAnt);
	}
	console.log(seriePromedios);

	for(var i=0; i < seriePromedios.length; i++){
		// console.log('PROMEDIO jedis: ' + seriePromedios[i]);
		aux += seriePromedios[i];

		// console.log(sumaJedis);
	};
	var sumaFinal = sumaJedis += aux / ratingGenAnt;
	// console.log('aux: ' +aux);

	// sumaTeachers += sumaTeachers;
	// console.log('suma total: '+sumaJedis);
	
	var jedisId = document.getElementById('jedis-var');

	var puntaje = document.createElement('p');
	var puntajeText = document.createTextNode(sumaJedis.toFixed(2));

	puntaje.appendChild(puntajeText);
	jedisId.appendChild(puntaje);
}

