//tengo el teclado en ingles asi que no puse ni una sola tilde//
// EJERCICIO 1//
const boton1: HTMLElement = document.querySelector("#botonEj1") as HTMLElement;
boton1.addEventListener("click", function () {
  window.alert("Hello World");
});

// EJERCICIO 2//
const boton2: HTMLElement = document.querySelector("#botonEj2") as HTMLElement;
boton2.addEventListener("click", function () {
  document.write("Hello World");
});

// EJERCICIO 3//
const boton3: HTMLElement = document.querySelector("#botonEj3") as HTMLElement;
const response3: HTMLElement = document.querySelector(
  "#response-ej3"
) as HTMLElement;

function SumarDosYTres(): number {
  return 3 + 5;
}

boton3.addEventListener("click", function () {
  response3.innerHTML = `La suma entre 3 y 5 es: ${SumarDosYTres().toString()}`;
});

// EJERCICIO 4//
const boton4: HTMLElement = document.querySelector("#botonEj4") as HTMLElement;
const response4: HTMLElement = document.querySelector(
  "#response-ej4"
) as HTMLElement;

function ingresarNombre(): string {
  const nombreUsuario: string = window.prompt("Ingrese un nombre") as string;
  return nombreUsuario;
}

boton4.addEventListener("click", function () {
  response4.innerHTML = `Hola ${ingresarNombre()}!`;
});

//EJERCICIO 5//
const boton5: HTMLElement = document.querySelector("#botonEj5") as HTMLElement;
const response5: HTMLElement = document.querySelector(
  "#response-ej5"
) as HTMLElement;

function sumarDosNumeros(num1: number, num2: number): number {
  return num1 + num2;
}

boton5.addEventListener("click", function () {
  const numero1: number = Number(window.prompt("Ingrese un numero", "0"));
  const numero2: number = Number(window.prompt("Ingrese otro numero", "0"));
  response5.innerHTML = `La suma entre ${numero1} y ${numero2} es: ${sumarDosNumeros(
    numero1,
    numero2
  ).toString()}`;
});

//EJERCICIO 6//
const boton6: HTMLElement = document.querySelector("#botonEj6") as HTMLElement;
const response6: HTMLElement = document.querySelector(
  "#response-ej6"
) as HTMLElement;

function cualEsMayor(num1: number, num2: number): number {
  return Math.max(num1, num2);
}

boton6.addEventListener("click", function () {
  const numero1: number = Number(window.prompt("Ingrese un numero", "0"));
  const numero2: number = Number(window.prompt("Ingrese otro numero", "0"));
  response6.innerHTML = `El numero mayor es: ${cualEsMayor(
    numero1,
    numero2
  ).toString()}`;
});

//EJERCICIO 7//
const boton7: HTMLElement = document.querySelector("#botonEj7") as HTMLElement;
const response7: HTMLElement = document.querySelector(
  "#response-ej7"
) as HTMLElement;

function cualEsMayor2(num1: number, num2: number, num3: number): number {
  return Math.max(num1, num2, num3);
}

boton7.addEventListener("click", function () {
  const numero1: number = Number(window.prompt("Ingrese un numero", "0"));
  const numero2: number = Number(window.prompt("Ingrese otro numero", "0"));
  const numero3: number = Number(window.prompt("Ingrese otro numero", "0"));
  response7.innerHTML = `El numero mayor es: ${cualEsMayor2(
    numero1,
    numero2,
    numero3
  ).toString()}`;
});

//EJERCICIO 8//
const boton8: HTMLElement = document.querySelector("#botonEj8") as HTMLElement;
const response8: HTMLElement = document.querySelector(
  "#response-ej8"
) as HTMLElement;

function esDivisiblePor2(num1: number): string {
  const result = num1 % 2;
  if (result === 0) {
    return `${num1} es divisible por 2`;
  } else {
    return `${num1} no es divisible por 2`;
  }
}

boton8.addEventListener("click", function () {
  const numero1: number = Number(window.prompt("Ingrese un numero", "0"));
  response8.innerHTML = esDivisiblePor2(numero1);
});

//EJERCICIO 9//
const boton9: HTMLElement = document.querySelector("#botonEj9") as HTMLElement;
const response9: HTMLElement = document.querySelector(
  "#response-ej9"
) as HTMLElement;

function contarLetrasA(str: string): number {
  const strArray: string[] = str.toLocaleLowerCase().split("");
  const result: string[] = strArray.filter((e) => e === "a");
  return result.length;
}

boton9.addEventListener("click", function () {
  const string1: string = window.prompt("Ingrese una frase") as string;
  response9.innerHTML = `Hay ${contarLetrasA(
    string1
  ).toString()} letras "a" en la frase`;
});

//EJERCICIO 10//
const boton10: HTMLElement = document.querySelector(
  "#botonEj10"
) as HTMLElement;
const response10: HTMLElement = document.querySelector(
  "#response-ej10"
) as HTMLElement;

function contarVocales(str: string): string[] {
  const vocalesArray: string[] = ["a", "e", "i", "o", "u"];
  const strArray: string[] = str.toLocaleLowerCase().split("");
  const resultArray: string[] = [];
  for (let vocal of vocalesArray) {
    if (strArray.includes(vocal)) {
      resultArray.push(vocal);
    }
  }
  return resultArray;
}

boton10.addEventListener("click", function () {
  const string1: string = window.prompt("Ingrese una frase") as string;
  response10.innerHTML = `Las vocales que aparecen en la frase son: ${contarVocales(
    string1
  ).toString()}`;
});

//EJERCICIO 11//
const boton11: HTMLElement = document.querySelector(
  "#botonEj11"
) as HTMLElement;
const response11: HTMLElement = document.querySelector(
  "#response-ej11"
) as HTMLElement;

function contarVocalesTotal(str: string): number {
  const vocalesArray: string[] = ["a", "e", "i", "o", "u"];
  const strArray: string[] = str.toLocaleLowerCase().split("");
  let result: number = 0;
  for (let letra of strArray) {
    if (vocalesArray.includes(letra)) {
      result += 1;
      continue;
    }
  }
  return result;
}

boton11.addEventListener("click", function () {
  const string1: string = window.prompt("Ingrese una frase") as string;
  response11.innerHTML = `Las cantidad de vocales que aparecen en la frase son: ${contarVocalesTotal(
    string1
  ).toString()}`;
});

//EJERCICIO 12//
const boton12: HTMLElement = document.querySelector(
  "#botonEj12"
) as HTMLElement;
const response12: HTMLElement = document.querySelector(
  "#response-ej12"
) as HTMLElement;

let vocalesResult: number[] = [0, 0, 0, 0, 0];

function contarCadaVocal(str: string): number[] {
  const vocalesArray: string[] = ["a", "e", "i", "o", "u"];
  const strArray: string[] = str.toLocaleLowerCase().split("");
  let count: number = 0;
  for (let vocal of vocalesArray) {
    for (let i = 0; i <= strArray.length; i++) {
      if (strArray[i] === vocal) vocalesResult[count] += 1;
    }
    count++;
  }
  return vocalesResult;
}

boton12.addEventListener("click", function () {
  const string1: string = window.prompt("Ingrese una frase") as string;
  contarCadaVocal(string1);
  response12.innerHTML = `En la frase aparecen: ${vocalesResult[0]} 'a', ${vocalesResult[1]} 'e', ${vocalesResult[2]} 'i', ${vocalesResult[3]} 'o', ${vocalesResult[4]} 'u'`;
});

//EJERCICIO 13//
const boton13: HTMLElement = document.querySelector(
  "#botonEj13"
) as HTMLElement;
const response13: HTMLElement = document.querySelector(
  "#response-ej13"
) as HTMLElement;

function esDivisiblePorNumeros(num1: number): string {
  const division = (num: number) => {
    if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
      return true;
    }
  };
  if (division(num1)) {
    return `el numero ${num1} es divisible por uno de esos numeros`;
  } else {
    return `el numero ${num1} no es divisible por ninguno de esos numeros`;
  }
}

boton13.addEventListener("click", function () {
  const numero1: number = Number(window.prompt("Ingrese un numero", "0"));
  response13.innerHTML = esDivisiblePorNumeros(numero1);
});

//EJERCICIO 14//
//(debe haber almenos 200 formas mejores de hacer esto)//
const boton14: HTMLElement = document.querySelector(
  "#botonEj14"
) as HTMLElement;
const response14: HTMLElement = document.querySelector(
  "#response-ej14"
) as HTMLElement;

function esDivisiblePorCualNumero(num1: number): string {
  let response: string = "El numero es divisible por: ";
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
  } else {
    response += "ninguno numero de esos";
  }
  return response;
}

boton14.addEventListener("click", function () {
  const numero1: number = Number(window.prompt("Ingrese un numero", "0"));
  response14.innerHTML = esDivisiblePorCualNumero(numero1);
});

//EJERCICIO 15//
const boton15: HTMLElement = document.querySelector(
  "#botonEj15"
) as HTMLElement;
const response15: HTMLElement = document.querySelector(
  "#response-ej15"
) as HTMLElement;

function calcularDivisores(num1: number): number[] {
  const result: number[] = [];
  for (let i = 1; i <= num1 / 2; i++) {
    if (num1 % i === 0) {
      result.push(i);
    }
  }
  result.push(num1);
  return result;
}

boton15.addEventListener("click", function () {
  const numero1: number = Number(window.prompt("Ingrese un numero", "0"));
  response15.innerHTML = `Los divisores de ${numero1} son: ${calcularDivisores(
    numero1
  ).toString()}`;
});

//EJERCICIO 16//
const boton16: HTMLElement = document.querySelector(
  "#botonEj16"
) as HTMLElement;
const response16: HTMLElement = document.querySelector(
  "#response-ej16"
) as HTMLElement;

function calcularDivisoresDeDosNumeros(num1: number, num2: number): number[] {
  let result: number[] = [];
  let count: number = 1;
  while (count <= Math.min(num1, num2)){
    if (num1 % count === 0 && num2 % count === 0) {
      result.push(count)
    }
    count++
  }
  return result
}

boton16.addEventListener("click", function () {
  const numero1: number = Number(window.prompt("Ingrese un numero", "0"));
  const numero2: number = Number(window.prompt("Ingrese un numero", "0"));
  response16.innerHTML = `Los divisores comunes entre ${numero1} y ${numero2} son: ${calcularDivisoresDeDosNumeros(
    numero1,
    numero2
  ).toString()}`;
});

//EJERCICIO 17//
const boton17: HTMLElement = document.querySelector(
  "#botonEj17"
) as HTMLElement;
const response17: HTMLElement = document.querySelector(
  "#response-ej17"
) as HTMLElement;

function calcularPrimos(num1: number): string {
  const result: number[] = calcularDivisores(num1)
  if (result.length > 2) {
    return `${num1} no es un numero primo`
  } else {
    return `${num1} es un numero primo`
  }
}

boton17.addEventListener("click", function () {
  const numero1: number = Number(window.prompt("Ingrese un numero", "0"));
  response17.innerHTML = calcularPrimos(numero1);
});

