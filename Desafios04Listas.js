/*
1. Crea una lista vacía llamada "listaGenerica".
*/
let listaGenerica = [];

/*
2. Crea una lista 
de lenguajes de programación llamada "lenguagesDeProgramacion 
con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
*/
let lenguajesDeProgramacion = ["JavaScript","C","C++","Kotlin","Python"];

/*
3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
*/
lenguajesDeProgramacion.push("Java", "Ruby", "Golang");
console.log(lenguajesDeProgramacion);

/*
4. Crea una función que 
muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
*/

function mostrarLenguajesSeparadamente(){
    for (let i = 0 ; i < lenguajesDeProgramacion.length; i++){
        console.log(lenguajesDeProgramacion[i]);
    }
}
mostrarLenguajesSeparadamente();

/*
5. Crea una función que 
muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
*/

function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguajesDeProgramacion[i]);
    }
} 
mostrarLenguagesReversoSeparadamente();

/*
6. Crea una función que 
calcule el promedio de los elementos en una lista de números.
*/

function calcularMedia(lista){
    let suma = 0
    for (let i = 0; i < lista.lenght; i++){
        suma += lista[i];
    }
    return (suma / lista.lenght);
}

let numeros = [1,2,3,4,5];
let media = calcularMedia(numeros);
console.log("Media:", media);
console.log(numeros[0].type)
console.log(media)

/*
7. Crea una función que 
muestre en la consola el número más grande 
y el número más pequeño en una lista.
*/

function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numbers = [15, 8, 25, 5, 12];
encontrarMayorMenor(numbers);

/*
8. Crea una función que 
devuelva la suma de todos los elementos en una lista.
*/





/*
9. Crea una función que 
devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, 
o -1 si no existe en la lista.
*/

/*
10. Crea una función que 
reciba dos listas de números del mismo tamaño 
y devuelva una nueva lista con la suma de los elementos uno a uno.
*/


/*
11. Crea una función que 
reciba una lista de números 
y devuelva una nueva lista con el cuadrado de cada número.
*/