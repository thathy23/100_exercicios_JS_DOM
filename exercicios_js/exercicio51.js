//51 - Crie um script que declare uma função que receba um array de números como parâmetro
//  e retorne um novo array onde cada número seja incrementado em 5.

function incrementaNumero(numero){
    return numero.map(item => item + 5)
}

const numeros = [0,10,20,30,40,50];
const numerosMais5 = incrementaNumero(numeros);

console.log(numerosMais5);