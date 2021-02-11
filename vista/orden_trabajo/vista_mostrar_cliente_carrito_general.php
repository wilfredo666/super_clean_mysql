<?php 
require "../conector/conexion.php";
$id_usuario = $_POST['id_usuario']; 
$id_sucursal = $_POST['id_sucursal'];

$sql_ot = pg_query("SELECT * FROM carrito_orden_trabajo WHERE id_usuario='$id_usuario' AND id_sucursal='$id_sucursal' ORDER BY id_carrito_orden_trabajo DESC LIMIT 1");
$row_ot = pg_fetch_array($sql_ot);

$id_cliente = $row_ot['id_cliente'];

if ($id_cliente=="") {
  ?>
  <h4> SECCION DE CLIENTE </h4>
  <?php
}

else{
?>
<script type="text/javascript">
  $("#id_cliente").val("<?php echo $id_cliente; ?>");
</script>
<?php

$sql_cli = pg_query("SELECT * FROM cliente WHERE id_cliente = '$id_cliente'");
$row_cli = pg_fetch_array($sql_cli);

  $nombres = $row_cli['nombres'];
  $apellidos = $row_cli['apellidos']; 
  $cliente = $nombres." </br> ".$apellidos; 
  $ci_nit = $row_cli['ci_nit'];  
  $celular = $row_cli['celular'];  
  $telefono = $row_cli['telefono'];
  $email = $row_cli['email'];  
  $descuento = $row_cli['descuento'];  
  $sexo = trim($row_cli['sexo']);  
  $tipo = trim($row_cli['tipo']);   

 ?>

 <div>
 	<h4 align="center" style="background: #0B3861; color: white; margin: 0px; margin-bottom: 3px;"> CLIENTE </h4>
 	<?php if($sexo=="MASCULINO")
 	{
 	 ?>
    <center> <img src="../multimedia/iconos/logo_cliente_m.jpg" style="width: 150px; height: 150px;"></center>
 	 <?php
 	} 
 	else{
 	 	 ?>
    <center> <img src="../multimedia/iconos/logo_cliente_f.jpg" style="width: 150px; height: 150px;"></center>
 	 <?php
 	}
 	?>
 	<table class="table table-condensed table-bordered table-hover table-striped">

 		<tr>
 			<td><label> Cliente : </label> </br> <?php echo $cliente; ?></td></tr>
 			<tr><td> <h6 style="margin: 0px;"><label> Tipo : <?php echo $tipo; ?></label></h6> </td></tr>
 			<tr><td> <h6 style="margin: 0px;"><label> Descuento : <?php echo $descuento; echo "%"; ?></label></h6 style="margin: 0px;"> </td></tr>
 			<tr><td> <h6 style="margin: 0px;"><label> CI/NIT : <?php echo $ci_nit; ?></label></h6> </td></tr>
 			<tr><td> <h6 style="margin: 0px;"><label> Contactos : <?php echo $telefono; echo " "; echo $celular; ?></label></h6> </td>
 		</tr>
 		
 	</table>
 	
 </div>

<?php
}

?>