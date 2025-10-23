//Nivel 1
// console.log("Hola JavaScript!");

// let nombre = "Mercedes";
// let edad = "21";
// let ciudad = "CABA";
// console.log (`Hola me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}` )

// let numero = 10;
// let texto = "Hola";
// let booleano = true;
// let indefinido;
// let nulo = null;
// console.log(typeof numero, typeof texto, typeof booleano, typeof indefinido, typeof nulo);
// typeof es un operador que te dice de qué tipo de dato es una variable o un valor.Sirve para saber si algo es un número, un texto (string), un booleano, etc.

//Nivel 2
// let papas = 3500;
// let coca = 1500;
// let total = papas + coca;
// console.log (`El total de la compra es de $${total}`)

// let puntos = 0;
// puntos += 50; //Este símbolo += significa “sumar y guardar el resultado en la misma variable”.
// puntos -= 10; // Este símbolo -= significa “restar y guardar el resultado”.
// console.log(`Puntaje final: ${puntos}`);

// let precioOriginal = 5000;
// let descuento = precioOriginal * 0.2;
// let precioFinal = precioOriginal - descuento;
// console.log(`Precio final con descuento: $${precioFinal}`);

//Nivel 3
// let usuario = prompt("¿Cuál es tu nombre?");
// alert(`¡Bienvenido/a ${usuario}!`);

// let num1 = Number(prompt("Ingresa un número:"));
// let num2 = Number(prompt("Ingresa otro número:"));
// console.log(`La suma es: ${num1 + num2}`);

// let aprender = confirm("¿Querés aprender más JavaScript?");
// console.log(`Resultado de confirmación: ${aprender}`);

//Nivel 4

//Unidad 2.2 - Ciclos (for,while,)

// let numero = prompt("che decime algun numero para multiplicar hasta el 10");

// for (i=0; i <10; i++) {
//     console.log (numero+ " x " +i+ " es " + (i*numero));

// }
// Condiciones compuestas con &&
// let nombreIngresado   = prompt("Ingresar nombre");
// let apellidoIngresado = prompt("Ingresar apellido");

// if((nombreIngresado !="") && (apellidoIngresado !="")) {
//     alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
// } else {
//     alert("Error: Ingresar nombre y apellido");
// }

// CLASE 03
// Ejercicio 1: Numeros del 1 al 10 en una funcion

// function contarNumeros () {
//     for (let i=1; i<=10; i++){
//         console.log ( i)
//     }
// }
//  contarNumeros ()

//Ejercicio 2: Crea una funcion que me diga  si un numero es par o impar
//Que ese numero me lo de un prompt
//numero % 2 === 0

// function verificarNumero (numero) {
//     if (numero % 2 === 0) {
//         console.log ("Es par");
//     } else {
//         console.log ("Es impar");
//     }
// }
// let numero = Number(prompt("Dame un numero"));
// verificarNumero (numero);

//Ejericios extra
// A. Crear una funcion que calcule el area de un rectangulo
//Funcion flecha

// const areaRectangulo = (base, altura) => base*altura / 2
// console.log ("El area del rectangulo es de", areaRectangulo(10,6))
//okk!!

//B. Crear una funcion que determine si un numero es positivo,  negativo o cero
//Funcion anonima
// const determinarNumero = function () {
// const numero = Number(prompt("Escribi un numero"))
//     if (numero > 0) {
//         console.log ("Numero Positivo")
//     } else if (numero < 0) {
//         console.log ("Numero negativo")
//     } else {
//         console.log ("Numero 0")
//     }
// }
// determinarNumero ()
//okk!!

//Actividad Practica - Unidad 3 - Crea un algoritmo utilizando funciones
// Promedio de notas:
// - Pide tres notas con prompt().
// - Calcula el promedio.
// - Muestra si aprobaste o no.

// const pedirNotas = function () {
//     const numero1 = Number(prompt("Escribi un numero del 1 al 10"));
//     const numero2 = Number(prompt("Escribi otro numero del 1 al 10"));
//     const numero3 = Number(prompt("Escribi otro numero del 1 al 10"));

//     return {numero1, numero2, numero3}
// };

// const promedio = function (numero1, numero2, numero3) {
//     return (numero1 + numero2 + numero3) / 3;
// };

// const mostrarResultado = function (resultado) {
//     alert ("El promedio final es: " + resultado);
// };

// function programa () {
//     const notas = pedirNotas ();
//     const resultado = promedio (notas.numero1, notas.numero2, notas.numero3);
//     mostrarResultado (resultado);
// }

// programa ()

//Actividad Practica - Unidad 2 - Crea un algoritmo utilizando un ciclo

// const claveCorrecta = "vintti123";
// let intentos = 0;
// const maxIntentos = 3;

// let entrada = prompt ("Ingresa tu contrasena:");
// intentos++;
// while (entrada !== claveCorrecta && intentos < maxIntentos) {
//     alert ("Contrasena incorreta. Intento " + intentos + "de " + maxIntentos);
//     entrada = prompt ("Proba de nuevo: ");
//     intentos++;
// }
// if (entrada === claveCorrecta) {
//     alert ("Acceso concedido");
// } else {
//     alert ("Bloqueado. Agotaste los " + maxIntentos + " intentos.");
// }

//Tabla de multiplicar
// let entrada = prompt ("Ingresa un numero");
// for (i=0; i <=10; i++) {
//     console.log (entrada + " x " +i+ " es " + (i*entrada));
// }

//Cuenta regresiva del 10 al 0
// for (let i=10; i>=0; i--) {
//     console.log ("Numero: " + i);
// }

//Repetidor de palabra x5
// let palabra = prompt ("Escribi una palabra:");
// for (let i=0; i<5; i++) {
//     console.log (palabra);
// }

//Suma de números pares e impares
// const ciclo = 10;
// let impares = 0;
// let pares = 0;

// for (let i = 0; i < ciclo; i++) {
//   let numero = Number(prompt("Escribi un numero"));

//   if (numero % 2 === 0) {
//     console.log("Es par");
//     pares = pares + numero;
//   } else {
//     console.log("Es impar");
//     impares = impares + numero;
//   }
// }
// console.log("Suma de pares: " + pares);
// console.log("Suma de impares: " + impares);

// Pedir número mediante prompt() y sumarle otro nuevo número en cada repetición, realizando una salida por cada resultado (expresa el resultado de la operación).
// let numero = Number(prompt("Escribi un numero:"));
// for (let i = 0; i < 1; i++) {
//   let nuevoNumero = Number(prompt("Escribí otro número:"));
//   let resultado = numero + nuevoNumero;
//   console.log("Resultado: " + resultado);
// }


//CLASE 04: OBJETOS Y ARRAYS
//Ejercicio 1: Mostrar todos los elementos
// const frutas = ["Manzana", "Banana", "Cereza"];

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

//Ejercicio 2: Mostrar solo el último elemento
// console.log (frutas[frutas.length -1]);

//Ejercicio 3: Sumar todos los números de un array
// const numeros = [10, 20, 30, 40];
// let total = 0

// for (let i=0; i < numeros.length; i++) {
//     total = total + numeros[i];
// }
// console.log ("El total es de: " + total)

