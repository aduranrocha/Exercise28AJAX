/**
 * Codigo para hacer peticiones
 */

var tablaPerro = document.getElementById("tablaPerros");
console.log(tablaPerros);
function traerDatosPerros(){
	// 1. Crear e iniciar objeto para realizar peticion
	var request = new XMLHttpRequest();
	// 2. Function que hacer con la respuesta
	request.onreadystatechange = function(){
		// si (obtuve una respuesta & la respuesta fue buena)
		if(this.readyState == 4 && this.status == 200){
			visualizarDatos(this.responseText);
		}
		console.log(this.readyState);
	}
	// 3. prepara la peticion
	// Indicacion de obtener el documento de mi servlet
	request.open("GET","perros.json",true);
	// 4. Enviar la peticion, esperando respuesta
	request.send();
}

function visualizarDatos(data){
	var table = document.getElementById("tablaPerros");
	// parsear cualquier tipo de dato a JSON
	var listaPerros = JSON.parse(data);
	for (i = 0; i < listaPerros.length; i++){
		var perro = listaPerros[i];
		crearFila(perro);
	}
}
var tbody = tablaPerros.tBodies[0];
// Crear fila
function crearFila(perro){
	var tbody = tablaPerros.tBodies[0];
	var row = document.createElement("tr");
	// Vtrat celdas para datos de perro
	var tdNombre = document.createElement("td");
	var tdSexo = document.createElement("td");
	var tdEdad = document.createElement("td");
	var tdPeso = document.createElement("td");
	var tdVivo = document.createElement("td");
	var tdPropietario = document.createElement("td");
	var tdCuidados = document.createElement("td");
	var tdEsterilizado = document.createElement("td");
	// Configuracion de los datos en los elementos
	tdNombre.innerText = perro.nombre;
	tdSexo.innerText = perro.sexo;
	tdEdad.innerText = perro.edad;
	tdPeso.innerText = perro.peso;
	tdVivo.innerText = perro.estaVivo;
	tdPropietario.innerText = perro.propietario.nombre;
	tdCuidados.innerText = perro.cuidados[0];
	tdEsterilizado.innerText = perro.esterilizado;
	// Agregar las celdas con los datos en la fila
	row.appendChild(tdNombre);
	row.appendChild(tdSexo);
	row.appendChild(tdEdad);
	row.appendChild(tdPeso);
	row.appendChild(tdVivo);
	row.appendChild(tdPropietario);
	row.appendChild(tdCuidados);
	row.appendChild(tdEsterilizado);
	// Agregar la fila en la tabla
	tbody.appendChild(row);
}
