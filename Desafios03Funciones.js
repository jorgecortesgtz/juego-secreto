/*
1. Crea una función que 
calcule el índice de masa corporal (IMC) de una persona 
a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
*/

function calcularIMC(altura, peso){
let imc = peso / (altura * altura);
return imc;
}

//Ejemplo de uso
let altura = 1.75;
let peso = 120;
let imc = parseInt(calcularIMC(altura, peso));

console.log(`Tu IMC es igual a ${imc}`)

/*
2. Crea una función que 
calcule el valor del factorial 
de un número pasado como parámetro.
*/

function calcularFactorial(numero){
    if (numero === 0 || numero === 1) {
return 1;
    }else { 
        return numero * calcularFactorial(numero - 1 );
    }
}
// Ejemplo de uso
let numero = 5
let resultado = calcularFactorial(numero);

console.log(`El factorial de ${numero} es ${resultado} `);


/*
3. Crea una función que 
convierta un valor en dólares, 
pasado como parámetro, 
y devuelva el valor equivalente en reales(moneda brasileña,
si deseas puedes hacerlo con el valor del dólar en tu país). 
Para esto, considera la cotización del dólar igual a R$4,80.
*/

function convertirBRLUSD(dolares){
    let BRLUSD = 4.80
    return dolares * BRLUSD  
}


function convertirMXNUSD(dolares){
    let USDMXN = 18.50
    return dolares * USDMXN
}

//Ejemplo de uso
let dolares = 100;
let realesUSD = convertirBRLUSD(dolares);
let pesosUSD = convertirMXNUSD(dolares);

console.log(`${dolares} dólares son ${realesUSD} reales y ${pesosUSD} pesos`);

/*
4. Crea una función que 
muestre en pantalla el área 
y el perímetro de una sala rectangular, 
utilizando la altura y la anchura 
que se proporcionarán como parámetros.
*/

//Funciones
function area(alto, ancho){
    return ancho * alto
}
function perimetro(alto, ancho){
return 2* (alto + ancho)
}

//Ejemplo de uso 
let alto = 5 // en metros
let ancho = 10 // en metros
let resultadoArea = area(alto, ancho)
let resultadoPerimetro = perimetro(alto, ancho)
console.log(`El area del rectangulo es de ${resultadoArea}m2, y su perimtreo es de ${resultadoPerimetro} metros.`)


/*
5. Crea una función que 
muestre en pantalla el área 
y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. 
Considera Pi = 3,14.
*/

let pi = 3.14156
//Funciones
function areaCircular(radio){
    return pi * (radio * radio)
}
function perimetroCircular(diametro){
return pi * diametro
}

//Ejemplo de uso 
let radio = 5 // en metros
let diametro = 2 * radio // en metros
let resultadoAreaCircular = areaCircular(radio)
let resultadoPerimetroCircular = perimetroCircular(diametro)
console.log(`El area del circulo es de ${resultadoAreaCircular}m2, y su perimetro es de ${resultadoPerimetroCircular} metros.`)


/*
6. Crea una función 
que muestre en pantalla 
la tabla de multiplicar 
de un número dado como parámetro. 
*/

//Función
function mostrarTablaDeMultiplicar(tabla) {
    for (let i = 1; i <= 10; i++) {
      let resultado = tabla * i;
      console.log(tabla + " x " + i + " = " + resultado);
    }
} //Esta función utiliza for para contar un número determinado de iteraciones (i<=10) y repetir la secuencia sumando 1 en cada repetición.


// Ejemplo de uso
let tabla = 7;
mostrarTablaDeMultiplicar(tabla);

  

