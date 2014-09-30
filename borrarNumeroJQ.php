<?php // recibe un numero para borrarlo de bbdd, si está mas de 1 vez en bbdd borra solo 1 de ellos

	$con=mysqli_connect("localhost","root","","dbNumbers"); // conectar (host,user,password,database)
	// Check connection
	if (mysqli_connect_errno()) {
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	$numBorrar = $_POST['numero']; // se recoge la variable que se manda con el nombre 'numero' desde el .js

	mysqli_query($con,"DELETE FROM tablaNumeros WHERE misNumeros=$numBorrar limit 1"); // borramos solo 1 por si hubiese mas numeros iguales

	mysqli_close($con); // desconectar
 ?>