// Primer parcial - Tema A
// Escribí tu resolución debajo de este comentario.

// 1. Hacer referencias a los html

const inputNombre = document.querySelector("#nombre");
const inputDni = document.querySelector("#dni");
const inputGenero = document.querySelector("#genero");
const botonGenerar = document.querySelector("#boton-generar");
const resultadoDiv = document.querySelector("#resultado");
const mensajeResultado = document.querySelector("#mensaje-resultado");


// 2. Agregar funcionalidad al botón y validar datos

botonGenerar.addEventListener("click", function () {

    // Obtener los datos
    const nombreUsuario = inputNombre.value.trim();
    const dniTexto = inputDni.value;
    const generoUsuario = inputGenero.value;
    
    // Limpiar mensajes anteriores
    mensajeResultado.textContent = "";
    
     //Clases ocultas 
    resultadoDiv.classList.remove("oculto", "error", "celeste", "rosa");

    // Validar los datos
    let hayErrores = false;

if (nombreUsuario === "") {
    mensajeResultado.textContent += "Ingresá tu nombre y apellido.";
    hayErrores = true;
}

if (dniTexto === "") {
    mensajeResultado.textContent += " Ingresá tu DNI.";
    hayErrores = true;

} else if (dniTexto.length !== 8) {
    mensajeResultado.textContent += " El DNI debe tener exactamente 8 números.";
    hayErrores = true;
}

if (generoUsuario === "") {
    mensajeResultado.textContent += " Seleccioná una opción de género.";
    hayErrores = true;
}

if (hayErrores) {
    resultadoDiv.classList.add("error");
    return;
}

    // Generar el CUIL
    const dniUsuario = Number(dniTexto);
    const cuilUsuario = devolverCuil(generoUsuario, dniUsuario);

    // Mostrar el resultado
    mensajeResultado.textContent = `${nombreUsuario}, tu CUIL es ${cuilUsuario}.`;

    // Agregar color según el género
    if (generoUsuario === "hombre") {
        resultadoDiv.classList.add("celeste");
    } else {
        resultadoDiv.classList.add("rosa");
    }

});


// 3. Hacer una funcion que devuelva CUIL

function devolverCuil (genero, dni){
    let cuilResultante = "";
    const digito = dni % 10;

    if (genero === "hombre"){

        cuilResultante = `20-${dni}-${digito}`;

    } else if (genero === "mujer"){

        cuilResultante = `27-${dni}-${digito}`;

    } 
    return cuilResultante;
}