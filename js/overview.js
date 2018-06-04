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
		 //console.log(data[sede]);
	};

});
var city = document.getElementById('sede-overview');

city.addEventListener('change', function(){
	var sedeValor = this.value;
	console.log(sedeValor)
	var a = document.getElementById('activas').innerHTML = '';
	var b = document.getElementById('inactivas').innerHTML = '';
	var c = document.getElementById('total').innerHTML = '';
	var d = document.getElementById('hse').innerHTML = '';
	var e = document.getElementById('tech').innerHTML = '';
	var f = document.getElementById('satisfaction').innerHTML = '';
	activeStudents(data[sedeValor]);
	successfulStudents(data[sedeValor]);
	listInactiveStudents(data[sedeValor]);
	satisfaction(data[sedeValor])
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
		});
		// console.log(valorElement);
	}

};


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


/*  ---------------- Cantidad de estudiantes activas ---------------- */
// Variable para guardar la suma de las estudiantes activas e inactivas por sede


function activeStudents(sede){
	var active = 0;
	var inactive = 0;
	var genActive = [];
	var genInactive = [];
	// Iteracion para ingresar a los datos por generacion
	for (var i in sede){

	// Variable para guardar el array de estudiantes por generacion
			var array = sede[i]['students'];
		
	// Iteracion para entrar a la informacion de cada estudiante y obtener el valor de active.
		array.forEach(function (element,index) {
		var inactiveList = document.getElementById('inactiveList');

			if( element.active === true){
				active += 1;
			
			} else if (element.active === false) {
				inactive += 1;
			};
				
		});//array
		genActive.push(active);
		genInactive.push(inactive);			
	};

	//Muestra la suma total de las estudiantes activas e inactivas
	var contentActStudn = document.getElementById('activas');
	var contentInacStudn = document.getElementById('inactivas');
	var showActStudn = document.createElement('p');
	contentActStudn.appendChild(showActStudn)
	showActStudn.appendChild(document.createTextNode('Estudiantes activas por sede: '+ active))

	var showInacStudn = document.createElement('p');
	contentInacStudn.appendChild(showInacStudn)
	showInacStudn.appendChild(document.createTextNode('Estudiantes inactivas por sede: ' + inactive))

	var totalStudents = active + inactive

	var ultimoElement = 0;
	genActive.forEach(function(element,index){
		element = element - ultimoElement
		var porcentaje = ((element / active) * 100)
		var genAct = document.createElement('p');
		contentActStudn.appendChild(genAct);
		genAct.appendChild(document.createTextNode('Estudiantes activas generacion '+ (index + 1) + ': ' + porcentaje.toFixed(2)))
		ultimoElement += element
	});

	var ultimoElement = 0;
	genInactive.forEach(function(element,index){
		element = element - ultimoElement
		var porcentaje = ((element / inactive) * 100)
		var genAct = document.createElement('p');
		contentInacStudn.appendChild(genAct);
		genAct.appendChild(document.createTextNode('Estudiantes inactivas generacion '+ (index + 1) + ': ' + porcentaje.toFixed(2)))
		ultimoElement += element
	});
	console.log(ultimoElement);
	
	console.log(genInactive);

	//console.log(listActive);
	
};

/*  ---------------- % de estudiantes no activas x sede y x generacion ---------------- */

function listInactiveStudents(sede){
	var inactive = 0;


	// Variable para guardar la suma de las estudiantes activas e inactivas por sede
	var active = 0;
	var inactive = 0;
	var countActive = 0;

	// Iteracion para ingresar a los datos por generacion
	for (var i in sede){

	// Variable para guardar el array de estudiantes por generacion
			var array = sede[i]['students'];
		
	// Iteracion para entrar a la informacion de cada estudiante y obtener el valor de active.
		array.forEach(function (element,index) {
		var inactiveList = document.getElementById('inactiveList');

			if (element.active === false) {
				inactive += 1;
		
				var studentInactive = document.createElement("div");
				var nameStudentInactive = document.createElement('p');
				var photoStudentInactive = document.createElement('img');
				
				inactiveList.appendChild(studentInactive);
				studentInactive.appendChild(photoStudentInactive);
				photoStudentInactive.src = element.photo;
				studentInactive.appendChild(nameStudentInactive);
				nameStudentInactive.appendChild(document.createTextNode(element.name));

			};
				
		});//array
				
	};
	
};

/*  ---------------- % de estudiantes no activas x sede y x generacion ---------------- */


/*  ---------------- Cantidad y porcentaje mayor que 70% x generacion ---------------- */
function successfulStudents(sede){
	var active = 0;
	var genActive = [];
	// Iteracion para ingresar a los datos por generacion

	var arrayGeneracionTotal = [];
	var arrayGeneracionHse = [];
	var arrayGeneracionTech = []

	for (var i in sede){
		console.log(sede[i]);
		

// Variable para guardar el array de estudiantes por generacion
		var array = sede[i]['students'];

		
		var totalSuccessfulStdnt = 0;
		var studentsHse = 0;
		var studentsTech = 0;

// Iteracion para entrar a la informacion de cada estudiante y obtener el valor de active.
		array.forEach(function (element,index) {

			if( element.active === true){
				active += 1;
				var arraySprints = element.sprints;
				console.log(arraySprints);
				
				
				var totalPoints = 0;
				var pointsHse = 0;
				var pointsTech = 0;
			
				arraySprints.forEach(function(element,index){
					var pointsSprints = 0;
				
					//console.log(element.score)
					//console.log(element.score.tech)
					//console.log(element.score.hse)
					pointsSprints += element.score.tech + element.score.hse;
					totalPoints += pointsSprints;
					pointsHse += element.score.hse;
					pointsTech += element.score.tech;
							
					
				});

				console.log('total ' + totalPoints);
				console.log('HSE ' + pointsHse);
				console.log('Tech ' + pointsTech);
			
				if (totalPoints > (2100 * arraySprints.length)){
					totalSuccessfulStdnt += 1;
				}

				if (pointsHse > (840 * arraySprints.length)){
					studentsHse += 1;
				}

				if (pointsTech > (1260 * arraySprints.length )){
					studentsTech += 1;
				}		
			};
		});

	console.log(totalSuccessfulStdnt)
	console.log(studentsHse)
	console.log(studentsTech)

	arrayGeneracionTotal.push(totalSuccessfulStdnt);
	arrayGeneracionHse.push(studentsHse);
	arrayGeneracionTech.push(studentsTech);
	genActive.push(active);

	};

	console.log(arrayGeneracionHse);
	console.log(arrayGeneracionTech);
	console.log(arrayGeneracionTotal);
	console.log(active)
	console.log(genActive);
	
	var contTotalGen = document.getElementById('total');
	var contHse = document.getElementById('hse');
	var contTech = document.getElementById('tech');

	var ultimoElement = 0;
	genActive.forEach(function(element,index){
		element = element - ultimoElement
		console.log (arrayGeneracionTotal[index])
		var porcentajeTotal = ((arrayGeneracionTotal[index]) / element) * 100;
		var porcentajeHse = ((arrayGeneracionHse[index]) / element) * 100;
		var porcentajeTech = ((arrayGeneracionTech[index]) / element) * 100;


		var totalGen = document.createElement('p');
		var totalHse = document.createElement ('p');
		var totalTech = document.createElement ('p');

		contTotalGen.appendChild(totalGen);
		totalGen.appendChild(document.createTextNode('generacion '+ (index + 1) + ': ' + porcentajeTotal.toFixed(2) + '%'));

		contHse.appendChild(totalHse);
		totalHse.appendChild(document.createTextNode('hse '+ (index + 1) + ': ' + porcentajeHse.toFixed(2) + '%'));

		contTech.appendChild(totalTech);
		totalTech.appendChild(document.createTextNode('Tech '+ (index + 1) + ': ' + porcentajeTech.toFixed(2) + '%'));

		ultimoElement += element
	});


};
	/*  ---------------- cantidad y porcentaje mayor a 70% : TECH ---------------- */


	/*  ---------------- cantidad y porcentaje mayor a 70% : HSE ---------------- */


/*  ---------------- Porcentaje estudiantes satisfechas ---------------- */

function satisfaction(sede){
	
	// Iteracion para ingresar a los datos por generacion
	for (var i in sede){

	// Variable para guardar el array de estudiantes por generacion
			var array = sede[i]['ratings'];
			console.log(array)
		
	// Iteracion para entrar a la informacion de cada estudiante y obtener el valor de active.
		var suma = 0;
		array.forEach(function (element,index) {
			suma += element.student.cumple + element.student.supera;
				
		});//array
			
		console.log(suma)
		var porcentaje = (suma / array.length);
		var contenedor = document.getElementById('satisfaction');
		var satisfaction = document.createElement('p');
		
		contenedor.appendChild(satisfaction);
		satisfaction.appendChild(document.createTextNode(porcentaje.toFixed(2)));

	};
};

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

