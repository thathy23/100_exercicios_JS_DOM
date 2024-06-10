/**29 - Crie um script que declare uma função que receba um array de strings como parâmetro e 
 * retorne um novo array contendo apenas as strings que começam com a letra "A". */

const strings = ["Agua", "Vinho", "Refirgerante", "Aguardente"];

function mostreStringA (strings) {
    return strings.filter(function (letra){
        //primeiro filtrar so mostrar o que começa com-filter()
        //startsWith() - "so mostra o que começa com()"
        return letra.startsWith('A');
    });
    
};

const letraA = mostreStringA (strings);
console.log (`Começam com a letra A: ${letraA}`);
