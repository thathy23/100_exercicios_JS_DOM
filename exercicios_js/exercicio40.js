/**40 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array
 *  contendo apenas os números que são maiores que 10. */

const numeros = [2,5,8,10,15,20,25,30];

const novoArray = numeros.filter(function(num){
    if (num > 10){
        return num 
}   
});

console.log (novoArray);


