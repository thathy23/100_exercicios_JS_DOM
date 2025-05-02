/**42 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo 
 * array contendo apenas as strings que têm mais de 5 caracteres. */

const nomes = ["Ana", "Tatiane", "de", "Araujo", "Fontes"];

function mostreMaiorQueCinco(nomes){
    return nomes.filter(function(letra){
        return letra.length > 5;
    })

};
const maiorQue5 = mostreMaiorQueCinco(nomes);

console.log (maiorQue5);

