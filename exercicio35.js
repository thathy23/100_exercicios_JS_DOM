/**35 Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array 
 * onde cada número seja decrementado em 1. */

const numeros = [2,4,6,8,10];

function decrementaNumeros(numeros){

    return novoArray = numeros.map(function (num){
        return num = num - 1;        
    })
};

const arrayDecrementado = decrementaNumeros(numeros);
console.log (arrayDecrementado);




