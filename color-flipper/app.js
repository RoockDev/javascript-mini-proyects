const colors = [
    "red",
    "green",
    "rgba(133,122,200)",
    "#f15025",
    "#3498db", // Azul
    "#2ecc71", // Verde esmeralda
    "#e74c3c", // Rojo coral
    "#f39c12", // Naranja
    "#9b59b6", // Morado
    "#1abc9c", // Turquesa
    "#d35400", // Calabaza
    "#c0392b", // Granate
    "#bdc3c7", // Plata
    "#7f8c8d"  // Amianto

];

const btn = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

btn.addEventListener("click", function() {
    // obtenemos eun numero aleatorio entre 0 y la longitud del array de colores
    const randomNumber = getRandomNumber();

    // Cambiamos el color del fondo del body
    document.body.style.backgroundColor = colors[randomNumber];

    // Actualizamos el texto del span con el codigo del color
    colorSpan.textContent = colors[randomNumber];

});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}