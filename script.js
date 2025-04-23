// Evento para mostrar alerta al hacer clic en el título
document.getElementById("titulo").addEventListener("click", function() {
    alert("¡Bienvenido a la comunidad de los michis!");
});

// Evento para cambiar la imagen entre varias opciones
const imagenMichi = document.getElementById("michi-imagen");
const imagenes = ["sources/LCDLM.jpg", "sources/michi1.jpg", "sources/michi2.jpg", "sources/michi3.jpg"];
let indiceImagen = 0;

imagenMichi.addEventListener("click", function() {
    indiceImagen = (indiceImagen + 1) % imagenes.length; // Cambia a la siguiente imagen en el array
    this.src = imagenes[indiceImagen];
});

// Evento para cambiar el fondo al hacer clic en un botón
const botonFondo = document.getElementById("cambiar-fondo");
const coloresFondo = ["#FDD835", "#FF7043", "#4DB6AC", "#9575CD"];
let indiceColor = 0;

botonFondo.addEventListener("click", function() {
    document.body.style.backgroundColor = coloresFondo[indiceColor];
    indiceColor = (indiceColor + 1) % coloresFondo.length;
});

// Evento para alertar cuando el usuario intenta salir al hacer clic en el enlace del pie de página
document.querySelector(".PiePagina a").addEventListener("click", function(event) {
    const salir = confirm("¿Estás seguro de que quieres salir de la comunidad de los michis?");
    if (!salir) {
        event.preventDefault(); // Cancela la navegación si el usuario elige "Cancelar"
    }
});