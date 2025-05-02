/**26 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo
 *  array onde cada string esteja em letras minúsculas. Utilize a função toLowerCase() para converter as strings.*/

const strings = ["A,B,C,D,E,F", "TODAS", "IGUAIS"];

function mostraMinuscula (strings) {

    return strings.map (function (letra) {

        return letra.toLowerCase();

    });

};

const minuscula = mostraMinuscula(strings);
console.log (minuscula);

    
