import {
    int_comp,
    int_simp,
    pro_ari,
    pro_geo
} from './operation.js'; //operaciones

import {
    // escritor,
    cover,
    inputs,
    // colector,
    btn_activiry
} from './enlaces.js'; //herramientas

import {
    image,
    recursos,
    box_resultados,
    //box_input,
    box_menssage_dominio,
    icon_boton,
    box_menssage_style_button,
    box_menssage_style_p,
    box_menssage_style_img,
    close_boton,
    optio_nav_movile
} from './enlaces.js'; //enlaces


// ......................................................................click.event......................................................................................
var operation = [
    ["progrecion arimetica", "a1", "a2", "an"],
    ["progrecion geometrica", "g_a1", "g_a2", "g_an"],
    ["interes simple", "capital", "periodo", "taza de interes"],
    ["interes compuesto", "capital", "periodo", "taza de interes"],
    ["progrecion arimetica", "a1", "a2", "an"]
]
var operation_number;

image[0].addEventListener("click", function() {
    box_resultados.innerHTML = "";
    inputs(operation[0]);
    operation_number = 0;
    cover(false, "box_input")
    btn_activiry("add");
    $('.button-collapse').sideNav('hide');
})
image[1].addEventListener("click", function() {
    inputs(operation[1]);
    operation_number = 1;
    cover(false, "box_input")
    btn_activiry("add")
    $('.button-collapse').sideNav('hide');
})
image[2].addEventListener("click", function() {
    inputs(operation[2]);
    operation_number = 2;
    cover(false, "box_input")
    btn_activiry("add")
    $('.button-collapse').sideNav('hide');
})
image[3].addEventListener("click", function() {
    inputs(operation[3]);
    operation_number = 3;
    cover(false, "box_input")
    btn_activiry("add")
    $('.button-collapse').sideNav('hide');
})
image[4].addEventListener("click", function() {
    inputs(operation[4]);
    operation_number = 4;
    cover(false, "box_input")
    btn_activiry("add")
    $('.button-collapse').sideNav('hide');
})

// ......................................................................click.event......................................................................................


optio_nav_movile[0].addEventListener("click", function() {
    inputs(operation[0]);
    operation_number = 0;
    cover(false, "box_input")
    btn_activiry("add");
    $('.button-collapse').sideNav('hide');
})
optio_nav_movile[1].addEventListener("click", function() {
    inputs(operation[1]);
    operation_number = 1;
    cover(false, "box_input")
    btn_activiry("add")
    $('.button-collapse').sideNav('hide');
})
optio_nav_movile[2].addEventListener("click", function() {
    inputs(operation[2]);
    operation_number = 2;
    cover(false, "box_input")
    btn_activiry("add")
    $('.button-collapse').sideNav('hide');
})
optio_nav_movile[3].addEventListener("click", function() {
    inputs(operation[3]);
    operation_number = 3;
    cover(false, "box_input")
    btn_activiry("add")
    $('.button-collapse').sideNav('hide');
})
optio_nav_movile[4].addEventListener("click", function() {
        inputs(operation[4]);
        operation_number = 4;
        cover(false, "box_input")
        btn_activiry("add")
        $('.button-collapse').sideNav('hide');
    })
    // ......................................................................hover.event......................................................................................
image[0].addEventListener("mouseover", function() {
    image[0].setAttribute("src", recursos + "box.4.illya.png");
})
image[1].addEventListener("mouseover", function() {
    image[1].setAttribute("src", recursos + "box.4.illya.png");
})
image[2].addEventListener("mouseover", function() {
    image[2].setAttribute("src", recursos + "box.4.illya.png");
})
image[3].addEventListener("mouseover", function() {
    image[3].setAttribute("src", recursos + "box.4.illya.png");
})
image[4].addEventListener("mouseover", function() {
        image[4].setAttribute("src", recursos + "box.4.illya.png");
    })
    // mouseout
image[0].addEventListener("mouseout", function() {
    image[0].setAttribute("src", recursos + "box.4.kuro.png");
})
image[1].addEventListener("mouseout", function() {
    image[1].setAttribute("src", recursos + "box.4.kuro.png");
})
image[2].addEventListener("mouseout", function() {
    image[2].setAttribute("src", recursos + "box.4.kuro.png");
})
image[3].addEventListener("mouseout", function() {
    image[3].setAttribute("src", recursos + "box.4.kuro.png");
})
image[4].addEventListener("mouseout", function() {
        image[4].setAttribute("src", recursos + "box.4.kuro.png");
    })
    // ......................................................................hover.event......................................................................................

// run the operation and secondary activiry  
boton.addEventListener("click", function() {
    if (icon_boton.innerHTML == "add") {
        // operation
        if (operation_number == 0) {
            pro_ari();
            btn_activiry("delete");
            cover(false, "box_resultados")
        } else if (operation_number == 1) {
            pro_geo();
            btn_activiry("delete");
            cover(false, "box_resultados")
        } else if (operation_number == 2) {
            int_simp();
            btn_activiry("delete");
            cover(false, "box_resultados")
        } else if (operation_number == 3) {
            int_comp();
            btn_activiry("delete");
            cover(false, "box_resultados")
                // operation
        } else if (operation_number == 4) {}
    } else if (icon_boton.innerHTML == "delete") { //clear box_result
        box_resultados.innerHTML = "";
        cover(true, "resultado");
        cover(true, "box_input");
        btn_activiry("help");
    } else if (icon_boton.innerHTML == "help") { //activiry box_menssage
        if (box_menssage_dominio.classList.contains("initial_position") == true) {

            box_menssage_dominio.classList.replace("initial_position", "secondary_position")
        } else {
            box_menssage_dominio.classList.replace("secondary_position", "initial_position")

        }
    }
})


//box message
// listening
var position_activiry = 0;
var menssage = [
    ["a) Seleciona la operacion que desees.", "B) Rellena los campos correspodientes.", "C) Preciona el icono con el simbolo."],
    ["./recursos/ejemplo_1.png", "./recursos/ejemplo_2.png", "./recursos/ejemplo_3.png"]
]
close_boton.addEventListener("click", function() {
    box_menssage_dominio.classList.replace("secondary_position", "initial_position");
})

box_menssage_style_button[1].addEventListener("click", function() {
    if (position_activiry < 2) {
        position_activiry = position_activiry + 1;
        box_menssage_style_p[0].innerHTML = menssage[0][position_activiry]
        box_menssage_style_img.src = menssage[1][position_activiry];
    } else {

    }
})
box_menssage_style_button[0].addEventListener("click", function() {
    if (position_activiry > 0) {

        position_activiry = position_activiry - 1;
        box_menssage_style_p[0].innerHTML = menssage[0][position_activiry]
        box_menssage_style_img.src = menssage[1][position_activiry];
    } else {

    }
})