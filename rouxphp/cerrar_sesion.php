<?php
    require "abre_sesion.php";
    
    $_SESSION = array();
    session_destroy();
    header("location: abre_sesion.php");
?>