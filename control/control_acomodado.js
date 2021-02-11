//resp_archivo
         
    $("input[name='file']").on('change', function(){
      var formData = new FormData($('#formulario')[0]);
      var ruta = '../modelo/doc_up_ajax.php';
       $.ajax({
           url: ruta,
           type: 'POST',
           data: formData,
           contentType: false,
           processData: false,
           success: function(datos)
            {   
                $('#img_acomodado').val(datos);
                mostrar_archivo();
            }
        });
    });
          

    function mostrar_archivo()
    {
        var archivo = $('#img_acomodado').val();
        var cadena ="<div style='width: 100%; padding-top: 2%;'><center><img src='../multimedia/imagenes/"+archivo+"' style='width: 70%; height: 150px; box-shadow: 1px 1px 1px 2px #A4A4A4;'></center></div>";
        $('#resp_img_acomodado').html(cadena);
         
      }

    function btn_mostrar_registro()
    {
     var obj = '';
    
     $.ajax({
      type: 'POST',
      url:'../vista/vista_acomodado.php',
      data: obj,
       beforeSend: function(objeto){
      },
      success:function(data){
        $('#panel_registro_acomodado').html(data).fadeIn('slow');
      }
    });
    }

    function btn_registro_acomodado(){
      
         var id_cliente = $('#id_cliente').val(); 
         var cliente = $('#cliente').val(); 
         var id_usuario = $('#id_usuario').val(); 
         var id_sucursal = $('#id_sucursal').val(); 
         var id_ot = $('#id_ot').val(); 
         var codigo_ot = $('#codigo_ot').val(); 
         var id_lugar = $('#id_lugar').val(); 
         var lugar = $('#lugar').val(); 
         var estado_acomodado = $('#estado_acomodado').val(); 
         var codigo_tikeo = $('#codigo_tikeo').val(); 
         var tipo_lavado = $('#tipo_lavado').val(); 
         var id_lavado = $('#id_lavado').val(); 
         var id_prenda = $('#id_prenda').val(); 
         var ob = {id_cliente : id_cliente,cliente : cliente,id_usuario : id_usuario,id_sucursal : id_sucursal,id_ot : id_ot,codigo_ot : codigo_ot,id_lugar : id_lugar,lugar : lugar,estado_acomodado : estado_acomodado,codigo_tikeo : codigo_tikeo,tipo_lavado : tipo_lavado,id_lavado : id_lavado,id_prenda : id_prenda};
    
         if(id_cliente !='' && cliente !='' && id_usuario !='' && id_sucursal !='' && id_ot !='' && codigo_ot !='' && id_lugar !='' && lugar !='' && estado_acomodado !='' && codigo_tikeo !='' && tipo_lavado !='' && id_lavado !='' && id_prenda !='' ){ 

                $.ajax({
                type: 'POST',
                url:'../modelo/modelo_registrar_acomodado.php',
                data: ob,
                beforeSend: function(objeto){
              
                },
                success: function(data)
                { 
                 //alert(data);
                 $('#resultado_registro_acomodado').html(data);
                // setTimeout(limpiar_acomodado,1000);

                 
                  $('#id_cliente').val('');
                  $('#cliente').val('');
                  $('#id_usuario').val('');
                  $('#id_sucursal').val('');
                  $('#id_ot').val('');
                  $('#codigo_ot').val('');
                  $('#id_lugar').val('');
                  $('#lugar').val('');
                  $('#estado_acomodado').val('');
                  $('#codigo_tikeo').val('');
                  $('#tipo_lavado').val('');
                  $('#id_lavado').val('');
                  $('#id_prenda').val('');
                 
                  setTimeout(function(){
                    $('#resultado_registro_acomodado').html('');
                  },1000);

                  setTimeout(function(){
                   $('#myModal_Registrar').modal('hide').fadeIn('slow');
                  },2000);

                  setTimeout(function(){
                   cargar_datos(1);
                  },3000);

                }
             });
           } 
     else{ 
     
      if (id_cliente ==''){ $('#id_cliente').focus();
      var res ='<label style="color:red;"> Debe llenar el campo de id_cliente </label>';
      $('#resp_id_cliente').html(res);}
      if (cliente ==''){ $('#cliente').focus();
      var res ='<label style="color:red;"> Debe llenar el campo de cliente </label>';
      $('#resp_cliente').html(res);}
      if (id_usuario ==''){ $('#id_usuario').focus();
      var res ='<label style="color:red;"> Debe llenar el campo de id_usuario </label>';
      $('#resp_id_usuario').html(res);}
      if (id_sucursal ==''){ $('#id_sucursal').focus();
      var res ='<label style="color:red;"> Debe llenar el campo de id_sucursal </label>';
      $('#resp_id_sucursal').html(res);}
      if (id_ot ==''){ $('#id_ot').focus();
      var res ='<label style="color:red;"> Debe llenar el campo de id_ot </label>';
      $('#resp_id_ot').html(res);}
      if (codigo_ot ==''){ $('#codigo_ot').focus();
      var res ='<label style="color:red;"> Debe llenar el campo de codigo_ot </label>';
      $('#resp_codigo_ot').html(res);}
      if (id_lugar ==''){ $('#id_lugar').focus();
      var res ='<label style="color:red;"> Debe llenar el campo de id_lugar </label>';
      $('#resp_id_lugar').html(res);}
      if (lugar ==''){ $('#lugar').focus();
      var res ='<label style="color:red;"> Debe llenar el campo de lugar </label>';
      $('#resp_lugar').html(res);}
      if (estado_acomodado ==''){ $('#estado_acomodado').focus();
      var res ='<label style="color:red;"> Debe llenar el campo de estado_acomodado </label>';
      $('#resp_estado_acomodado').html(res);}
      if (codigo_tikeo ==''){ $('#codigo_tikeo').focus();
      var res ='<label style="color:red;"> Debe llenar el campo de codigo_tikeo </label>';
      $('#resp_codigo_tikeo').html(res);}
      if (tipo_lavado ==''){ $('#tipo_lavado').focus();
      var res ='<label style="color:red;"> Debe llenar el campo de tipo_lavado </label>';
      $('#resp_tipo_lavado').html(res);}
      if (id_lavado ==''){ $('#id_lavado').focus();
      var res ='<label style="color:red;"> Debe llenar el campo de id_lavado </label>';
      $('#resp_id_lavado').html(res);}
      if (id_prenda ==''){ $('#id_prenda').focus();
      var res ='<label style="color:red;"> Debe llenar el campo de id_prenda </label>';
      $('#resp_id_prenda').html(res);}} 
                    
      } 
    function limpiar_acomodado()
    {
         $('#resultado_registro_acomodado').html('');
         $('#resp_img_acomodado').html('');
         $('#img_acomodado').val('');
    }

    function validador_campo(campo,mensaje,cant_min)
    {   
      var cadena=$('#'+campo).val();
      var dimencion=cadena.length;
      
      if(dimencion<cant_min)
      { 
        $('#'+mensaje).html('<label style="color:red;"> min '+cant_min+' digitos ' + dimencion+'</label>');
        $('#'+campo).css('border-color','red');
  
      }
      
      else
         {     
           $('#'+campo).css('border-color','green');
           $('#'+mensaje).html('');
         }

       }

  //Validador de Caracteres en los campos

  function valida_numeros(e){
      tecla = (document.all) ? e.keyCode : e.which;
      //Tecla de retroceso para borrar, siempre la permite
      if (tecla == 8 ){ return true; }
      if (tecla == 9 ){ return true; }
      if (tecla == 0 ){ return true; }
      if (tecla == 13 ){ return true; }
      
      // Patron de entrada, en este caso solo acepta numeros
      patron =/[0-9-.]/;
      tecla_final = String.fromCharCode(tecla);
      return patron.test(tecla_final);
  }

  function valida_letras(e){
   key = e.keyCode || e.which;
   tecla = String.fromCharCode(key).toLowerCase();
   letras = ' áéíóúabcdefghijklmnñopqrstuvwxyz';
   especiales = [8,37,39,46,9]; tecla_especial = false;

   for(var i in especiales){ if(key == especiales[i]) { tecla_especial = true; break; } }
   
   if(letras.indexOf(tecla)==-1 && !tecla_especial){ return false; }
  }

  function valida_ambos(e){
   key = e.keyCode || e.which;
   tecla = String.fromCharCode(key).toLowerCase();
   letras = ' áéíóúabcdefghijklmnñopqrstuvwxyz1234567890.,@#-_/?:;';
   especiales = [8,37,39,46,9]; tecla_especial = false;

   for(var i in especiales){ if(key == especiales[i]) { tecla_especial = true; break; } }
   
   if(letras.indexOf(tecla)==-1 && !tecla_especial){ return false; }

  }

  //Validador de Correo Electronico 
  
    
  var noti_email=0; 
  function validador_correo(campo,mensaje,cant_min)
   {
      
    var email = $('#'+campo).val();
    var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

    if (caract.test(email) == false)
    {
        $('#'+mensaje).html("<label style='color:#EC7063;'> invalido </label>");
        noti_email++;
        return false;
    }
    else{$('#'+mensaje).html('valido').slideDown('slow');noti_email=0;
        return true;
       }
   }
   // MOSTRAR FECHA DE REGISTRO
   fecha();
  
  function fecha(){
    var f = new Date();
    $('#fecha').val(f.getDate() + '/' + (f.getMonth() +1) + '/' + f.getFullYear());
  }

   // MOSTRAR HORA DE REGISTRO 
  hora();
  function hora(){
    var f=new Date();
    var cad=f.getHours()+':'+f.getMinutes()+':'+f.getSeconds();
    $('#hora').val(cad);
    setTimeout('hora()',1000); 
  }

   // FUNCIONALIDADES DE LISTADO Y EDICION DE CADA AREA DE TRABAJO

  $(document).ready(function(){
    //cargar_datos(1);
    btn_listar_prendas_acomodadas();

  });

  function cargar_datos(page){

    var parametros = {'action':'ajax','page':page};
    $('#loader').fadeIn('slow');
    $.ajax({
      url:'../modelo/modelo_listar_acomodado.php',
      data: parametros,
       beforeSend: function(objeto){
       $('#loader').html('cargando .... ');
      },
      success:function(data){
        $('#panel_listado_acomodado').html(data).fadeIn('slow');
        $('#loader').html('');
      }
    });
  }
 
  function cargar_datos_buscar(page)
  {
    var txt_buscar = $('#txt_buscar').val();
    
    if(txt_buscar==''){
      $('#resp_busqueda_acomodado').html('<label style="color:red;"> !!Escribe en el campo para Buscar!! </label>');
    }

    else{
    $('#resp_busqueda_acomodado').html('');

    var parametros = {'action':'ajax','page':page,'txt_buscar':txt_buscar};
    
    $('#loader').fadeIn('slow');
    
    $.ajax({
      url:'../modelo/modelo_buscar_acomodado.php',
      data: parametros,
       beforeSend: function(objeto){
       $('#loader').html('cargando .... ');
      },
      success:function(data){
        $('#panel_listado_acomodado').html(data).fadeIn('slow');
        $('#loader').html('');
      }
    });

    }
  } 

  /* FUNCIONES DE ACOMODO DE PRENDAS */

  function btn_registrar_prenda_acomodar()
  {
    var codigo_barras = $("#codigo_barras_acodado").val();
    var id_usuario = $("#id_usuario_sesion").val();
    var id_sucursal = $("#id_sucursal_sesion").val();
    var size = $("#size_cb").val();
    var id_area_acomodar = $("#id_tipo_acomodado").val();
    var area_acomodar = $("#area_acomodado").val();

    if(id_area_acomodar!="") {

    var obj = {codigo_barras:codigo_barras, id_usuario: id_usuario, id_sucursal:id_sucursal,
      size:size, id_area_acomodar: id_area_acomodar, area_acomodar:area_acomodar };

     $.ajax({
      type : "POST",
      url:'../modelo/modelo_agregar_prenda_codigo_barras_acomodado.php',
      data: obj,
       beforeSend: function(objeto){
       $('#panel_listado_prendas_acomodado').html('cargando .... ');
      },
      success:function(data){
        $('#panel_listado_prendas_acomodado').html(data).fadeIn('slow');

        //btn_listar_prendas_acomodadas();
        /*
        btn_filtrar_listado_acomodado();
        setTimeout(function(){ $("#codigo_barras_acodado").val(""); },2500);
        */
        
      }
    });

    }

    else{

      $("#codigo_barras_acodado").val("");
      $('#panel_filtro_carrito_acomodado').html("<label style='color:red;'> DEBE SELECCIONAR UN AREA PARA ACOMODAR </label>");
      
      setTimeout(function(){
       $('#panel_filtro_carrito_acomodado').html(""); 
      },3000);
    }

  }

  //panel_seleccion_area_acomodado

  function btn_seleccion_area_acomodado(id_area_acomodado, area_select)
  {
    $("#id_tipo_acomodado").val(id_area_acomodado);
    $("#mensaje_seleccion_area_acomodado").html("<label style='color:green;'> SE HA SELECCIONADO :"+
    " <label style='color:green; font-size:20px;'> "+area_select+" </label> </label>");
    $("#area_acomodado").val(area_select);
    $("#codigo_barras_acodado").focus();

  }

  function btn_listar_prendas_acomodadas()
  {

    var id_usuario = $("#id_usuario_sesion").val();
    var id_sucursal = $("#id_sucursal_sesion").val();
    
    var obj = {id_usuario: id_usuario, id_sucursal:id_sucursal };

     $.ajax({
      type : "POST",
      url:'../modelo/modelo_listar_prenda_codigo_barras_acomodado.php',
      data: obj,
       beforeSend: function(objeto){
       $('#panel_listado_prendas_acomodado').html('cargando .... ');
      },
      success:function(data){
        $('#panel_listado_prendas_acomodado').html(data).fadeIn('slow');
        
      }
    });
  }

 function btn_eliminar_ordenes_acomodado(id_acomodado)
 {

   var obj = {'ID_carrito_acomodado': id_acomodado};

     $.ajax({
      type : "POST",
      url:'../modelo/modelo_eliminar_carrito_acomodado.php',
      data: obj,
       beforeSend: function(objeto){
       $('#panel_filtro_carrito_acomodado').html('cargando .... ');
      },
      success:function(data){
       $('#panel_filtro_carrito_acomodado').html(data).fadeIn('slow');

       setTimeout(function(){ btn_listar_prendas_acomodadas(); },1000);
        
      }
    });

 }

 function btn_filtrar_listado_acomodado()
 {
    var id_usuario = $("#id_usuario_sesion").val();
    var id_sucursal = $("#id_sucursal_sesion").val();
    
    var obj = {id_usuario: id_usuario, id_sucursal:id_sucursal };

     $.ajax({
      type : "POST",
      url:'../modelo/modelo_filtrar_prenda_codigo_barras_acomodado.php',
      data: obj,
       beforeSend: function(objeto){
       $('#panel_listado_prendas_acomodado').html('cargando .... ');
      },
      success:function(data){
        $('#panel_listado_prendas_acomodado').html(data).fadeIn('slow');

        btn_listar_prendas_acomodadas();

      }
    });

 }


 function btn_registrar_prenda_acomodar_carrito()
 {
    var id_usuario = $("#id_usuario_sesion").val();
    var id_sucursal = $("#id_sucursal_sesion").val();
    
    var obj = {id_usuario: id_usuario, id_sucursal:id_sucursal };

     $.ajax({
      type : "POST",
      url:'../modelo/modelo_registrar_carrito_acomodado.php',
      data: obj,
       beforeSend: function(objeto){
       $('#panel_respuesta_registro_acomado').html('cargando .... ');
      },
      success:function(data){
       $('#panel_respuesta_registro_acomado').html(data).fadeIn('slow');

       setTimeout(function(){
        $('#panel_respuesta_registro_acomado').html("").fadeIn('slow'); 
        btn_acomodado();
       },2000);
      }
    });
 }