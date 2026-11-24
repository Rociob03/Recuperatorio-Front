# Primer parcial — Tema A: Generador de CUIL

Tiempo máximo: **2 horas**.

## Consigna

Programar la aplicación para que, al presionar **Generar CUIL**:

1. Obtener con `document.querySelector()` el nombre, el DNI, el género, el formulario, el resultado y el mensaje.
2. Escuchar el envío del formulario y evite que la página se recargue.
3. Validar que:
   - el nombre no esté vacío;
   - el DNI tenga exactamente 8 dígitos;
   - se haya seleccionado un género.
4. Si falta un dato o es incorrecto, mostrar dentro del resultado un mensaje que explique el problema.
5. Si los datos son válidos, llamar a una función llamada `generarCuil(dni, genero)`.
6. Mostrar un mensaje como: **Martina López, tu CUIL es 27-40123456-6**.

El cuadro de resultado ya comienza oculto con la clase `oculto`. Debe aparecer únicamente después de que el usuario intente enviar el formulario.

## Regla de cálculo para este parcial

- Si el género es `hombre`, el prefijo es `20`.
- Si el género es `mujer`, el prefijo es `27`.
- El dígito final se obtiene con el resto de dividir el DNI por 10: `dni % 10`.
   - ```const digito = dni % 10 ```
   - NOTA: No es exactamente así en la realidad pero lo simplificamos para este caso.
- El formato final debe ser: `prefijo-dni-digito`.

Ejemplos:

| Género | DNI | Resultado esperado |
| --- | ---: | --- |
| Mujer | 40123456 | 27-40123456-6 |
| Hombre | 38234567 | 20-38234567-7 |

## Requisitos y calificación

### Para alcanzar 4 puntos

- Referenciar correctamente los elementos HTML mediante `document.querySelector()`.
- Aplicar la funcionalidad al botón o al envío del formulario mediante un evento.
- Leer los datos ingresados y mostrar un mensaje cualquiera en la página.
- Realizar una validación básica para evitar mostrar un resultado con campos vacíos.

### Para alcanzar 6 puntos

- Cumplir todo lo anterior.
- Crear y utilizar la función `generarCuil(dni, genero)`.
- Usar condicionales para elegir el prefijo correspondiente.
- Validar correctamente el nombre, el DNI de 8 dígitos y la selección de género.
- Mostrar el CUIL con el formato solicitado.

### Para alcanzar 8 puntos

- Cumplir todo lo anterior.
- Quitar `oculto` cuando corresponda.
- Si se seleccionó hombre, aplicar al resultado la clase `celeste`.
- Si se seleccionó mujer, aplicar al resultado la clase `rosa`.
- Si existe un error, aplicar la clase `error` y quitar las clases de color anteriores.
- Evitar que se acumulen clases incorrectas al realizar varios intentos.

### Para alcanzar 10 puntos

- Completar correctamente todos los requisitos.
- Presentar código bien indentado, claro y ordenado.
- Utilizar nombres de variables y funciones descriptivos.
- Evitar repeticiones innecesarias y mantener un estilo consistente.
- Entregar el proyecto funcionando y sin errores en la consola.

## Entrega

Entregar la carpeta completa del proyecto con `index.html`, `css/estilos.css` y `js/app.js`. No modificar los nombres ni la ubicación de los archivos.


## Símbolos útiles

- Backtick: `` ` ``
- Comillas simples: `' '`
- Comillas dobles: `" "`
- Igual: `=`
- Doble igual: `==`
- Triple igual: `===`
- Distinto: `!==`
- Mayor que: `>`
- Menor que: `<`
- Mayor o igual: `>=`
- Menor o igual: `<=`
- AND: `&&`
- OR: `||`
- Negación: `!`
- Paréntesis: `( )`
- Brackets: `[ ]`
- Curly brackets: `{ }`
- Interpolación: `${ }`
- Punto: `.`
- Numeral: `#`
- Coma: `,`
- Punto y coma: `;`
- Dos puntos: `:`
- Suma: `+`
- Resta: `-`
- Multiplicación: `*`
- División: `/`
- Módulo: `%`
- Comentario: `//`
