/**25 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array
 *  onde cada string esteja em letras maiúsculas.Utilize a função toUpperCase() para converter as strings. */

const strings = ["a,b,c,d,e,f", "todas",  "iguais"];


function deixaMaiusculo (strings) {

    return strings.map (function(letra) {
        return letra.toUpperCase();
    });
};

const maiuscula = deixaMaiusculo(strings);
console.log (strings)
console.log (maiuscula);
