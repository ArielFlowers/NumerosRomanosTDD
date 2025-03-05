import { convertirARomano } from './numerosromanos.js';

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("convertir");
    boton.addEventListener("click", () => {
        const num = parseInt(document.getElementById("numero").value);
        document.getElementById("resultado").textContent = "Número Romano: " + convertirARomano(num);
    });
});
