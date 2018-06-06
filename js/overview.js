/*  
	DATA Global

	Puedes hacer uso de la base de datos a través de la variable `data`
*/

	// console.log(data);

	window.addEventListener('load', function() {
		var btnDefault = document.getElementById('activo');
    	btnDefault.className += "activo";
	});

	// Elemento Dropdown Sedes
	var sede = document.getElementById('sede-overview');

/*
	FUNCION: Mostrar estudiantes INACTIVAS
*/

	// Elemento Boton Inactivas
	var btnEstudiantesInactivas = document.getElementById('btnInactive');

	btnEstudiantesInactivas.addEventListener('click', function(evt) {
		toggleModal(data[this.dataset.custom]);
	});

	// Elemento Input Global
	var asideGlobal = document.getElementsByClassName('in')[0];
	// asideGlobal.addEventListener('click', function(evt) {
	// 	// getGlobalInfo(data[this.dataset.sede]);
	// 	getGlobalInfo(this.dataset.sede);
	// 	evt.stopPropagation();
	// 	console.log(getGlobalInfo(data[this.dataset.sede]));
	// });


/* 
	FUNCION: Obtener parametro en URL
*/
	var getSede = window.location.search.substring(1);
	var splitSede = getSede.split("&");
	var pair = splitSede[0].split("=");
	var sedeValue = pair[1];
	// console.log(sedeValue);
	getTeacher(sedeValue);	   
	getJedi(sedeValue);  
	// getTeacherGen(sedeValue);  

	activeStudents(data[sedeValue]);
	successfulStudents(data[sedeValue]);

	satisfaction(data[sedeValue]);

	btnEstudiantesInactivas.dataset.custom = sedeValue;
	asideGlobal.dataset.sede = sedeValue;

/*
	FUNCION: Asignar parametro en URL a SELECT
*/

	var sede = document.getElementById('sede-overview');
	var getOptionValue = document.getElementsByTagName('option')[0];
	var getOptionText = getOptionValue.textContent;
	var nuevoNombre = getOptionValue.textContent = sedeValue;
	// console.log(nuevoNombre);
	var valores = sede.options[sede.selectedIndex].value;

/* 
	FUNCION: Crear Generaciones en Aside
*/

function showGen(sedeN) {
	var aside = document.getElementById('generaciones-var');
	for (var sede in data) {
		if (sede === sedeN) {
			// console.log(sedeN);
			for (var gen in data[sede]) {
				// console.log(sedeN);
				// console.log('generacion: '+ gen);
				var inputGen = document.createElement('input');
				inputGen.className = 'in';
				inputGen.type = 'radio';
				inputGen.name = 'generacion';
				inputGen.dataset.valor = gen;
				var nombreGen = document.createElement('p');
				nombreGen.className ='aside-sede';
				var content = document.createTextNode(gen);
					
				aside.appendChild(inputGen);
				nombreGen.appendChild(content);
				aside.appendChild(nombreGen );
			}
		}
	}

	getGenAsideValue();
}

showGen(nuevoNombre);
getSelectSedeValue();

/* 
	FUNCION: obtener la valores GLOBALES
*/

	function getGlobalInfo(sede){
			// var main = document.getElementById('main').innerHTML = '';
			
			getTeacher(sede);	
			getJedi(sede);
			activeStudents(data[sede]);
			successfulStudents(data[sede]);
			satisfaction(data[sede]);
		
	}

	// var valorSede = getGenAsideValue();
	// console.log(valorSede);
	// getGlobalInfo();

/*
  FUNCION: Obtener VALOR SEDE del SELECT
*/

	function getSelectSedeValue (){
		var sede = document.getElementById('sede-overview');

		sede.addEventListener('change', function() {
			var sedeValor = sede.options[sede.selectedIndex].value;

			// console.log(sedeValor);
			getGen(sedeValor);
			document.getElementById('generaciones-var').innerHTML = '';
			document.getElementById('teachers-var').innerHTML = '';
			document.getElementById('jedis-var').innerHTML = '';
			showGen(sedeValor);
			getTeacher(sedeValor);	
			getJedi(sedeValor);
			// getTeacherGen(sedeValor);
			console.log('-------llego hasta aqui');
			// getGlobalInfo(this.dataset.sede);


			btnEstudiantesInactivas.dataset.custom = sedeValor;

			// obtener y desplegar datos de generacion
			function getGen(sede) {
				 //console.log(data[sede]);
			}
		});
	}
	

	var city = document.getElementById('sede-overview');

	city.addEventListener('change', function() {
		var sedeValor = this.value;
		// console.log(sedeValor)
		var a = document.getElementById('activas-var').innerHTML = '';
		var b = document.getElementById('inactivas-var').innerHTML = '';
		var c = document.getElementById('global').innerHTML = '';
		var d = document.getElementById('hse').innerHTML = '';
		var e = document.getElementById('tech').innerHTML = '';
		var f = document.getElementById('satisfaction-var').innerHTML = '';
		var g = document.getElementById('contentParent').innerHTML = '';
		activeStudents(data[sedeValor]);
		successfulStudents(data[sedeValor]);
		satisfaction(data[sedeValor]);
		// listInactiveStudents(data[sedeValor]);

	});


/* 
	FUNCION: obtener la GENERACION seleccionada en el ASIDE 
*/

	function getGenAsideValue() {
		var asideInput = document.getElementsByClassName('in');
		var asideSedeName = document.getElementsByClassName('aside-sede');
		var asideSedeNameLength = asideSedeName.length;
		// var genAsideText = asideSedeName.textContent;
		console.log(asideSedeNameLength);

		function getAsideName(){
			for(var i = 0; i < asideSedeNameLength; i++){
			var nombreSedeAside = asideSedeName[i].textContent;
			console.log(nombreSedeAside);
			}
			return nombreSedeAside;
		}
		

		 console.log(asideSedeName); 

		for(var i = 1; i < asideInput.length; i++) {
			var inputElement = asideInput[i];
			var valorElement = inputElement.dataset.valor;

			inputElement.addEventListener('click', function(evt) {
				var a = document.getElementById('activas-var').innerHTML = '';
				var b = document.getElementById('inactivas-var').innerHTML = '';
				var c = document.getElementById('global').innerHTML = '';
				var d = document.getElementById('hse').innerHTML = '';
				var e = document.getElementById('tech').innerHTML = '';
				var grafica = document.getElementById('top_x_div');
				grafica.style.display = 'none';

			// var f = document.getElementById('satisfaction-var').innerHTML = '';
			// var g = document.getElementById('contentParent').innerHTML = '';
				var valorInputGen = evt.target.dataset.valor;
				console.log(valorInputGen,sede.options[sede.selectedIndex].value);

				getActiveStudentsGeneration(data[sede.options[sede.selectedIndex].value], valorInputGen);
				// listInactiveStudentsGeneration(data[sede.options[sede.selectedIndex].value], valorInputGen);
				successfulStudentsGeneration(data[sede.options[sede.selectedIndex].value], valorInputGen);
				// return valorInputGen;
			});
			console.log(valorElement);
			// return valorElement;
		}
	};




/*  
	FUNCION: Asignar parametro en URL a BTN Estudiantes 
*/

	var btnEstudiantes = document.getElementById('estudiantes');
	var urlBtnEst = btnEstudiantes.href;
	var nuevaUrl = urlBtnEst + '?sede=' + sedeValue;
	btnEstudiantes.href = nuevaUrl;

/*  
	FUNCION: Obtener Cantidad de estudiantes ACTIVAS  
*/

	// Variable para guardar la suma de las estudiantes activas e inactivas por sede
	function activeStudents(sede) {
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
				}
			}); //array

			genActive.push(active);
			genInactive.push(inactive);			
		}

		/*
			Muestra la suma total de las estudiantes activas e inactivas
		*/
		var contentActStudn = document.getElementById('activas-var');
		var contentInacStudn = document.getElementById('inactivas-var');
		var showActStudn = document.createElement('p');
		showActStudn.className = 'cont1';
		contentActStudn.appendChild(showActStudn);
		showActStudn.appendChild(document.createTextNode(active));

		var showInacStudn = document.createElement('p');
		showInacStudn.className = 'cont1';
		contentInacStudn.appendChild(showInacStudn);
		showInacStudn.appendChild(document.createTextNode(inactive));

		var totalStudents = active + inactive;
		var ultimoElement = 0;

		genActive.forEach(function(element,index) {
			element = element - ultimoElement;
			// console.log('----' + element);
			var porcentaje = ((element / active) * 100) //((element / active) * 100)
			var genAct = document.createElement('p');

			genAct.className = 'cont';
			contentActStudn.appendChild(genAct);
			genAct.appendChild(document.createTextNode((index + 1) + ':	' + porcentaje.toFixed(2) + '%'));
			ultimoElement += element;
		});

		var ultimoElement = 0;
		genInactive.forEach(function(element,index) {
			element = element - ultimoElement;
			var porcentaje = ((element / inactive) * 100);
			var genAct = document.createElement('p');
			genAct.className = 'cont';
			contentInacStudn.appendChild(genAct);
			genAct.appendChild(document.createTextNode((index + 1) + ':		' + porcentaje.toFixed(2) + '%'));
			ultimoElement += element;
		});

		// console.log(ultimoElement);	
		// console.log(genInactive);
		//console.log(listActive);	

		/*-----------------Gráficas-------------------*/
		google.charts.load('current', {'packages':['bar']});
		     google.charts.setOnLoadCallback(drawStuff);
		     function drawStuff() {
		       var data = new google.visualization.arrayToDataTable([
		         ['Estudiantes', 'Porcentaje'],
		         ["Activas", active,],
		         ["Inactivas", inactive,],
		       ]);
		       var options = {
		         title: 'Estudiantes',
		         width: 500,
		         legend: { position: 'none' },
		         chart: { title: 'Estudiantes',
		                  subtitle: 'porcentaje de activas e inactivas' },
		         bars: 'horizontal', // Required for Material Bar Charts.
		         axes: {
		           x: {
		             0: { side: 'top', label: 'Porcentaje'} // Top x-axis.
		           }
		         },
		         bar: { groupWidth: "60%" }
		       };
		       var chart = new google.charts.Bar(document.getElementById('top_x_div'));
		       chart.draw(data, options);
		     };
		/*Termina Gráfica*/
	};

/*  
	FUNCION: PORCENTAJE de estudiantes INACTIVAS x SEDE y x GENERACION  
*/

	function listInactiveStudents(sede) {
		var inactive = 0;
		// Variable para guardar la suma de las estudiantes activas e inactivas por sede
		var active = 0;
		var inactive = 0;
		var countActive = 0;

		// Iteracion para ingresar a los datos por generacion
		for (var i in sede) {
			// Variable para guardar el array de estudiantes por generacion
			var array = sede[i]['students'];
			
			// Iteracion para entrar a la informacion de cada estudiante y obtener el valor de active.
			array.forEach(function (element,index) {
				// Was inactiveList changed to ContentParent for Modal
				var inactiveList = document.getElementById('contentParent');

				if (element.active === false) {
					inactive += 1;
			
					var studentInactive = document.createElement("div");
					var nameStudentInactive = document.createElement('p');
					nameStudentInactive.className = 'p-modal';
					var photoStudentInactive = document.createElement('img');
					photoStudentInactive.className = 'img-modal';
					
					inactiveList.appendChild(studentInactive);
					studentInactive.appendChild(photoStudentInactive);
					photoStudentInactive.src = element.photo;
					studentInactive.appendChild(nameStudentInactive);
					nameStudentInactive.appendChild(document.createTextNode(element.name));
				};
			});//array
		};
	};
/* 
	FUNCION: CANTIDAD y PORCENTAJE MAYOR a 70% x GENERACION  
*/
	function successfulStudents(sede) {
		var active = 0;
		var genActive = [];
		// Iteracion para ingresar a los datos por generacion

		var arrayGeneracionTotal = [];
		var arrayGeneracionHse = [];
		var arrayGeneracionTech = []

		for (var i in sede){
			// console.log(sede[i]);
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
					// console.log(arraySprints);
					var totalPoints = 0;
					var pointsHse = 0;
					var pointsTech = 0;
				
					arraySprints.forEach(function(element,index) {
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
				}
			});

			arrayGeneracionTotal.push(totalSuccessfulStdnt);
			arrayGeneracionHse.push(studentsHse);
			arrayGeneracionTech.push(studentsTech);
			genActive.push(active);
		};
		
		var contTotalGen = document.getElementById('global');
		var contHse = document.getElementById('hse');
		var contTech = document.getElementById('tech');

		var ultimoElement = 0;
		genActive.forEach(function(element,index) {
			element = element - ultimoElement

			var porcentajeTotal = ((arrayGeneracionTotal[index]) / element) * 100;
			var porcentajeHse = ((arrayGeneracionHse[index]) / element) * 100;
			var porcentajeTech = ((arrayGeneracionTech[index]) / element) * 100;

			var totalGen = document.createElement('p');
			totalGen.className = 'cont';
			var totalHse = document.createElement ('p');
			totalHse.className = 'cont';
			var totalTech = document.createElement ('p');
			totalTech.className = 'cont';
			var numtotalGen = document.createElement('p');
			numtotalGen.className = 'cont';
			var numtotalHse = document.createElement ('p');
			numtotalHse.className = 'cont';
			var numtotalTech = document.createElement ('p');
			numtotalTech.className = 'cont';

			contTotalGen.appendChild(numtotalGen);
			numtotalGen.appendChild(document.createTextNode((index + 1) + ':	' + arrayGeneracionTotal[index]));

			contHse.appendChild(numtotalHse);
			numtotalHse.appendChild(document.createTextNode((index + 1) + ':	' + arrayGeneracionHse[index]));

			contTech.appendChild(numtotalTech);
			numtotalTech.appendChild(document.createTextNode((index + 1) + ':	' + arrayGeneracionTech[index]));

			contTotalGen.appendChild(totalGen);
			totalGen.appendChild(document.createTextNode(porcentajeTotal.toFixed(2) + '%'));

			contHse.appendChild(totalHse);
			totalHse.appendChild(document.createTextNode(porcentajeHse.toFixed(2) + '%'));

			contTech.appendChild(totalTech);
			totalTech.appendChild(document.createTextNode(porcentajeTech.toFixed(2) + '%'));

			
			ultimoElement += element
		});
	};
/*  
	FUNCION: cantidad y porcentaje mayor a 70% : TECH 
*/
	// TBD

/*  
	FUNCION: cantidad y porcentaje mayor a 70% : HSE  
*/
	// TBD

/*  
	FUNCION: PORCENTAJE ESTUDIANTES SATISFECHAS
*/

	function satisfaction(sede) {
		// Iteracion para ingresar a los datos por generacion
		for (var i in sede) {
			// Variable para guardar el array de estudiantes por generacion
			var array = sede[i]['ratings'];
			// console.log(array)
			
			// Iteracion para entrar a la informacion de cada estudiante y obtener el valor de active.
			var suma = 0;
			array.forEach(function (element,index) {
				suma += element.student.cumple + element.student.supera;
					
			});//array
				
			// console.log(suma)
			var porcentaje = (suma / array.length);
			var contenedor = document.getElementById('satisfaction-var');
			var satisfaccion = document.createElement('p');
			satisfaccion.className = 'cont';
			
			contenedor.appendChild(satisfaccion);
			satisfaccion.appendChild(document.createTextNode(porcentaje.toFixed(2) + '%'));
		}
	}
/* 
	FUNCION: PUNTUACION PROMEDIO de PROFESORES 
*/

	// Por sede 
	function getTeacher(sede) {
		// debugger
		var promedioTotal = 0;
		var promedioParcial = 0;
		var sumaTeachers = 0;
		var aux = 0;
		var ratingGenAnt = 0;
		var sedeGuardada = data[sede];
		var seriePromedios = [];
		// console.log(sedeGuardada);
		
		for (var gen in sedeGuardada) {
			var array = sedeGuardada[gen].ratings;
			var arrayLength = array.length;
			promedioTotal = 0;
			// console.log('LENGTH' + arrayLength);

			array.forEach(function(element,index) {
				var teacher = element.teacher;
				// console.log(typeof teacher);
				seriePromedios.push(teacher);
			});
			
			ratingGenAnt += arrayLength;
			// console.log('ratingGenAnt '+ratingGenAnt);
		}

		// console.log(seriePromedios);

		for (var i=0 ; i < seriePromedios.length ; i++) {
			// console.log('PROMEDIO: ' + seriePromedios[i]);
			aux += seriePromedios[i];
		}

		var sumaFinal = sumaTeachers += aux / ratingGenAnt;
		var teachersId = document.getElementById('teachers-var');
		var puntaje = document.createElement('p');
		var puntajeText = document.createTextNode(sumaTeachers.toFixed(2));
		// console.log('aux: ' +aux);
		// console.log('suma total: '+sumaTeachers);

		puntaje.appendChild(puntajeText);
		teachersId.appendChild(puntaje);
	}

/* 
	FUNCION: x GENERACION 
*/

	function getTeacherGen(sede) {
		var promedioTotal = 0;
		var promedioParcial = 0;
		var sumaTeachers;
		var aux = 0;
		var ratingGenAnt = 0;
		var sedeGuardada = data[sede];
		var seriePromedios = [];
		console.log(sedeGuardada);
		
		for (var gen in sedeGuardada) {
			var array = sedeGuardada[gen].ratings;
			var arrayLength = array.length;
			promedioTotal = 0;
			console.log('LENGTH' + arrayLength);


			array.forEach(function(element,index) {
				var teacher = element.teacher;
				console.log('teacher ' + teacher);
				var nuevoPromGen = [];
				nuevoPromGen.push(teacher);
				seriePromedios.push(teacher);
				console.log(seriePromedios);
				// ratingGenAnt += arrayLength;
				// seriePromedios.push(teacher);

				// for (var i=0 ; i < arrayLength ; i++) {
				// 	// console.log('PROMEDIO: ' + seriePromedios[i]);
				// 	sumaTeachers = ratingGenAnt += teacher;
				// }
			});
			
		}

		var sumaFinal = sumaTeachers += aux / ratingGenAnt;
		
		console.log('suma total: '+sumaFinal);

		// puntaje.appendChild(puntajeText);
		// teachersId.appendChild(puntaje);
	}

/* 
	FUNCION: PUNTUACION PROMEDIO de las JEDI MASTERS  
*/

	// por sede
	function getJedi(sede) {
		var promedioTotal = 0;
		var promedioParcial = 0;
		var sumaJedis = 0;
		var aux = 0;
		var ratingGenAnt = 0;
		var sedeGuardada = data[sede];
		var seriePromedios = [];
		// console.log(sedeGuardada);
		
		for (var gen in sedeGuardada) {
			promedioTotal = 0;
			var array = sedeGuardada[gen].ratings;
			var arrayLength = array.length;
			// console.log('LENGTH' + arrayLength);

			array.forEach(function(element,index) {
				var jedi = element.jedi;
				// console.log(typeof jedi);
				seriePromedios.push(jedi);
			});
			
			ratingGenAnt += arrayLength;
			// console.log('ratingGenAnt jedis '+ratingGenAnt);
		}

		// console.log(seriePromedios);

		for (var i=0 ; i < seriePromedios.length ; i++) {
			aux += seriePromedios[i];
			// console.log('PROMEDIO jedis: ' + seriePromedios[i]);
			// console.log(sumaJedis);
		}

		var sumaFinal = sumaJedis += aux / ratingGenAnt;
		var jedisId = document.getElementById('jedis-var');
		var puntaje = document.createElement('p');
		var puntajeText = document.createTextNode(sumaJedis.toFixed(2));
		// console.log('aux: ' +aux);
		// console.log('suma total: '+sumaJedis);

		puntaje.appendChild(puntajeText);
		jedisId.appendChild(puntaje);
	}

/*
	FUNCION: DESPLEGAR MODAL con ESTUDIANTES INACTIVAS
*/

	var sedeModal = document.getElementById('sede-overview');
	var sedeModalValor = sede.options[sede.selectedIndex].value;
	var sedeValor = sede.options[sede.selectedIndex].value;
	var getOptionValue = document.getElementsByTagName('option');
	var pruebaSedeV = sede.options[sede.selectedIndex].value;
	var modal = document.querySelector(".modal");
    var trigger = document.querySelector("#btnInactive");
    var closeButton = document.querySelector(".close-button");
    var modalContent = document.querySelector(".modal-content");

	// console.log(sedeModal.value);
	// console.log(sedeValor);
	// console.log(getOptionValue);
	

    function toggleModal(generaciones) {
        modal.classList.toggle("show-modal");
        listInactiveStudents(generaciones);
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    closeButton.addEventListener("click", function() {
    	modal.classList.toggle("show-modal");
    });

    window.addEventListener("click", windowOnClick);


/*
	FUNCION: ESTUDIANTES ACTIVAS por GENERACION
*/


//-----------Obtener la cantidad y porcentaje de las estudiantes activas por generacion------------//
function getActiveStudentsGeneration (sede,generacion){
	var active = 0;
	var inactive = 0;
// Variable para guardar el array de estudiantes por generacion
console.log(sede);
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
	var contentActStudn = document.getElementById('activas-var');
	var contentInacStudn = document.getElementById('inactivas-var');
	var showActStudn = document.createElement('p');
	showActStudn.className = 'cont1';
	contentActStudn.appendChild(showActStudn)
	showActStudn.appendChild(document.createTextNode(active))

	var showInacStudn = document.createElement('p');
	showInacStudn.className = 'cont1';
	contentInacStudn.appendChild(showInacStudn)
	showInacStudn.appendChild(document.createTextNode(inactive))

	var totalStudents = active + inactive

	var porcentajeActivas = ((active / totalStudents) * 100)
	var genAct = document.createElement('p');
	genAct.className = 'cont';
	contentActStudn.appendChild(genAct);
	genAct.appendChild(document.createTextNode(porcentajeActivas.toFixed(2) + '% '));

	var porcentajeInactivas = ((inactive / totalStudents) * 100)
	var genInac = document.createElement('p');
	genInac.className = 'cont';
	contentInacStudn.appendChild(genInac);
	genInac.appendChild(document.createTextNode(porcentajeInactivas.toFixed(2) + '%'));
};

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

	var contTotalGen = document.getElementById('global');
	var contHse = document.getElementById('hse');
	var contTech = document.getElementById('tech');

	var porcentajeTotal = (totalSuccessfulStdnt / active) * 100;
	var porcentajeHse = (studentsHse / active) * 100;
	var porcentajeTech = (studentsTech / active) * 100;

	var totalGen = document.createElement('p');
	totalGen.className = 'cont';
	var totalHse = document.createElement ('p');
	totalHse.className = 'cont';
	var totalTech = document.createElement ('p');
	totalTech.className = 'cont';

	var numtotalGen = document.createElement('p');
	numtotalGen.className = 'cont';
	var numtotalHse = document.createElement ('p');
	numtotalHse.className = 'cont';
	var numtotalTech = document.createElement ('p');
	numtotalTech.className = 'cont';

	contTotalGen.appendChild(numtotalGen);
	numtotalGen.appendChild(document.createTextNode(totalSuccessfulStdnt));

	contHse.appendChild(numtotalHse);
	numtotalHse.appendChild(document.createTextNode(studentsHse));

	contTech.appendChild(numtotalTech);
	numtotalTech.appendChild(document.createTextNode(studentsTech));


	contTotalGen.appendChild(totalGen);
	totalGen.appendChild(document.createTextNode(porcentajeTotal.toFixed(2) + '%'));

	contHse.appendChild(totalHse);
	totalHse.appendChild(document.createTextNode(porcentajeHse.toFixed(2) + '%'));

	contTech.appendChild(totalTech);
	totalTech.appendChild(document.createTextNode(porcentajeTech.toFixed(2) + '%'));

};
