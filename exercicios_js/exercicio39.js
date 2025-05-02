/**39 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne  * um novo 
 * array onde cada número seja convertido para uma string com duas casas decimais. Utilize a função toFixed() 
 * para formatar os números. */

const array = [2.4444, 3.569, 5.333, 9.4587];

const novoArray = array.map(function(num){
    return num.toFixed(2);
});

console.log (novoArray);


