<?php


$nombre = $_POST['nombre'];
$correo = $_POST['email'];
$mensaje = $_POST['mensaje'];



function validarNombre($nombre){
    if($nombre == "Luis"){
        procesarMensaje();
    }else{
        echo "Tu no eres Luis, mamawebo";
    }
}

function procesarMensaje(){
    global $correo;
    global $mensaje;

    if(empty($mensaje)){
        echo "No escribiste nada";
    }else {
        echo "Gracias por tu mensaje, mamawebo <br>";
        echo $mensaje. ", ".$correo;
        //header("Location: ./index.html");

    }

}


validarNombre($nombre);


?>