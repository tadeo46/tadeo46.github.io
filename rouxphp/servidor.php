<?php
    $arreglo = array();
    $conexion = mysqli_connect("localhost", "root", "", "roux");
    $consulta = "SELECT id, nombre, descripcion, img FROM artistas";
    $resultdo = mysqli_query($conexion, $consulta);

    if ($resultdo->num_rows > 0) {
        while ($fila = $resultdo->fetch_assoc()) {
            $interior = [$fila["nombre"], $fila["descripcion"], $fila["img"]];
            $arreglo[$fila["id"]] = $interior;
        }
    }
    
    echo json_encode($arreglo);
?>