/**16 - Crie um script que declare um array de números e utilize um loop while para calcular a soma de todos 
 * os números do array.  Imprima o resultado. */

let numeros = [10,20,30,40,50];
let posicao = 0;
let resultado = 0;
while ( posicao<numeros.length) {
    let numero = numeros[posicao];
    resultado += numero;        
    posicao++
    
};
console.log(resultado);