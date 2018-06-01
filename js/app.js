// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// Variable para obtener la data de las sedes
var aqp = data['AQP'];
var cdmx = data['CDMX'];
var lim = data['LIM'];
var scl = data['SCL'];

/*// Variables para obtener un array de la data de las estudiante por generacion
var genAqp = Object.keys(aqp);
var genCdmx = Object.keys(cdmx);
var genLim = Object.keys(lim);
var genScl = Object.keys(scl)

var nombre = aqp[genAqp[0]]
var prueba = Object.keys(nombre)
console.log(prueba);


var infoGenAqp = []
for (i=0; i < genAqp.length; i++){
	var infoGen = (Object.keys(aqp[genAqp[i]]));

	for(j=0; j < infoGen.length; j++){
	}*/



// console.log(sedes);

/* var generaciones = data.AQP; 
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
// console.log(generaciones[properties[1]); */



