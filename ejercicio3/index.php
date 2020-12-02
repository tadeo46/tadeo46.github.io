
<?php
        
   
        require 'conexion.php';
        session_start();
    /*
        $correo = $_POST['usuario'];
        $clave = $_POST['clave'];

        $q = "SELECT COUNT(*) as contar FROM usuarios where correo = '$correo' and clave = '$clave';";
        $consulta = mysqli_query($conexion,$q);
        $array = mysqli_fetch_array($consulta);

        if($array['contar'] > 0){
            $_SESSION['correo'] = $correo;
            header("location: principal.php");
        }else{
            echo "Datos incorrectos";
            echo $correo;
            echo $clave;
        }
    
    */

?>


<html>
    <head>
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
        <meta charset="UTF-8">
    </head>
    <body>
        <main>
            <h1>Lista de libros</h1>
            <a href="registrar.php">Nuevo</a>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Precio</th>
                        <th>Editorial</th>
                        <th>Enlace</th>
                    </tr>
                </thead>
                <tbody>
                    <?php

                        $q = "SELECT titulo,autor,editorial,precio FROM libros";
                                    
                        // $consulta = mysqli_query($conexion,$q);
                        $consulta = $conexion->query($q);
                        $numero = $consulta->num_rows;

                        echo "$numero";

                        for ($i = 0; $i < $numero; $i++) {
                            $fila = $consulta->fetch_object();
                            echo "<tr>";
                                echo "<td> $fila->titulo </td>";
                                echo "<td> $fila->autor </td>";
                                echo "<td> $fila->editorial </td>";
                                echo "<td> $fila->precio </td>";
                                echo "<td></td>";
                            echo "</tr>";
                        }                   

                        




                     
                    ?>
                </tbody>
            </table>
        </main>
    </body>

</html>