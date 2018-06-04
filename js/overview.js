window.addEventListener('load', function() {
	var btnDefault = document.getElementById('activo');
    btnDefault.className += "activo";

})

/*  ---------------- Obtencion de datos principales ---------------- */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// obtener valor sede de select

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
/*  ---------------- Puntuacion promedio de Profesores ---------------- */


/*  ---------------- Puntuacion promedio de las JediMasters ---------------- */
