
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


// Variable para identificar el select
var city = document.getElementById('sede-overview');
// Evento para obtener el valor del select y llamar a la funcion studentsList para mostrar a las estudiantes por sede
city.addEventListener('change', function(){
	var sedeValor = this.value;
	var a = document.getElementById('studentsList').innerHTML = '';
	studentsList(data[sedeValor]);
});

//Funcion para mostrar la informacion de las estudiantes por sede 
function studentsList(sede){
// Iteracion para ingresar a los datos por generacion
	for (var i in sede){
// Variable para guardar el array de estudiantes por generacion
			var array = sede[i]['students'];
// Iteracion para entrar a la informacion de cada estudiante y obtener su información
		array.forEach(function (element,index) {
			// Varible donde se almacenaran los elementos creados para mostrar la informacion de las estudiantes
			var studentsList = document.getElementById('studentsList');
			// Elementos creados para almacenar la informacion
			var infoStudents = document.createElement('div');
			infoStudents.className = 'infostd';
			var uno = document.createElement('div');
			uno.className = 'uno';
			var data = document.createElement('div');
			data.className = 'data';
			var nameStudent = document.createElement('p');
			var dos = document.createElement('div');
			dos.className = 'data';
			var photoStudent = document.createElement("img");
			photoStudent.src = element.photo;
			var statusStudent = document.createElement('p');
			var tres = document.createElement('div');
			var tresTitulo = document.createElement('h4');
			tres.className = 'data';
			var containerTotalSprints = document.createElement('p');
			containerTotalSprints.className = 'totalsprint';
			
			var status = '';
			if (element.active === true){
				status = 'Activa';
			} else {
				status = 'Inactiva';
			};
						
			studentsList.appendChild(infoStudents);
			infoStudents.appendChild(uno);
			uno.appendChild(dos);
			dos.appendChild(photoStudent);
			uno.appendChild(data);
			uno.appendChild(tres);
			data.appendChild(nameStudent);
			data.appendChild(statusStudent);
			tres.appendChild(tresTitulo);
			tresTitulo.appendChild(document.createTextNode('Global'));
			tres.appendChild(containerTotalSprints);
			nameStudent.appendChild(document.createTextNode(element.name));
			statusStudent.appendChild(document.createTextNode(status));
			
			// Array para iterar en cada una de las estudiantes registradas
			var sprints = element.sprints;
			// Variable para alamacenar el desempeno por sprint de cada estudiante y sacar el porcentaje total de los sprints cursados
			var totalSprints = 0;
			
			//Iteración de cada una de las estudiantes registradas
			sprints.forEach(function(element,index){
				// Se obtiene el porcentaje por sprint: total, hse y tech
				var percentSprint = ((element.score.tech + element.score.hse) / 3000) * 100;
				totalSprints += percentSprint;
				var percentHse = (element.score.hse / 1200) * 100;
				var percentTech = (element.score.tech / 1800) * 100;

				//Elementos para guardar la información de los porcentajes por sprint
				var infoSprint = document.createElement("div");
				infoSprint.className = 'sprint';
				var numSprint = document.createElement('h5');
				var containerSprint = document.createElement('span');
				containerSprint.className = 'std';
				var containerHse = document.createElement('span');
				containerHse.className = 'std';
				var containerTech = document.createElement('span');
				containerTech.className = 'std';
				
				infoStudents.appendChild(infoSprint);
				infoSprint.appendChild(numSprint);
				infoSprint.appendChild(containerSprint);
				infoSprint.appendChild(containerHse);
				infoSprint.appendChild(containerTech);
				numSprint.appendChild(document.createTextNode('Sprint' + (index + 1)));
				containerSprint.appendChild(document.createTextNode('Total: ' + percentSprint.toFixed(0) + '% '));
				containerHse.appendChild(document.createTextNode('HSE:  ' + percentHse.toFixed(0) + '% '));
				containerTech.appendChild(document.createTextNode('Tech: ' + percentTech.toFixed(0) + '% '));
			});
			containerTotalSprints.appendChild(document.createTextNode(totalSprints.toFixed(0) / 4 + "%"));
		});		
	};
};