/**18 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o maior número 
 * do array. Utilize a função Math.max() para encontrar o maior número. */


let arrayNumeros = [1,2,3,4,5,6,7,8,9,10];

function calculaMaior (arrayNumeros) {
    let maiorNumeroArray = Math.max(...arrayNumeros);
    return maiorNumeroArray;
}; 

calculaMaior (arrayNumeros);
let maiorNumero = calculaMaior (arrayNumeros);
console.log (`O maior número do array é: ${maiorNumero}`);

