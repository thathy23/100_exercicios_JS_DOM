//48 - Crie um script que declare uma função que receba um array de números como parâmetro
//  e retorne um novo array contendo apenas os números que são ímpares.

function converteNumeroImpar(numero){
    return numero.filter(item => item % 2 != 0)
}

function converteNumeroPar(numero){
    return numero.filter(item => item % 2 == 0)
}
const numeros = [1,2,3,4,5,6,7,8,9,10];
const numerosImpares = converteNumeroImpar(numeros);
const numerosPares = converteNumeroPar(numeros);

console.log(`Numeros Impares: ${numerosImpares}`);
console.log(`Numeros Pares: ${numerosPares}`);
