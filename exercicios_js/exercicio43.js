/**43 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um 
 * novo array onde cada número seja multiplicado por 3. */

const numeros = [1,2,3,4,5,6];

function multiplica (numeros) {
    return numeros.map(function (num){
        return num = num * 3;
    });
};

const multiplicadoPor3 = multiplica(numeros);

console.log (multiplicadoPor3);