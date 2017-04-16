<!DOCTYPE html>
<!--
Creado por jhonjaider1000.
-->
<html>
    <head>
        <title>JJFillForm - LLena Formularios</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="docs/assets/favicon.png" />
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="docs/assets/plugins/bootstrap/css/bootstrap.min.css" />
        <style>
            .color-red{
                color: red;
            }
            .border-red{
                border: 3px solid red;
            }
            .m-l-5{
                margin-left: 5px;
            }
        </style>
    </head>
    <body>
        <section>
            <div class="container">
                <h1>JJFillForm <small>1.0</small></h1>
                <p>Llena tus formularios facilmente con JJFillForm.</p>
                <a href="docs/JJFillForm.rar" class="btn btn-primary"><i class="glyphicon glyphicon-download-alt"></i> DESCARGAR</a>
                <hr/>                
                <div class="row">
                    <div class="col-xs-6">
                        <h2>Formulario 1: <small>Normal</small></h2>
                        <p>En este ejemplo simplemente se cargan los datos sin validar ni hacer ninguna alteracion a ningun dato.</p>
                        <h3><small>HTML</small></h3>
                        <span class="help-block">//Lo único a tener encuenta será igualar el campo name al key del valor del objeto que vamos a escribir en el campo.</span>
                        <code>
                            &LT;form id="content1"&GT;
                            <br/>
                            &LTinput type="text" id="txtNombres" name="nombres" /&GT;
                            <br/>
                            &LT;/form&GT;
                        </code>
                        <h3><small>JavaScript</small></h3>                        
                        <span class="help-block">//A continuación se muestra la estructura del objeto y la ejecución de la función fillForm que nos llenara el formulario.</span>
                        <code>
                            var object = {
                            "nombres" : "John",
                            "apellidos" : "Vanegas",
                            "edad" : "22",
                            "fechanacimiento" : "1997-03-13","ect":"etc"
                            };
                            <br/>
                            $("#content1").fillForm(object);
                        </code>
                        <br/>
                        <br/>
                        <form id="form1" class="jumbotron">
                            <div class="form-group">
                                <label>Nombres:</label>
                                <input type="text" id="txtNombres" name="nombres"  class="form-control" disabled/>
                            </div>
                            <div class="form-group">
                                <label>Apellidos:</label>
                                <input type="text" id="txtApellidos" name="apellidos"  class="form-control" disabled/>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-12">
                                    <label>Edad:</label>
                                    <input type="text" id="txtEdad" name="edad"  class="form-control" disabled/>
                                </div>
                                <div class="col-md-12">
                                    <label>Fecha Nacimiento:</label>
                                    <input type="text" id="txtFechaNacimiento" name="fechanacimiento"  class="form-control" disabled/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Sexo:</label>
                                <div class="checkbox">
                                    <label>Masculino: <input type="radio" value="M" name="sexo" disabled/></label>
                                </div>                                                                    
                                <div class="checkbox">
                                    <label>Femenino <input type="radio" value="F" name="sexo" disabled/></label>
                                </div>                                                                
                            </div>
                            <div class="form-group">
                                <label>Estado:</label>
                                <select id="cmbxEstado" name="estado" class="form-control" disabled>
                                    <option value="1">Casado</option>
                                    <option value="2">Soltero</option>
                                    <option value="3">Viudo</option>
                                    <option value="4">Otro</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Sueldo:</label>
                                <input type="text" id="txtSueldo" name="sueldo"  class="form-control" disabled/>
                            </div>
                            <div class="form-group">
                                <label>Ciudad:</label>
                                <select id="cmbxCiudad" name="ciudad" class="form-control" disabled>
                                    <option value="1">Bogotá</option>                                    
                                    <option value="2">Ibague</option>                                    
                                    <option value="3">Medellin</option>                                    
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Intereses:</label>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="ifutbol" value="1" disabled/> Futbol
                                    </label>
                                </div>                               
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="iviajes" value="2" disabled/> Viajes
                                    </label>
                                </div>                               
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="ihoteles" value="3" disabled/> Hoteles
                                    </label>
                                </div>                               
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="imusica" value="4" disabled/> Música
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="ilibros" disabled/> Libros
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="icarros" disabled/> Carros
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="imotos" disabled/> Motos
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <!--<label>Sobre <span data-span="nombre"></span>:</label>-->
                                <label>Descripción:</label>
                                <textarea class="form-control" rows="6" name="descripcion" disabled></textarea>
                            </div>
                        </form>
                    </div>                    
                    <div class="col-xs-6">
                        <h2>Formulario 2: <small>Usando Callbacks</small></h2>
                        <p>En este ejemplo se ejecuta un callback que recibirá el valor del campo destino, y cuando haya terminado se escribirá lo que retorne. En este ejemplo se ha usado para formatear un valor a formato peso.</p>
                        <h3><small>HTML</small></h3>
                        <span class="help-block">//Teniendo en cuenta los mismos consejos del formulario1, solo se deberá agregar al campo un atributo llamado data-callback="callback" en donde se dará a conocer el callback que se debe ejecutar primero antes de escribir en el campo.</span>
                        <code>
                            &LT;form id="content1"&GT;
                            <br/>
                            &LTinput type="text" id="txtNombres" name="nombres" data-callback="funcionQueQuieroEjecutar" /&GT;
                            <br/>
                            &LT;/form&GT;
                        </code>
                        <h3><small>JavaScript</small></h3>                        
                        <span class="help-block">//Para el JS solo bastará con la misma linea.</span>
                        <code>
                            $("#content1").fillForm(object);
                        </code>
                        <br/>
                        <br/>
                        <form id="form2" class="jumbotron">
                            <div class="form-group">
                                <label>Nombres:</label>
                                <input type="text" id="txtNombres" name="nombres"  class="form-control" disabled/>
                            </div>
                            <div class="form-group">
                                <label>Apellidos:</label>
                                <input type="text" id="txtApellidos" name="apellidos"  class="form-control" disabled/>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-12">
                                    <label>Edad:</label>
                                    <input type="text" id="txtEdad" name="edad"  class="form-control" disabled/>
                                </div>
                                <div class="col-md-12">
                                    <label>Fecha Nacimiento:</label>
                                    <input type="text" id="txtFechaNacimiento" name="fechanacimiento"  class="form-control" disabled/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Sexo:</label>
                                <div class="checkbox">
                                    <label>Masculino: <input type="radio" value="M" name="sexo" disabled/></label>
                                </div>                                                                    
                                <div class="checkbox">
                                    <label>Femenino <input type="radio" value="F" name="sexo" disabled/></label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Estado:</label>
                                <select id="estado" name="estado" class="form-control" disabled>
                                    <option value="1">Casado</option>
                                    <option value="2">Soltero</option>
                                    <option value="3">Viudo</option>
                                    <option value="4">Otro</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Sueldo:</label>
                                <input type="text" id="txtSueldo" name="sueldo"  class="form-control border-red" data-callback="main.formatMoney" disabled title="Usando Callback"/>
                            </div>
                            <div class="form-group">
                                <label>Ciudad:</label>
                                <select id="ciudad" name="ciudad" class="form-control" disabled>
                                    <option value="1">Bogotá</option>                                    
                                    <option value="2">Ibague</option>                                    
                                    <option value="3">Medellin</option>                                    
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Intereses:</label>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="ifutbol" value="1" disabled/> Futbol
                                    </label>
                                </div>                               
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="iviajes" value="2" disabled/> Viajes
                                    </label>
                                </div>                               
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="ihoteles" value="3" disabled/> Hoteles
                                    </label>
                                </div>                               
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="imusica" value="4" disabled/> Música
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="ilibros" disabled/> Libros
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="icarros" disabled/> Carros
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="imotos" disabled/> Motos
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Descripción:</label>
                                <textarea class="form-control" rows="6" name="descripcion" disabled></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="col-xs-6">
                        <h2>Formulario 3: <small>data-span</small></h2>
                        <p>
                            Podemos mostrar datos en elementos de tipo label, span o divs dentro del formulario. El resultado se ha escrito en rojo.
                        </p>
                        <h3><small>HTML</small></h3>
                        <span class="help-block">//Al dejar en nuestros elementos label,span, o divs el atributo data-span podemos hacer uso de nuestros datos e imprimirlos sobre ellos, como se muestra en este ejemplo.</span>
                        <code>
                            &LT;form id="content1"&GT;
                            <br/>
                            &LT;label&GT;Sobre &LT;span data-span="nombres"&GT;&LT;/span&GT;:&LT;/label&GT;
                            <br/>
                            &LT;/form&GT;
                        </code>
                        <br/>
                        <br/>
                        <form id="form3" class="jumbotron">
                            <h4>Usuario: <span data-span="nombres" class="color-red"></span> <span data-span="apellidos" class="color-red"></span></h4>
                            <div class="form-group">
                                <label>Nombres:</label>
                                <input type="text" id="txtNombres" name="nombres"  class="form-control" disabled/>
                            </div>
                            <div class="form-group">
                                <label>Apellidos:</label>
                                <input type="text" id="txtApellidos" name="apellidos"  class="form-control" disabled/>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-12">
                                    <label>Edad:</label>
                                    <input type="text" id="txtEdad" name="edad"  class="form-control" disabled/>
                                </div>
                                <div class="col-md-12">
                                    <label>Fecha Nacimiento:</label>
                                    <input type="text" id="txtFechaNacimiento" name="fechanacimiento"  class="form-control" disabled/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Sexo:</label>
                                <div class="checkbox">
                                    <label>Masculino: <input type="radio" value="M" name="sexo" disabled/></label>
                                </div>                                                                    
                                <div class="checkbox">
                                    <label>Femenino <input type="radio" value="F" name="sexo" disabled/></label>
                                </div>                                                                
                            </div>
                            <div class="form-group">
                                <label>Estado:</label>
                                <select id="txtEstado" name="estado" class="form-control" disabled>
                                    <option value="1">Casado</option>
                                    <option value="2">Soltero</option>
                                    <option value="3">Viudo</option>
                                    <option value="4">Otro</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Sueldo:</label>
                                <input type="text" id="txtSueldo" name="sueldo"  class="form-control" disabled data-callback="main.formatMoney"/>
                            </div>
                            <div class="form-group">
                                <label>Ciudad:</label>
                                <select id="txtCiudad" name="ciudad" class="form-control" disabled>
                                    <option value="1">Bogotá</option>                                    
                                    <option value="2">Ibague</option>                                    
                                    <option value="3">Medellin</option>                                    
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Intereses:</label>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="ifutbol" value="1" disabled/> Futbol
                                    </label>
                                </div>                               
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="iviajes" value="2" disabled/> Viajes
                                    </label>
                                </div>                               
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="ihoteles" value="3" disabled/> Hoteles
                                    </label>
                                </div>                               
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="imusica" value="4" disabled/> Música
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="ilibros" disabled/> Libros
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="icarros" disabled/> Carros
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="imotos" disabled/> Motos
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Sobre <span data-span="nombres" class="color-red"></span>:</label>                                
                                <textarea class="form-control" rows="6" name="descripcion" disabled></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="col-xs-6">
                        <h2>Formulario 4: <small>data-span callback</small></h2>
                        <p>
                            Para el caso de los data-span, también podemos usar Callbacks para personalizar los datos que deseamos mostrar.
                            En el siguiente formulario también se ha utilizado el data-span para traducir los textos de las etiquetas label.
                            Como es de constumbre el elemento en donde hemos usado un callback estara marcado en rojo.
                        </p>
                        <h3><small>HTML</small></h3>
                        <span class="help-block">//Como se ha visto en el ejemplo 2, también podemos ejecutar callbacks para los data-span.</span>
                        <code>
                            &LT;form id="content1"&GT;
                            <br/>
                            &LT;label data-span="nombres" data-callback="menu.getText"&LT;/label&GT;
                            <br/>
                            &LT;/form&GT;
                        </code>
                        <br/>
                        <br/>
                        <form id="form4" class="jumbotron">                            
                            <div class="form-group">
                                <label data-span="lblnombres"></label>
                                <input type="text" id="txtNombres" name="nombres"  class="form-control" disabled/>
                            </div>
                            <div class="form-group">
                                <label data-span="lblapellidos"></label>
                                <input type="text" id="txtApellidos" name="apellidos"  class="form-control" disabled/>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-12">
                                    <label data-span="lbledad"></label>
                                    <input type="text" id="txtEdad" name="edad"  class="form-control" disabled/>
                                </div>
                                <div class="col-md-12">
                                    <label data-span="lblfechanacimiento"></label>
                                    <input type="text" id="txtFechaNacimiento" name="fechanacimiento"  class="form-control" disabled/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label data-span="lblsexo"></label>
                                <div class="checkbox">
                                    <label><span data-span="lblmasculino"></span>: <input type="radio" value="M" name="sexo" disabled/></label>
                                </div>                                                                    
                                <div class="checkbox">
                                    <label><span data-span="lblfemenino"></span>: <input type="radio" value="F" name="sexo" disabled/></label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label data-span="lblestado"></label>
                                <select id="txtEstado" name="estado" class="form-control" disabled>
                                    <option value="1">Casado</option>
                                    <option value="2">Soltero</option>
                                    <option value="3">Viudo</option>
                                    <option value="4">Otro</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label data-span="lblsueldo"></label>
                                <input type="text" id="txtSueldo" name="sueldo"  class="form-control" disabled data-callback="main.formatMoney"/>
                            </div>
                            <div class="form-group">
                                <label data-span="lblciudad"></label>
                                <select id="txtCiudad" name="ciudad" class="form-control" disabled>
                                    <option value="1">Bogotá</option>                                    
                                    <option value="2">Ibague</option>                                    
                                    <option value="3">Medellin</option>                                    
                                </select>
                            </div>
                            <div class="form-group">
                                <label data-span="lblintereses"></label>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="ifutbol" value="1" disabled/> Futbol
                                    </label>
                                </div>                               
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="iviajes" value="2" disabled/> <span data-span="lblviajes"></span>
                                    </label>
                                </div>                               
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="ihoteles" value="3" disabled/> <span data-span="lblhoteles"></span>
                                    </label>
                                </div>                               
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="imusica" value="4" disabled/> <span data-span="lblmusica"></span>
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="ilibros" disabled /> <span data-span="lbllibros"></span>
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="icarros" disabled /> <span data-span="lblcarros"></span>
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="imotos" disabled/> Motos
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label data-span="nombres" class="color-red" data-callback="main.getText"></label>
                                <textarea class="form-control" rows="6" name="descripcion" disabled></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                <hr/>
                <div class="panel-body text-right">
                    Autor: <a href="http://jhonjaider1000.com" target="_blank"><img src="docs/assets/favicon.png" class="m-l-5" width="20" /> jhonjaider1000</a>
                </div>
            </div>
        </section>
        <script type="text/javascript" src="docs/assets/plugins/jquery/jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="docs/assets/dist/JJFillForm.min.js"></script>
        <script type="text/javascript" src="docs/assets/custom/js/main.js"></script>
    </body>
</html>