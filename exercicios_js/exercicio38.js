/**38 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne 
 * um novo array contendo apenas as strings que terminam com a letra "a". */

const nomes = ["cachorro", "gato", "anta", "pata", "egua"];

function terminaComA(nomes) {
    return nomes.filter(function (string) {
        return string.endsWith('a');
    });    
};
const terminamComa = terminaComA(nomes);
console.log (terminamComa);


