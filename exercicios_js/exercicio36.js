/**36 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo 
 * array contendo apenas os números que são múltiplos de 5. */

const numeros = [1,2,3,4,5,10,20,30,45,55,65];

function mostraMultiplo (numeros) {
        return numeros.filter(numeros => numeros % 5 === 0);

};

const multiplosDe5 = mostraMultiplo (numeros);
console.log (multiplosDe5);

