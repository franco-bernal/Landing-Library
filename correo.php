<?php


require("class.phpmailer.php");
require("class.smtp.php");

$nombreCliente = $_POST["nombre"];
$telefono = $_POST["telefono"];
$correoCliente = $_POST['email'];
$obs = $_POST['observaciones'];



$nombre = "FrCodes";

$email = "no-reply@mg.code.com";


$asunto = "Nuevo mensaje desde FrCodes";

$mensaje = "Nuevo mensaje desde FrCodes";





// Datos de la cuenta de correo utilizada para enviar v�a SMTP
$smtpHost = "smtp.gmail.com.";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "PruebasDesarrolloEg@gmail.com";  // Mi cuenta de correo
$smtpClave = "pruebas123456789";  // Mi contrase�a




$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 587;
$mail->IsHTML(true);
$mail->CharSet = "utf-8";

// VALORES A MODIFICAR //
$mail->Host = $smtpHost;
$mail->Username = $smtpUsuario;
$mail->Password = $smtpClave;


$mail->From = $email; // Email desde donde env�o el correo.
$mail->FromName = $nombre;

$mail->AddAddress('Franco9bernal@gmail.com');
//$mail->AddAddress('correo');

$mail->Subject = "Nuevo mensaje desde FrCodes"; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$mail->Body = "
<html> 

<body> 

<h3>Nuevo mensaje desde FrCodes</h3>

<p>Nombre:  {$nombreCliente} </p>
<p>Telefono:  {$telefono} </p>
<p>Correo:  {$correoCliente} </p>
<p>Mensaje:  {$obs} </p>
 


</body> 

</html>

<br />"; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje} \n\n "; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$estadoEnvio = $mail->Send();
if ($estadoEnvio) {
    return print(json_encode('ok'));
} else {
    return print(json_encode('no'));
}
