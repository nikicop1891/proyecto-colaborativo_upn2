const boton = document.getElementById("btnAccion");
const mensaje = document.getElementById("mensaje");
let contador = 0;
boton.addEventListener("click", function () {
contador++;
mensaje.textContent =
"JavaScript funcionando. Has presionado el botón "
+ contador
+ " veces.";
});