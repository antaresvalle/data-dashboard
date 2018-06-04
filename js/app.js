
// Obtener el valor del select de la sede

var selectSede = document.getElementById('selectSede');
	selectSede.addEventListener("change", function(){
	var sedeValor = this.value;
	console.log(sedeValor);
	
});

// Boton entrar

var entrar = document.getElementById('btn-entrar');
console.log(entrar);

entrar.addEventListener('click', function(){
	window.location.href='overview.html';
});
