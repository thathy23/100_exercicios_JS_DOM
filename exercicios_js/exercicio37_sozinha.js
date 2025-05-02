/**37 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo 
 * array onde cada string esteja invertida. Utilize a função reverse() para inverter as strings. */


const nome = ["ENAITAT", "OJUARA", "SETNOF"];

function inverteNome(nome) {
    return nome.map(str => str.split('').reverse().join(''));

};

const nomeInvertido = inverteNome(nome);
console.log (nomeInvertido);