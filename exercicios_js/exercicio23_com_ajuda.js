/**23 - Crie um script que declare um array de números e utilize a função reduce() para calcular a soma de todos 
 * os números do array. Imprima o resultado. */


const numeros = [1,2,3,4,5,6,7,8,9,10];

function calculaSoma (){
    let soma = numeros.reduce ((accumulator,currentValue) => {
        return accumulator + currentValue;
    }, 0);

    return soma;
};

let resultado = calculaSoma();
console.log (`A soma dos valores do array é: ${resultado} `);