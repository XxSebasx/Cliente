<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Recepción de datos de formulario ejemplo</title>
</head>

<body>
Los datos recibidos son:
<?php
	if (isset($_REQUEST["enviar"]))
	{
		// Se han enviado los datos desde formulario
		$texto = $_REQUEST['texto'];
		$contrasenia = $_REQUEST['contrasenia'];
		$textarea = $_REQUEST['textarea'];
		$checkbox = isset($_REQUEST['checkbox'])?"activado":"no activado";
		$botonesradio = isset($_REQUEST['botonesradio'])?$_REQUEST['botonesradio']:"Nada seleccionado";
		$menu = $_REQUEST['menu'];
		// menu2 es un array
		$menu2 = "";
		if (isset($_REQUEST['menu2']))
		{
			foreach ($_REQUEST['menu2'] as $valor)
			{
				$menu2.=$valor." ";	
			}
		}
		//	echo "Fichero: ".$_REQUEST['texto']."<br/>";

	echo "Texto: $texto<br/> Contraseña: $contrasenia<br/> Textarea: $textarea<br/> checkbox: $checkbox<br/> botonesderadio: $botonesradio<br/> menu: $menu<br/> menu2: $menu2";
	//echo "Fichero: ".$_FILES['fichero']['tmp_name'];
	$origen = $_FILES['fichero']['tmp_name'];
	$destino = "archivos_subidos/".$_FILES['fichero']['name'];
	move_uploaded_file($origen,$destino);
		
	}
	else
	{
		echo "Acceso no permitido";
	} 
?>
</body>
</html>