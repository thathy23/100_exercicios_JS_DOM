/**27 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um 
 * novo array onde cada número seja elevado ao quadrado. */

const numero = [1,2,3,4,5];

function elevaAoQuadrado (numero) {
    return numero.map(function(num) {
        return num * num;
    });
    
};
const numeroAoQuadrado = elevaAoQuadrado (numero);
console.log (numeroAoQuadrado);
