/**22 - Crie um script que declare um array de números e utilize a função map() para criar um novo array 
 * onde cada número seja multiplicado por 2. Imprima o novo array. */

const numeros = [2,4,6,8,10];

const novoArray = numeros.map(function(num){
    return num * 2;
});
 
console.log (novoArray);