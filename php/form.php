<?php

$recepient = "sales@metehnoukraine.com.ua";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$topic = trim($_POST["topic"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nПочта: $email \nТелефон: $phone \nТема: $topic \nСообщение: $text";

$pagetitle = $topic;
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
