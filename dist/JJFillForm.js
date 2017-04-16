/* 
 @author: jhonjaider10000
 Creado por jhonjaider1000 === http://jhonjaider1000.com.
 Licencia de uso libre, siempre y cuando se conserve este comentario para
 respetar los derechos del autor original.
 */

/**
 * Recibe un objeto y llena el formulario o contenedor que ha invocado el prototipo.
 * @param {type} obj : Recibe el objeto que se usará para llenar el formulario.
 * @returns {undefined}
 */
$.fn.fillForm = function (obj) {
    if (typeof this === "object") {
        var form = this, d, temp, id;
        if (!!$(form)) {
            id = $(form).attr('id');
            var queryData = function (s, data) {
                if (!!$(s).attr("data-callback")) {
                    return eval($(s).attr("data-callback") + '("' + data + '")');
                } else {
                    return data;
                }
            };
            $.each(obj, function (k, data) {
                temp = $('#' + id + ' [name="' + k + '"]');
                if (typeof data === "object") {
                    var keyField, domObject, path;
                    for (var key in data) {
                        if ((domObject = $('#' + id + ' [name ^="' + key + '"]')).length > 0) {
                            keyField = key;
                            continue;
                        }
                    }
                    path = domObject.attr('name');
                    temp = domObject;
                    data = eval('obj.' + path);
                }
                if (!!$(temp).length) {
                    d = queryData($($(temp)[0]), data);
                    if (($($(temp)[0]).attr("type") === "text") ||
                            ($($(temp)[0]).attr("type") === "number") ||
                            $($(temp)[0]).is("select") || $($(temp)[0]).is("textarea")) {
                        $($(temp)[0]).val(d);
                    } else if (($($(temp)[0]).attr("type") === "radio")) {
                        $('#' + id + ' [name="' + k + '"][value="' + d + '"]').prop('checked', true);
                    } else if (($($(temp)[0]).attr("type") === "checkbox")) {
                        if ((d) || d === "true") {
                            $('#' + id + ' [name="' + k + '"]').prop('checked', true);
                        } else {
                            $('#' + id + ' [name="' + k + '"]').prop('checked', false);
                        }
                    }
                }
                //data-span...
                temp = $('#' + id + ' [data-span="' + k + '"]');
                if (!!$(temp).length) {
                    if ($(temp).length > 1) {
                        $.each($(temp), function (i, s) {
                            $(s).html(queryData(s, data));
                        });
                    } else {
                        $(temp).html(queryData(temp, data));
                    }
                }
            });
        } else {
            console.error("Error JJFillForm: El objeto seleccionado no es un elemento del DOM.");
        }
    } else {
        console.error("Error JJFillForm: El objeto seleccionado no es un elemento del DOM.");
    }
};