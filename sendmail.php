<?php

error_reporting(0);

use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);

$alert = '';

if(isset($_POST['enviar'])){
  $name = $_POST['name'];
  $email = $_POST['mail'];
  $msg = $_POST['message'];
  $subject = $_POST['subject'];

try{
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'yourmail@gmail.com'; // Gmail address which you want to use as SMTP server
  $mail->Password = 'yourpassword'; // Gmail address Password
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port = '587';

  $mail->setFrom('yourmail@gmail.com'); // Gmail address which you used as SMTP server
  $mail->addAddress('yourpassword'); // Email address where you want to receive emails (you can use any of your gmail address including the gmail address which you used as SMTP server)

  $mail->isHTML(true);
  $mail->Subject = 'Mensaje Recibido (CONTACTO INCARGO)';
  $mail->Body = "<h3>Nombre: $name <br>Email: $email <br>Asunto: $subject <br>Mensaje: $msg</h3>";

  $mail->send();
      $alert = '<div class="alert-success">
                 <span>Message Sent! Thank you for contacting us.</span>
                </div>';
  } catch (Exception $e){
    $alert = '<div class="alert-error">
                <span>'.$e->getMessage().'</span>
              </div>';
  }
}
?>