document.addEventListener("DOMContentLoaded", function() {
    // Asignar botonArriba después de que el DOM esté cargado
    let botonArriba = document.getElementById('botonArriba');

    // Agregar event listener después de haber asignado botonArriba
    botonArriba.addEventListener("click", irArriba);

    // Función para ir arriba
    function irArriba() {
        let up = document.documentElement.scrollTop;
        if (up > 0) {
            window.scrollTo(0, 0);
        }
    }

    // Evento de scroll para mostrar/ocultar el botón
    window.onscroll = function() {
        let scroll = document.documentElement.scrollTop;
        if (scroll > 200) {
            botonArriba.style.transform = "scale(1)";
        } else {
            botonArriba.style.transform = "scale(0)";
        }
    };
});
