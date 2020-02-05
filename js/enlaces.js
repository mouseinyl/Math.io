//internas
var boton = document.getElementById("boton");
var box_menssage_style = document.getElementsByClassName("box_menssage_style")[0];

// publicas

var image = document.getElementsByClassName("opciones_box")[0].getElementsByTagName("img");
var box_menssage_dominio = document.getElementsByClassName("box_menssage_dominio")[0];
var box_resultados = document.getElementsByClassName("box_resultados")[0];
var box_input = document.getElementById("box_input");
var icon_boton = boton.getElementsByTagName("i")[0];
var recursos = "./recursos/";
var box_menssage_style_button = box_menssage_style.getElementsByTagName("div")[1].getElementsByTagName("button");
var box_menssage_style_p = box_menssage_style.getElementsByTagName("div")[0].getElementsByTagName("p");
var box_menssage_style_img = box_menssage_style.getElementsByTagName("div")[0].getElementsByTagName("img")[0];
var close_boton = box_menssage_style.getElementsByTagName("button")[0];
var box_menssage_dominio = document.getElementsByClassName("box_menssage_dominio")[0];
var optio_nav_movile = document.getElementsByClassName("side-nav")[0].getElementsByTagName("li");






// herramientas
function escritor(encabezado, texto) {
    var parrafo = document.createElement("p");
    parrafo.innerHTML = "<h4>" + encabezado + "</h4>" + "<p>" + texto + "</p>"
    box_resultados.appendChild(parrafo);
}

function cover(accion, objeto) {
    if (accion == true) {
        if (objeto == "box_resultados") {
            box_resultados.classList.add("hide");
        }
        if (objeto == "box_input") {
            box_input.classList.add("hide");
        }
    }
    if (accion == false) {
        if (objeto == "box_resultados") {
            box_resultados.classList.remove("hide");
        }
        if (objeto == "box_input") {
            box_input.classList.remove("hide");
        }
    }
}

function inputs(list) {
    box_input.getElementsByTagName("h5")[0].innerHTML = list[0];
    for (var x = 1; x < list.length; x++) {
        box_input.getElementsByTagName("p")[x - 1].innerHTML = list[x];
    }
}

function colector() {
    var colecion = [];
    let box_input_ = box_input.getElementsByTagName("input")
    for (var x = 0; x < box_input_.length; x++) {
        if (isNaN(parseInt(box_input_[x].value))) {
            break;
        } else {
            colecion[x] = box_input_[x].value;
        }

    }
    return colecion;
}

function btn_activiry(icon) {
    icon_boton.innerHTML = icon
}
// herramientas



export {
    image,
    recursos,
    box_resultados,
    box_input,
    box_menssage_dominio,
    icon_boton,
    box_menssage_style_button,
    box_menssage_style_p,
    box_menssage_style_img,
    close_boton,
    optio_nav_movile
};

export {
    escritor,
    cover,
    inputs,
    colector,
    btn_activiry
}