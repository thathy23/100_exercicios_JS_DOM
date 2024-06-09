/* Escreva um programa que imprima os números de 1 a 100. Mas, para múltiplos de 3, 
 * imprima "Fizz" em vez do número e, para múltiplos de 5, imprima "Buzz". Para números que 
 * são múltiplos de ambos 3 e 5, imprima "FizzBuzz". 
 * 
 * 10 - Refaça o exercício anterior utilizando .map(). Para criar um array com números de 1 a 100:
 * */  


const numeros = Array.from({ length: 100 }, (_, index) => index + 1);
const novoArray = numeros.map(function(num){
    if (num % 5 === 0 && num % 3 === 0){
        return 'FizzBuzz';
    }else if (num % 3 === 0){
        return 'Fizz';
    }else if (num % 5 === 0){
        return 'Buzz';
    }else {
        return num;
    }         
});

console.log (novoArray);



   
   