// Primer parcial - Tema A
// Escribí tu resolución debajo de este comentario.

// 1. Hacer referencias a los html

const inputNombre = document.querySelector("#nombre");
const inputDni = document.querySelector("#dni");
const inputGenero = document.querySelector("#genero");
const botonGenerar = document.querySelector("#boton-generar");
const resultadoDiv = document.querySelector("#resultado");
const mensajeResultado = document.querySelector("#mensaje-resultado");


// 2. Agregar funcionalidad al boton, validar datos

botonGenerar.addEventListener("click", function () {

    //Obtener los datos 
    const nombreUsuario = inputNombre.value.trim();
    const dniTexto = inputDni.value;
    const generoUsuario = inputGenero.value;
    
    //Clases ocultas  
    resultadoDiv.classList.remove("oculto", "error","celeste", "rosa");

    //Validar los datos 
    if (nombreUsuario === "" || dniTexto.length !== 8 || generoUsuario === "") {
    mensajeResultado.textContent = "Completá correctamente todos los campos.";
    resultadoDiv.classList.add("error");
    return;
}
    // Generar el CUIL
    const dniUsuario = Number(dniTexto);
    const cuilUsuario = devolverCuil(generoUsuario, dniUsuario);

    // Mostrar el resultado
     mensajeResultado.textContent = `${nombreUsuario}, tu CUIL es ${cuilUsuario}.`;
   
    if (generoUsuario === "hombre"){
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
}s