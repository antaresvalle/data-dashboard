// sedes

var arequipa = data.AQP;
var cdmx = data.CDMX;
var lima = data.LIM;
var santiago = data.SCL;


// GENERACIONES
console.log(arequipa);
var generaciones = function(){

}

// var sedes = Object.keys(data);

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// console.log(sedes);

var generaciones = data.AQP; 
// console.log(generaciones);

var properties = Object.keys(generaciones);
var valor = properties[0];


// console.log(properties);

var newArray = [
	[valor, generaciones[valor]],
	[properties[1], generaciones[properties[1]]]
];


var est = data.AQP["2016-2"].students[0];


var activo = newArray[0][1].students[0].active;

console.log(activo);

console.log(newArray);
// console.log(generaciones[properties[1]);



// ----------------------- PUNTUACION PROMEDIO DE PROFESORES -----------------------

function teachers(sede, generacion){
	
}



