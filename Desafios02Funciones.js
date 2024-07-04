/*
1. Crear una función que 
muestre "¡Hola, mundo!" en la consola.
*/
function mostrarHolaMundo(){
    console.log('Hola Mundo!');
}
mostrarHolaMundo();

/*
2. Crear una función que 
reciba un nombre como parámetro 
y muestre  "¡Hola, [nombre]!" en la consola.
*/
function mostrarHolaNombre(nombre){
    console.log(`Hola, ${nombre}!`);
}
mostrarHolaNombre("Jorge");

/*
3. Crear una función que 
reciba un número como parámetro 
y devuelva el doble de ese número.
*/
function calcularDoble(numero){
    return numero * 2
}
let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);

/*
4. Crear una función que 
reciba tres números como parámetros 
y devuelva su promedio.
*/
function calcularPromedio(numero1, numero2, numero3){
    return (numero1 + numero2 + numero3)/3;
}
let resultadoPromedio = calcularPromedio(4, 7, 10);
console.log(resultadoPromedio);

/*
5. Crear una función que 
recibe dos números como parámetros 
y devuelve el mayor de ellos.
*/
function mayorOMenor(n1, n2){
    return n1 > n2 ? n1 : n2;
    /*lo que hace este codigo es que 
    si la condición antes del signo de interrogación es cierta (true)
    se elige el valor antes de los dos puntos,
    si es falsa se elige el valor después de los dos puntos
    {es un operador ternario (?) } 
    */
}
let numeroMayor = mayorOMenor(15, 9)
console.log(numeroMayor)

/* 
6. Crear una función que 
reciba un número como parámetro 
y devuelva el resultado de multiplicar ese número por sí mismo.
*/
function calcularCuadrado(numero){
    return numero * numero
}
let resultadoCuadrado = calcularCuadrado(12);
console.log(resultadoCuadrado);
