// Ejercicio 1: Determinar si un número es positivo o negativo
function determinarPositivoNegativo(inputId, resultadoId) {
    const numero = parseFloat(document.getElementById(inputId).value);
    const resultado = document.getElementById(resultadoId);
    if (numero > 0) resultado.textContent = "El número es positivo.";
    else if (numero < 0) resultado.textContent = "El número es negativo.";
    else resultado.textContent = "El número es cero.";
}

// Ejercicio 2: Verificar si un número es par o impar
function esParOImpar(inputId, resultadoId) {
    const numero = parseInt(document.getElementById(inputId).value);
    const resultado = document.getElementById(resultadoId);
    resultado.textContent = numero % 2 === 0 ? "El número es par." : "El número es impar.";
}

// Ejercicio 3: Calcular el cuadrado de un número
function calcularCuadrado(inputId, resultadoId) {
    const numero = parseFloat(document.getElementById(inputId).value);
    document.getElementById(resultadoId).textContent = `El cuadrado es ${numero ** 2}.`;
}

// Ejercicio 4: Calcular el área de un círculo
function calcularAreaCirculo(inputId, resultadoId) {
    const radio = parseFloat(document.getElementById(inputId).value);
    document.getElementById(resultadoId).textContent = `El área es ${(Math.PI * radio ** 2).toFixed(2)}.`;
}

// Ejercicio 5: Convertir Celsius a Fahrenheit
function convertirCelsiusAFahrenheit(inputId, resultadoId) {
    const celsius = parseFloat(document.getElementById(inputId).value);
    document.getElementById(resultadoId).textContent = `Equivalente en Fahrenheit: ${(celsius * 9/5 + 32).toFixed(2)}°F.`;
}

// Ejercicio 6: Generar un número aleatorio entre 1 y 100
function generarNumeroAleatorio(resultadoId) {
    document.getElementById(resultadoId).textContent = `Número aleatorio: ${Math.floor(Math.random() * 100) + 1}.`;
}

// Ejercicio 7: Contar el número de caracteres en un texto
function contarCaracteres(inputId, resultadoId) {
    const texto = document.getElementById(inputId).value;
    document.getElementById(resultadoId).textContent = `Número de caracteres: ${texto.length}.`;
}

// Ejercicio 8: Sumar dos números
function sumarNumeros(inputId1, inputId2, resultadoId) {
    const num1 = parseFloat(document.getElementById(inputId1).value);
    const num2 = parseFloat(document.getElementById(inputId2).value);
    document.getElementById(resultadoId).textContent = `La suma es: ${num1 + num2}.`;
}

// Ejercicio 9: Calcular la edad a partir del año de nacimiento
function calcularEdad(inputId, resultadoId) {
    const anioNacimiento = parseInt(document.getElementById(inputId).value);
    const edad = new Date().getFullYear() - anioNacimiento;
    document.getElementById(resultadoId).textContent = `Edad aproximada: ${edad} años.`;
}

// Ejercicio 10: Convertir metros a kilómetros
function convertirMetrosAKilometros(inputId, resultadoId) {
    const metros = parseFloat(document.getElementById(inputId).value);
    document.getElementById(resultadoId).textContent = `Equivalente en kilómetros: ${(metros / 1000).toFixed(3)} km.`;
}

// Ejercicio 11: Verificar si un texto es un palíndromo
function verificarPalindromo(inputId, resultadoId) {
    const texto = document.getElementById(inputId).value.toLowerCase().replace(/[\W_]/g, '');
    const esPalindromo = texto === texto.split('').reverse().join('');
    document.getElementById(resultadoId).textContent = esPalindromo ? "Es un palíndromo." : "No es un palíndromo.";
}

// Ejercicio 12: Mostrar el día actual de la semana
function mostrarDiaSemana(resultadoId) {
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const diaActual = diasSemana[new Date().getDay()];
    document.getElementById(resultadoId).textContent = `Hoy es ${diaActual}.`;
}

// Ejercicio 13: Encontrar el número mayor de tres números
function encontrarMayor(inputId1, inputId2, inputId3, resultadoId) {
    const num1 = parseFloat(document.getElementById(inputId1).value);
    const num2 = parseFloat(document.getElementById(inputId2).value);
    const num3 = parseFloat(document.getElementById(inputId3).value);
    const mayor = Math.max(num1, num2, num3);
    document.getElementById(resultadoId).textContent = `El mayor es: ${mayor}.`;
}

// Ejercicio 14: Convertir texto a mayúsculas
function convertirMayusculas(inputId, resultadoId) {
    const texto = document.getElementById(inputId).value;
    document.getElementById(resultadoId).textContent = `Texto en mayúsculas: ${texto.toUpperCase()}.`;
}

// Ejercicio 15: Calcular factorial de un número
function calcularFactorial(inputId, resultadoId) {
    const numero = parseInt(document.getElementById(inputId).value);
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    document.getElementById(resultadoId).textContent = `Factorial: ${factorial}.`;
}
