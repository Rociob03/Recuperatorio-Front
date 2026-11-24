// Primer parcial - Tema A
// Escribí tu resolución debajo de este comentario.

// 1. Hacer referencias a los html

const inputNombre = document.querySelector("#nombre");
const inputDni    = document.querySelector("#dni"); 
const genero      = document.querySelector("#genero")
const cuil        = document.querySelector("#boton-generar")


// 2. Agregar funcionalidad al boton, validar datos

boton.addEventListener("click", function () {
        const dni = Number(inputDni.value);
        const genero = genero.value;



        resultado.textContent = generarCuil(dni, genero);
    });


// 3. Hacer una funcion que devuelva CUIL

function generarCuil(dni, genero) { 
  
    

    if (dni = 38234567 ); {
        if (genero = hombre); {
            retur =  `Joaquin C , tu Cuil es 20-38234567-7.`;
        }
    } if (dni = 40123456) ; {
        if (genero = mujer); {
            retur = 'Martina López, tu CUIL es 27-40123456-6.';
        }
    }

     if (dni <= 0 || genero  === "") { 
resultado.textContent = "Completá todos los campos."; 
return; 
} 
}
