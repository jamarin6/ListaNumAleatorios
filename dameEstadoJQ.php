<?php // me devuelve los valores de la columna 'misNumeros' de mi tabla 'tablaNumeros' de la bbdd, con comas solo entre medias

	$con=mysqli_connect("localhost","root","","dbNumbers"); // conectar (host,user,password,database)
	// Check connection
	if (mysqli_connect_errno()) {
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	$result = mysqli_query($con,"SELECT misNumeros FROM tablaNumeros");
	$laCadena = ""; // inicializo el string

	while($row = mysqli_fetch_array($result,MYSQLI_NUM)) {
	  $myCadena = $row[0] . ","; // voy sacando 1 valor y coma, otro valor y coma, etc...
	  // $laCadena <-- $myCadena
	  $laCadena = $laCadena . $myCadena; // voy añadiendo numero + coma en cada iteración a $laCadena, acumulando todos los string
	}
	//sleep ( 5 );
	echo chop($laCadena,","); // elimino la última coma (trailing comma) para una mejor manipulación del string

	mysqli_close($con); // desconectar
?>