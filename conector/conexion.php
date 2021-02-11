<?php
    
  $DB_HOST = 'localhost'; //Host de postgresql (puede ser otro)
  $DB_USER = 'postgres'; //Usuario de postgresql (puede ser otro)
  $DB_PASS = 'toor'; //Password de postgresql (puede ser otro)
  $DB_NAME = 'superclean'; //Database de postgresql (puede ser otra)
  $DB_PORT = '5432'; //Puerto de postgresql (puede ser otro)

$conn = pg_connect("user=".$DB_USER." port=".$DB_PORT." dbname=".$DB_NAME." host=".$DB_HOST." password=".$DB_PASS)
or die('No se pudo conectar: ' . pg_last_error());
 date_default_timezone_set('America/La_Paz');

/*$conectador=mysqli_connect("localhost","root","","super_clean");
//se activa la BD
date_default_timezone_set('America/La_Paz');
mysqli_query($conectador,"SET charset 'utf8'");
mysqli_set_charset($conectador,'utf-8');*/
?>