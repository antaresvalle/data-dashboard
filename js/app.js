// Boton entrar

var entrar = document.getElementById('btn-entrar');
console.log(entrar);





var sede = document.getElementById('sede');

var sedeValue = sede.addEventListener('change', function(){
	var sedeValor = sede.options[sede.selectedIndex].value;

	console.log(sedeValor);
	getGen(sedeValor);


	// obtener y desplegar datos de generacion
	function getGen(sede){
		console.log(data[sede]);
	};

	entrar.addEventListener('click', function(){
	window.location.href='overview.html?sede='+ sedeValor;
});

});

