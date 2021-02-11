
   
   <div class='row' style='margin:0px; padding:0px;'> 
  
    <h2 align='center'>acomodado</h2>
    <label> Todos los campos con (*) son obligatorios </label> </br>
    
               <div class='col-lg-6 col-xs-6'> 
               
               <label>id_cliente</label></br>
               <input type='number' id='id_cliente' class='form-control' placeholder='(*)Escriba su id_cliente' onkeyup="validador_campo('id_cliente','resp_id_cliente',2)" maxlength='10' min='0'  onkeypress='return valida_numeros(event);'>

               <div id='resp_id_cliente' ></div>
               </div> 
               
              <div class='col-lg-6 col-xs-6'> 
              
              <label>cliente</label></br>
              <input type='text' id='cliente' class='form-control' placeholder='(*)Escriba su cliente' onkeyup="validador_campo('cliente','resp_cliente',4)" maxlength='200' onkeypress='return valida_ambos(event);'>

               <div id='resp_cliente'></div>
               </div> 
               
               <div class='col-lg-6 col-xs-6'> 
               
               <label>id_usuario</label></br>
               <input type='number' id='id_usuario' class='form-control' placeholder='(*)Escriba su id_usuario' onkeyup="validador_campo('id_usuario','resp_id_usuario',2)" maxlength='10' min='0'  onkeypress='return valida_numeros(event);'>

               <div id='resp_id_usuario' ></div>
               </div> 
               
               <div class='col-lg-6 col-xs-6'> 
               
               <label>id_sucursal</label></br>
               <input type='number' id='id_sucursal' class='form-control' placeholder='(*)Escriba su id_sucursal' onkeyup="validador_campo('id_sucursal','resp_id_sucursal',2)" maxlength='10' min='0'  onkeypress='return valida_numeros(event);'>

               <div id='resp_id_sucursal' ></div>
               </div> 
               
               <div class='col-lg-6 col-xs-6'> 
               
               <label>id_ot</label></br>
               <input type='number' id='id_ot' class='form-control' placeholder='(*)Escriba su id_ot' onkeyup="validador_campo('id_ot','resp_id_ot',2)" maxlength='10' min='0'  onkeypress='return valida_numeros(event);'>

               <div id='resp_id_ot' ></div>
               </div> 
               
              <div class='col-lg-6 col-xs-6'> 
              
              <label>codigo_ot</label></br>
              <input type='text' id='codigo_ot' class='form-control' placeholder='(*)Escriba su codigo_ot' onkeyup="validador_campo('codigo_ot','resp_codigo_ot',4)" maxlength='200' onkeypress='return valida_ambos(event);'>

               <div id='resp_codigo_ot'></div>
               </div> 
               
               <div class='col-lg-6 col-xs-6'> 
               
               <label>id_lugar</label></br>
               <input type='number' id='id_lugar' class='form-control' placeholder='(*)Escriba su id_lugar' onkeyup="validador_campo('id_lugar','resp_id_lugar',2)" maxlength='10' min='0'  onkeypress='return valida_numeros(event);'>

               <div id='resp_id_lugar' ></div>
               </div> 
               
              <div class='col-lg-6 col-xs-6'> 
              
              <label>lugar</label></br>
              <input type='text' id='lugar' class='form-control' placeholder='(*)Escriba su lugar' onkeyup="validador_campo('lugar','resp_lugar',4)" maxlength='200' onkeypress='return valida_ambos(event);'>

               <div id='resp_lugar'></div>
               </div> 
               
              <div class='col-lg-6 col-xs-6'> 
              
              <label>estado_acomodado</label></br>
              <input type='text' id='estado_acomodado' class='form-control' placeholder='(*)Escriba su estado_acomodado' onkeyup="validador_campo('estado_acomodado','resp_estado_acomodado',4)" maxlength='200' onkeypress='return valida_ambos(event);'>

               <div id='resp_estado_acomodado'></div>
               </div> 
               
              <div class='col-lg-6 col-xs-6'> 
              
              <label>codigo_tikeo</label></br>
              <input type='text' id='codigo_tikeo' class='form-control' placeholder='(*)Escriba su codigo_tikeo' onkeyup="validador_campo('codigo_tikeo','resp_codigo_tikeo',4)" maxlength='200' onkeypress='return valida_ambos(event);'>

               <div id='resp_codigo_tikeo'></div>
               </div> 
               
              <div class='col-lg-6 col-xs-6'> 
              
              <label>tipo_lavado</label></br>
              <input type='text' id='tipo_lavado' class='form-control' placeholder='(*)Escriba su tipo_lavado' onkeyup="validador_campo('tipo_lavado','resp_tipo_lavado',4)" maxlength='200' onkeypress='return valida_ambos(event);'>

               <div id='resp_tipo_lavado'></div>
               </div> 
               
               <div class='col-lg-6 col-xs-6'> 
               
               <label>id_lavado</label></br>
               <input type='number' id='id_lavado' class='form-control' placeholder='(*)Escriba su id_lavado' onkeyup="validador_campo('id_lavado','resp_id_lavado',2)" maxlength='10' min='0'  onkeypress='return valida_numeros(event);'>

               <div id='resp_id_lavado' ></div>
               </div> 
               
               <div class='col-lg-6 col-xs-6'> 
               
               <label>id_prenda</label></br>
               <input type='number' id='id_prenda' class='form-control' placeholder='(*)Escriba su id_prenda' onkeyup="validador_campo('id_prenda','resp_id_prenda',2)" maxlength='10' min='0'  onkeypress='return valida_numeros(event);'>

               <div id='resp_id_prenda' ></div>
               </div> 
               </br><hr>

   <div id='resultado_registro_acomodado'></div> 
   
   </div>
   <script type='text/javascript' src='../control/control_acomodado.js'></script>
