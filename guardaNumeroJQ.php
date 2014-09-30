<?php  // recibe un numero que guarda en bbdd

	$con=mysqli_connect("localhost","root","","dbNumbers");

	// Check connection
	if (mysqli_connect_errno()) {
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	$numero = $_POST['numero']; // se recoge la variable que se manda con el nombre 'numero' desde el .js

	mysqli_query($con,"INSERT INTO tablaNumeros (misNumeros)
	VALUES ($numero)"); // inserto el valor '$numero' en la columna 'misNumeros' de mi tabla 'tablaNumeros'

	mysqli_close($con);
?>