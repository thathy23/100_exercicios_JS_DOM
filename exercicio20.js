/**20 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne a média 
 * dos números do array. */

const arrayNumeros = [2,4,6,8];

function calculaMedia (arrayNumeros) {
    
    let soma = arrayNumeros.reduce((accumulator, currentValue) => {
        return (accumulator + currentValue);
    }, 0);

    let media = soma / arrayNumeros.length;
        
    return media;
};

let media = calculaMedia(arrayNumeros);

console.log (`A media dos numeros do array é: ${media}`);
