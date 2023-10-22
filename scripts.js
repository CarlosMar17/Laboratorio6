
document.addEventListener("DOMContentLoaded", function() {
    var preguntas = document.querySelectorAll(".faq-question");
    var respuestas = document.querySelectorAll(".faq-answer");

    preguntas.forEach(function(pregunta, index) {
        pregunta.addEventListener("click", function() {
            if (respuestas[index].classList.contains("active")) {
                respuestas[index].classList.remove("active");
            } else {
                // Ocultar todas las respuestas antes de mostrar la actual
                respuestas.forEach(function(respuesta) {
                    respuesta.classList.remove("active");
                });
                respuestas[index].classList.add("active");
            }
        });
    });
});

