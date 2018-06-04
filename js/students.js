
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
		var genAct = document.createElement('p');
		contentActStudn.appendChild(genAct);
		genAct.appendChild(document.createTextNode('Estudiantes activas generacion '+ (index + 1) + ': ' + element))
		ultimoElement += element
	});

	var ultimoElement = 0;
	genInactive.forEach(function(element,index){
		element = element - ultimoElement
		//var porcentaje = elemento 
		var genAct = document.createElement('p');
		contentInacStudn.appendChild(genAct);
		genAct.appendChild(document.createTextNode('Estudiantes inactivas generacion '+ (index + 1) + ': ' + element))
		ultimoElement += element
	});
	console.log(ultimoElement);
	
	console.log(genInactive);

	//console.log(listActive);
	
};