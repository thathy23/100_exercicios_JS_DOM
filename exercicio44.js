/**44 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um
 *  novo array contendo apenas os números que são divisíveis por 2. */

const numbers = [1,2,3,5,10,20,33,63,67,52,54,66];

function mostraDobro(numbers){
    return numbers.filter(function(num) {
        return num % 2 ===0;    
    });

};

const dobro = mostraDobro(numbers);
console.log(dobro);