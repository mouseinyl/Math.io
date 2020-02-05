import {
    escritor,
    // cover,
    // inputs,
    colector,
    // btn_activiry
} from './enlaces.js';


// operaciones 

function pro_ari() {
    //[an1=0]/[an2=1]/[ani=2]
    var coleccion, diferencia, calculo, total;
    coleccion = colector();
    diferencia = (coleccion[1] - coleccion[0]);
    escritor("diferencia", diferencia);
    calculo = ((coleccion[2] - 1) * diferencia);
    escritor("valor en la posicion", coleccion[2]);
    total = calculo + diferencia;
    escritor("es", total);
}

function pro_geo() {
    var coleccion;
    coleccion = colector();
    var r = coleccion[1] / coleccion[0];
    var total = (coleccion[0] * (Math.pow(r, (coleccion[2] - 1))));
    escritor("la razon es ", r);
    escritor("valor en la posicion", coleccion[2]);
    escritor("es", total);
}

function int_simp() {
    //interes simple= capital * taza_interes * periodo)
    var coleccion;
    coleccion = colector();
    var total;
    coleccion[2] = coleccion[2] / 100;
    total = (coleccion[0] * coleccion[2] * coleccion[1]);
    escritor("El interes simple es de", total);
    escritor("obteniendo un total de ", total + coleccion[0]);
}

function int_comp() {
    //interes compuesto= (capital *(1 + (taza de interes/100)) ** periodo)
    var coleccion;
    coleccion = colector();
    var total;
    coleccion[2] = coleccion[2] / 100;
    total = (coleccion[0] * (1 + Math.pow((coleccion[2] / 100), coleccion[1])));
    escritor("El interes compuesto es de", total);
    escritor("Obteniendo un total de ", total + coleccion[0]);
}

// fin de operaciones

export {
    int_comp,
    int_simp,
    pro_ari,
    pro_geo
}