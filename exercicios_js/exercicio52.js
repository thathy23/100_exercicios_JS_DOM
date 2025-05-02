//52 - Crie um script que declare uma função que receba um array de números como parâmetro
//  e retorne um novo array contendo apenas os números que são menores que 50.

function selecionaNumeros(numero){
    return numero.filter(item => item < 50)
}

const numeros = [10,20,30,50,60,70];
const numerosMenor50 = selecionaNumeros(numeros);

console.log(numerosMenor50)