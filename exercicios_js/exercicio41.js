/**41 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo
 *  array onde cada string tenha a primeira letra em maiúscula. Utilize a função toUpperCase() para converter 
 * a primeira letra. */


const nomes = ["tatiane", "araujo", "fontes"];

function transformaNome(nomes) {
    return nomes.map(function(nomes){
        return nomes[0].toUpperCase() + nomes.slice(1);
    });
}

const primeiraMaiuscula = transformaNome(nomes);

console.log (primeiraMaiuscula);