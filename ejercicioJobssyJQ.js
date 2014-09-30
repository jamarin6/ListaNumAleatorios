// js ejercicio jobssy, en version jQuery - abrir en el navegador en: localhost/versionJQ/ejercicioJobssyJQ.html
var numeros = []; // array en el que van a ir los números
var cont = 0; // el contador de numeros, para saber cuantos hay
var numGuardar = 0; // el numero a guardar en bbdd, inicializo a 0

window.onload=function(){ // para que 1ºcargue la página y después pinte la lista
dameEstado(); // 1º cargo los numeros que estén guardados en la bbdd
};

$(document).ready(function(){
	$("#phpNumero").click(function(){
    $.get("http://localhost/versionJQ/aleatorioJQ.php",function(data,status){ // (URL,callback)
      numeros[numeros.length]=data; // cada respuesta la metemos en el array numeros
	  guardar(data); // jQuery version
  	  numeros.sort(ordenar); // ordenamos el array de menor a mayor
  	  cont += 1; // aumento el contador en 1
  	  pintaListaNumeros(numeros); // pinto los numeros
    });
  });
});

function dameEstado(){
  	$.get("http://localhost/versionJQ/dameEstadoJQ.php",function(data,status){ // (URL,callback)
  		numeros = data.split(","); // meto en el array numeros los valores separándolos por la coma que traen entre medias
	  	numeros.sort(ordenar); // ordenamos el array de menor a mayor
	  	cont += numeros.length; // meto a mi contador cont la longitud del array (números de valores)
	  	pintaListaNumeros(numeros); // pinto los numeros, ya que aquí ya tendré la respuesta de Ajax
    });
 }

function guardar(numero){
  	$.post("guardaNumeroJQ.php", {numero: numero}); // (URL,data,callback)
}

function borra(pos){ // manda una variable 'numero' a borrarNumeroJQ.php que lo borrará de la bbdd una sola vez por si aparece + de 1 vez
		$.post("borrarNumeroJQ.php", {numero: numeros[pos]}, function(data,status){ // (URL,data,callback)
			numeros.splice(pos, 1); // borra el elemento del array de la posicion "pos", y borra 1 solo.
			cont -= 1; // restamos 1 al contador
			pintaListaNumeros(numeros);
		});
}

function ordenar(num1, num2) { // ordena de menor a mayor
	return num1 - num2;
}

function pintaListaNumeros(array){
		res="<ul>" ;
		var num = 4;
		for (i = 0; i < array.length; i++) // abajo, Math.floor me redondea a la baja un coeficiente entre 0 y 3 para el color
			res+="<li class='color" + Math.floor(((i / array.length)*4)) + "'>"+array[i] + " <button type='button' class='btn btn-danger' onclick='borra(" + i + ")'>X</button></li>"
		res+="</ul>";
		$("#contador").html("cantidad de numeros: " + cont); // mostramos el contador de numeros
		$("#listNum").html(res); // aquí va la lista con los números
		$("#longArray").html("longitud dl array: " + array.length); // mostramos la longitud del array
}