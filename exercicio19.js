/**19 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o menor número
 *  do array. Utilize a função Math.min() para encontrar o menor número. */

const arrayNumeros = [1,2,3,4,5];

function mostreMenor (arrayNumeros) {
    let menor = Math.min(...arrayNumeros);
    return menor;
};

let menorNumero = mostreMenor(arrayNumeros);
console.log (`O menor numero do array é: ${menorNumero}`);
