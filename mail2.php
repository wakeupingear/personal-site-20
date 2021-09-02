<?php

require __DIR__. '/vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;


$subject = $_GET['subject'];
$txt = $_GET['body'];
$headers = $_GET['header'];
$name = $_GET['name'];

$mail = new PHPMailer();
//Enable SMTP debugging. 
$mail->SMTPDebug = 3;                               
//Set PHPMailer to use SMTP.
$mail->isSMTP();            
//Set SMTP host name                          
$mail->Host = "smtp.gmail.com";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;                          
//Provide username and password     
$mail->Username = "wfwebsitemanager@gmail.com";                 
$mail->Password = "potato55";                           
//If SMTP requires TLS encryption then set it
$mail->SMTPSecure = "tls";                           
//Set TCP port to connect to 
$mail->Port = 587;                                   

$mail->From = "wfwebsitemanager@gmail.com";
$mail->FromName = "Website";

$mail->addAddress("support@willfarhat.com");

$mail->isHTML(true);

$mail->Subject = $subject;
$mail->Body = $txt;

if(!$mail->send()) 
{
    echo "Mailer Error: " . $mail->ErrorInfo;
} 
else 
{
    echo "Message has been sent successfully";
}

?>