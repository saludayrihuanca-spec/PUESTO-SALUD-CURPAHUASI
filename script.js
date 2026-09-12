/* =========================================================
   PUESTO DE SALUD CURPAHUASI
   JAVASCRIPT
   ========================================================= */


/* =========================================================
   ESPERAR A QUE CARGUE LA PÁGINA
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    iniciarIndicadores();

    iniciarBotonAtencion();

});


/* =========================================================
   INDICADORES
   ========================================================= */

function iniciarIndicadores() {

    const indicadores = document.querySelectorAll(".indicador");

    if (indicadores.length === 0) {
        return;
    }


    indicadores.forEach(function (indicador) {

        const porcentajeElemento =
            indicador.querySelector(".porcentaje");

        const barra =
            indicador.querySelector(".progreso");


        if (!porcentajeElemento || !barra) {
            return;
        }


        /* Obtener porcentaje */

        let texto =
            porcentajeElemento.textContent.trim();

        let porcentaje =
            parseInt(texto.replace("%", ""));


        /* Validar */

        if (isNaN(porcentaje)) {
            porcentaje = 0;
        }


        /* Evitar valores incorrectos */

        if (porcentaje < 0) {
            porcentaje = 0;
        }

        if (porcentaje > 100) {
            porcentaje = 100;
        }


        /* Guardar porcentaje */

        barra.dataset.valor = porcentaje;


        /* Inicialmente vacío */

        barra.style.width = "0%";


        /* Animar después de un pequeño tiempo */

        setTimeout(function () {

            barra.style.width =
                porcentaje + "%";

        }, 300);

    });

}


/* =========================================================
   BOTÓN ATENCIÓN INTEGRAL
   ========================================================= */

function iniciarBotonAtencion() {

    const boton =
        document.querySelector(".boton-atencion");


    if (!boton) {
        return;
    }


    boton.addEventListener("click", function (evento) {

        /*
         * Si el archivo atencion-integral.html existe,
         * el navegador continuará normalmente.
         *
         * Este código solamente agrega un pequeño efecto
         * visual antes de entrar.
         */

        boton.style.transform =
            "scale(0.97)";


        setTimeout(function () {

            boton.style.transform =
                "";

        }, 150);

    });

}


/* =========================================================
   FUNCIÓN PARA CAMBIAR UN INDICADOR
   =========================================================
   
   Más adelante podremos utilizar esta función para
   actualizar los indicadores desde datos reales.
   
   Ejemplo:
   
   cambiarIndicador(0, 80);
   
   ========================================================= */

function cambiarIndicador(numero, nuevoValor) {

    const indicadores =
        document.querySelectorAll(".indicador");


    if (!indicadores[numero]) {
        return;
    }


    /* Validar valor */

    nuevoValor =
        Number(nuevoValor);


    if (isNaN(nuevoValor)) {
        return;
    }


    if (nuevoValor < 0) {
        nuevoValor = 0;
    }


    if (nuevoValor > 100) {
        nuevoValor = 100;
    }


    const indicador =
        indicadores[numero];


    const porcentajeElemento =
        indicador.querySelector(".porcentaje");


    const barra =
        indicador.querySelector(".progreso");


    if (!porcentajeElemento || !barra) {
        return;
    }


    /* Actualizar texto */

    porcentajeElemento.textContent =
        nuevoValor + "%";


    /* Actualizar barra */

    barra.style.width =
        nuevoValor + "%";


    barra.dataset.valor =
        nuevoValor;
}


/* =========================================================
   EJEMPLO DE DATOS
   =========================================================
   
   Estos valores son solamente de demostración.
   
   Posteriormente podremos reemplazarlos por los datos
   reales del Puesto de Salud Curpahuasi.
   
   ========================================================= */

const indicadoresCurpahuasi = {

    ninos: 75,

    adolescentes: 58,

    jovenes: 68,

    adultos: 82,

    adultoMayor: 64

};


/* =========================================================
   MOSTRAR DATOS EN CONSOLA
   ========================================================= */

console.log(
    "Sistema del Puesto de Salud Curpahuasi iniciado."
);