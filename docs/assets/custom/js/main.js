/* 
 * @author: jhonjaider10000
 */


var main = {
    init: function () {
        main.run();
    },
    run: function () {
        //Obtiene el objeto con los parámetros inciales..
        var object = main.getObject();
        //Llena el formulario.
        $("#form1").fillForm(object);
        //Se juega con los datos del objeto para el segundo formulario.
        object.nombres = "Angelica";
        object.apellidos = "Gómez";
        object.ifutbol = true;
        object.ihoteles = false;
        object.icarros = false;
        object.imotos = false;
        object.edad = 19;
        object.fechanacimiento = "1997-03-13";
        object.sexo = "F";
        //Se llena formulario 2.
        $("#form2").fillForm(object);
        //Se juega con los datos para el formulario 3.
        object.nombres = "John";
        object.apellidos = "Vanegas";
        object.edad = 22;
        object.sexo = "M";
        object.fechanacimiento = "1994-10-07";
        //Se llena el formulario 3.                
        $("#form3").fillForm(object);
        //Jugamos con los datos del formulario 4. En este caso con los labels...
        object.lblnombres = "First Name:";
        object.lblapellidos = "Last Name:";
        object.lbledad = "Years:";
        object.lblfechanacimiento = "Birtday:";
        object.lblsexo = "Gender";
        object.lblmasculino = "Male";
        object.lblfemenino = "Female";
        object.lblestado = "State:";
        object.lblsueldo = "Value:";
        object.lblciudad = "City:";
        object.lblintereses = "Interesting:";
        object.lblsobre = "About";
        object.lbllibros = "Books";
        object.lblmusica = "Music";
        object.lblhoteles = "Hotels";
        object.lblviajes = "Travels";
        object.lblcarros = "Cars";
        object.descripcion = "Developer";
        //Se llena el formulario 4.
        $("#form4").fillForm(object);
    },
    /**
     * Recibe un número y lo formatea a moneda.
     * @param {Number} num : Recibe el número que formateará a moneda.
     * @param {String} prefix : El prefijo de la moneda Ej: $
     * @returns {String} : Retorna el valor formateado en moneda.
     */
    formatMoney: function (num, prefix)
    {
        prefix = "$";
        var splitStr = num.toString().split('.');
        return (prefix || '') + splitStr[0].toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.').split('').reverse().join('').replace(/^[\.]/, '') + ((splitStr.length > 1) ? ',' + splitStr[1] : '');
    },
    /**
     * Convierte un string en formato moneda y retorna el valor en número.
     * @param {String} num : Recibe el string formateado en moneda.
     * @returns {Number} : Retorna un número de tipo number.
     */
    unformatMoney: function (num) {
        var splitStr = num.split(',');
        return ((splitStr[0].toString().replace(/\./g, '')) + ((splitStr.length > 1) ? '.' + splitStr[1] : '')) * 1;
    },
    /**
     * La utilizará el formulario mediante el data-callback
     * @param {data} data
     * @returns {String}
     */
    getText: function (data) {
        return '<span title="Usando data-span Callback">About ' + data + '</span>';
    },
    /**
     * Retornará el objeto inicial que se usará generalmente en todos los formularios del demo.
     * @returns {Object}
     */
    getObject: function () {
        var object = {
            nombres: "John",
            apellidos: "Vanegas",
            edad: 22,
            fechanacimiento: "1994/10/07",
            sexo: "M",
            estado: 2,
            sueldo: 5000000,
            ciudad: 1,
            ifutbol: false,
            imusica: true,
            iviajes: true,
            ihoteles: true,
            icarros: true,
            imotos: true,
            ilibros: true,
            descripcion: "Analista y desarrollador de sistemas de información"
        };
        return object;
    },
};

document.addEventListener("DOMContentLoaded", function () {
    main.init();
});