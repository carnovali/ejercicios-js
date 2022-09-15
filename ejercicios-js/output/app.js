"use strict";
//tengo el teclado en ingles asi que no puse ni una sola tilde//
// EJERCICIO 1//
const boton1 = document.querySelector("#botonEj1");
boton1.addEventListener("click", function () {
    window.alert("Hello World");
});
// EJERCICIO 2//
const boton2 = document.querySelector("#botonEj2");
boton2.addEventListener("click", function () {
    document.write("Hello World");
});
// EJERCICIO 3//
const boton3 = document.querySelector("#botonEj3");
const response3 = document.querySelector("#response-ej3");
function SumarDosYTres() {
    return 3 + 5;
}
boton3.addEventListener("click", function () {
    response3.innerHTML = `La suma entre 3 y 5 es: ${SumarDosYTres().toString()}`;
});
// EJERCICIO 4//
const boton4 = document.querySelector("#botonEj4");
const response4 = document.querySelector("#response-ej4");
function ingresarNombre() {
    const nombreUsuario = window.prompt("Ingrese un nombre");
    return nombreUsuario;
}
boton4.addEventListener("click", function () {
    response4.innerHTML = `Hola ${ingresarNombre()}!`;
});
//EJERCICIO 5//
const boton5 = document.querySelector("#botonEj5");
const response5 = document.querySelector("#response-ej5");
function sumarDosNumeros(num1, num2) {
    return num1 + num2;
}
boton5.addEventListener("click", function () {
    const numero1 = Number(window.prompt("Ingrese un numero", "0"));
    const numero2 = Number(window.prompt("Ingrese otro numero", "0"));
    response5.innerHTML = `La suma entre ${numero1} y ${numero2} es: ${sumarDosNumeros(numero1, numero2).toString()}`;
});
//EJERCICIO 6//
const boton6 = document.querySelector("#botonEj6");
const response6 = document.querySelector("#response-ej6");
function cualEsMayor(num1, num2) {
    return Math.max(num1, num2);
}
boton6.addEventListener("click", function () {
    const numero1 = Number(window.prompt("Ingrese un numero", "0"));
    const numero2 = Number(window.prompt("Ingrese otro numero", "0"));
    response6.innerHTML = `El numero mayor es: ${cualEsMayor(numero1, numero2).toString()}`;
});
//EJERCICIO 7//
const boton7 = document.querySelector("#botonEj7");
const response7 = document.querySelector("#response-ej7");
function cualEsMayor2(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
boton7.addEventListener("click", function () {
    const numero1 = Number(window.prompt("Ingrese un numero", "0"));
    const numero2 = Number(window.prompt("Ingrese otro numero", "0"));
    const numero3 = Number(window.prompt("Ingrese otro numero", "0"));
    response7.innerHTML = `El numero mayor es: ${cualEsMayor2(numero1, numero2, numero3).toString()}`;
});
//EJERCICIO 8//
const boton8 = document.querySelector("#botonEj8");
const response8 = document.querySelector("#response-ej8");
function esDivisiblePor2(num1) {
    const result = num1 % 2;
    if (result === 0) {
        return `${num1} es divisible por 2`;
    }
    else {
        return `${num1} no es divisible por 2`;
    }
}
boton8.addEventListener("click", function () {
    const numero1 = Number(window.prompt("Ingrese un numero", "0"));
    response8.innerHTML = esDivisiblePor2(numero1);
});
//EJERCICIO 9//
const boton9 = document.querySelector("#botonEj9");
const response9 = document.querySelector("#response-ej9");
function contarLetrasA(str) {
    const strArray = str.toLocaleLowerCase().split("");
    const result = strArray.filter((e) => e === "a");
    return result.length;
}
boton9.addEventListener("click", function () {
    const string1 = window.prompt("Ingrese una frase");
    response9.innerHTML = `Hay ${contarLetrasA(string1).toString()} letras "a" en la frase`;
});
//EJERCICIO 10//
const boton10 = document.querySelector("#botonEj10");
const response10 = document.querySelector("#response-ej10");
function contarVocales(str) {
    const vocalesArray = ["a", "e", "i", "o", "u"];
    const strArray = str.toLocaleLowerCase().split("");
    const resultArray = [];
    for (let vocal of vocalesArray) {
        if (strArray.includes(vocal)) {
            resultArray.push(vocal);
        }
    }
    return resultArray;
}
boton10.addEventListener("click", function () {
    const string1 = window.prompt("Ingrese una frase");
    response10.innerHTML = `Las vocales que aparecen en la frase son: ${contarVocales(string1).toString()}`;
});
//EJERCICIO 11//
const boton11 = document.querySelector("#botonEj11");
const response11 = document.querySelector("#response-ej11");
function contarVocalesTotal(str) {
    const vocalesArray = ["a", "e", "i", "o", "u"];
    const strArray = str.toLocaleLowerCase().split("");
    let result = 0;
    for (let letra of strArray) {
        if (vocalesArray.includes(letra)) {
            result += 1;
            continue;
        }
    }
    return result;
}
boton11.addEventListener("click", function () {
    const string1 = window.prompt("Ingrese una frase");
    response11.innerHTML = `Las cantidad de vocales que aparecen en la frase son: ${contarVocalesTotal(string1).toString()}`;
});
//EJERCICIO 12//
const boton12 = document.querySelector("#botonEj12");
const response12 = document.querySelector("#response-ej12");
let vocalesResult = [0, 0, 0, 0, 0];
function contarCadaVocal(str) {
    const vocalesArray = ["a", "e", "i", "o", "u"];
    const strArray = str.toLocaleLowerCase().split("");
    let count = 0;
    for (let vocal of vocalesArray) {
        for (let i = 0; i <= strArray.length; i++) {
            if (strArray[i] === vocal)
                vocalesResult[count] += 1;
        }
        count++;
    }
    return vocalesResult;
}
boton12.addEventListener("click", function () {
    const string1 = window.prompt("Ingrese una frase");
    contarCadaVocal(string1);
    response12.innerHTML = `En la frase aparecen: ${vocalesResult[0]} 'a', ${vocalesResult[1]} 'e', ${vocalesResult[2]} 'i', ${vocalesResult[3]} 'o', ${vocalesResult[4]} 'u'`;
});
//EJERCICIO 13//
const boton13 = document.querySelector("#botonEj13");
const response13 = document.querySelector("#response-ej13");
function esDivisiblePorNumeros(num1) {
    const division = (num) => {
        if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
            return true;
        }
    };
    if (division(num1)) {
        return `el numero ${num1} es divisible por uno de esos numeros`;
    }
    else {
        return `el numero ${num1} no es divisible por ninguno de esos numeros`;
    }
}
boton13.addEventListener("click", function () {
    const numero1 = Number(window.prompt("Ingrese un numero", "0"));
    response13.innerHTML = esDivisiblePorNumeros(numero1);
});
//EJERCICIO 14//
//(debe haber almenos 200 formas mejores de hacer esto)//
const boton14 = document.querySelector("#botonEj14");
const response14 = document.querySelector("#response-ej14");
function esDivisiblePorCualNumero(num1) {
    let response = "El numero es divisible por: ";
    if (num1 % 2 === 0 || num1 % 3 === 0 || num1 % 5 === 0 || num1 % 7 === 0) {
        if (num1 % 2 === 0) {
            response += "2 ";
        }
        if (num1 % 3 === 0) {
            response += "3 ";
        }
        if (num1 % 5 === 0) {
            response += "5 ";
        }
        if (num1 % 7 === 0) {
            response += "7 ";
        }
    }
    else {
        response += "ninguno numero de esos";
    }
    return response;
}
boton14.addEventListener("click", function () {
    const numero1 = Number(window.prompt("Ingrese un numero", "0"));
    response14.innerHTML = esDivisiblePorCualNumero(numero1);
});
//EJERCICIO 15//
const boton15 = document.querySelector("#botonEj15");
const response15 = document.querySelector("#response-ej15");
function calcularDivisores(num1) {
    const result = [];
    for (let i = 1; i <= num1 / 2; i++) {
        if (num1 % i === 0) {
            result.push(i);
        }
    }
    result.push(num1);
    return result;
}
boton15.addEventListener("click", function () {
    const numero1 = Number(window.prompt("Ingrese un numero", "0"));
    response15.innerHTML = `Los divisores de ${numero1} son: ${calcularDivisores(numero1).toString()}`;
});
//EJERCICIO 16//
const boton16 = document.querySelector("#botonEj16");
const response16 = document.querySelector("#response-ej16");
function calcularDivisoresDeDosNumeros(num1, num2) {
    let result = [];
    let count = 1;
    while (count <= Math.min(num1, num2)) {
        if (num1 % count === 0 && num2 % count === 0) {
            result.push(count);
        }
        count++;
    }
    return result;
}
boton16.addEventListener("click", function () {
    const numero1 = Number(window.prompt("Ingrese un numero", "0"));
    const numero2 = Number(window.prompt("Ingrese un numero", "0"));
    response16.innerHTML = `Los divisores comunes entre ${numero1} y ${numero2} son: ${calcularDivisoresDeDosNumeros(numero1, numero2).toString()}`;
});
//EJERCICIO 17//
const boton17 = document.querySelector("#botonEj17");
const response17 = document.querySelector("#response-ej17");
function calcularPrimos(num1) {
    const result = calcularDivisores(num1);
    if (result.length > 2) {
        return `${num1} no es un numero primo`;
    }
    else {
        return `${num1} es un numero primo`;
    }
}
boton17.addEventListener("click", function () {
    const numero1 = Number(window.prompt("Ingrese un numero", "0"));
    response17.innerHTML = calcularPrimos(numero1);
});
