<?php
session_start();

$db = mysqli_connect('localhost', 'root', '', 'usuarios');
$username = mysqli_real_escape_string($db, $_POST['myname']);
$password_1 = mysqli_real_escape_string($db, $_POST['password']);

$query = "INSERT INTO usuarios VALUES (NULL, '$username', md5('$password_1'))";
mysqli_query($db, $query);
header('Location: ../login.php');
