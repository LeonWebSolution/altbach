<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $phone = $_POST["phone"];
    
    // Ваш адрес электронной почты, на который будут отправляться данные
    $to = "leonwebdevv@gmail.com";

    // Тема письма
    $subject = "Заказ с веб-сайта";

    // Сообщение
    $message = "Номер телефона: " . $phone;

    // Дополнительные заголовки
    $headers = "From: webmaster@example.com" . "\r\n" .
        "Reply-To: webmaster@example.com" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    // Отправка письма
    mail($to, $subject, $message, $headers);
    exit;
}
?>