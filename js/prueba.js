
//-----------Obtener la cantidad y porcentaje de las estudiantes activas por generacion------------//
function getActiveStudentsGeneration (sede,generacion){
	var active = 0;
	var inactive = 0;
// Variable para guardar el array de estudiantes por generacion
			var array = sede[generacion]['students'];

// Iteracion para entrar a la informacion de cada estudiante y obtener el valor de active.
		array.forEach(function (element,index) {
		var inactiveList = document.getElementById('inactiveList');

			if( element.active === true){
				active += 1;

			} else if (element.active === false) {
				inactive += 1;
			};
		});

	//Muestra el total de las estudiantes activas e inactivas
	var contentActStudn = document.getElementById('activas');
	var contentInacStudn = document.getElementById('inactivas');
	var showActStudn = document.createElement('p');
	contentActStudn.appendChild(showActStudn)
	showActStudn.appendChild(document.createTextNode('Estudiantes activas: '+ active))

	var showInacStudn = document.createElement('p');
	contentInacStudn.appendChild(showInacStudn)
	showInacStudn.appendChild(document.createTextNode('Estudiantes inactivas: ' + inactive))

	var totalStudents = active + inactive

	var porcentajeActivas = ((active / totalStudents) * 100)
	var genAct = document.createElement('p');
	contentActStudn.appendChild(genAct);
	genAct.appendChild(document.createTextNode('Estudiantes activas generacion '+ generacion + ': ' + porcentajeActivas.toFixed(2) + '% '));

	var porcentajeInactivas = ((inactive / totalStudents) * 100)
	var genInac = document.createElement('p');
	contentInacStudn.appendChild(genInac);
	genInac.appendChild(document.createTextNode('Estudiantes inactivas generacion '+ generacion + ': ' + porcentajeInactivas.toFixed(2) + '%'));
};

getActiveStudentsGeneration(data['AQP'],'2016-2');

//----------Obtener la lista de estudiantes inactivas por generacion-----------------------------------------------//
function listInactiveStudentsGeneration(sede, generacion){
	var inactive = 0;
// Variable para guardar el array de estudiantes por generacion
	var array = sede[generacion]['students'];

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
	});
};
listInactiveStudentsGeneration(data['AQP'],'2016-2');


/*  ---------------- Cantidad y porcentaje mayor que 70% x generacion ---------------- */
function successfulStudentsGeneration(sede,generation){
	var active = 0;
	// Variable para guardar el array de estudiantes por generacion
	var array = sede[generation]['students'];

	var totalSuccessfulStdnt = 0;
	var studentsHse = 0;
	var studentsTech = 0;

	// Iteracion para entrar a la informacion de cada estudiante y obtener el valor de active.
	array.forEach(function (element,index) {

		if( element.active === true){
			active += 1;
			var arraySprints = element.sprints;

			var totalPoints = 0;
			var pointsHse = 0;
			var pointsTech = 0;
			//Iteración para obtener el puntaje de Tech y HSE
			arraySprints.forEach(function(element,index){
				var pointsSprints = 0;

  				pointsSprints += element.score.tech + element.score.hse;
				totalPoints += pointsSprints;
				pointsHse += element.score.hse;
				pointsTech += element.score.tech;
			});

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

	var contTotalGen = document.getElementById('total');
	var contHse = document.getElementById('hse');
	var contTech = document.getElementById('tech');

	var porcentajeTotal = (totalSuccessfulStdnt / active) * 100;
	var porcentajeHse = (studentsHse / active) * 100;
	var porcentajeTech = (studentsTech / active) * 100;

	var totalGen = document.createElement('p');
	var totalHse = document.createElement ('p');
	var totalTech = document.createElement ('p');

	contTotalGen.appendChild(totalGen);
	totalGen.appendChild(document.createTextNode('generacion '+ generation + ': ' + porcentajeTotal.toFixed(2) + '%'));

	contHse.appendChild(totalHse);
	totalHse.appendChild(document.createTextNode('hse '+ generation + ': ' + porcentajeHse.toFixed(2) + '%'));

	contTech.appendChild(totalTech);
	totalTech.appendChild(document.createTextNode('Tech '+ generation + ': ' + porcentajeTech.toFixed(2) + '%'));

};
successfulStudentsGeneration (data['AQP'],'2016-2');