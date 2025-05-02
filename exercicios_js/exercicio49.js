//49 - Crie um script que declare uma função que receba um array de strings como parâmetro
//  e retorne um novo array onde cada string tenha a última letra em maiúscula. 
// Utilize a função toUpperCase() para converter a última letra.

function converteLetra(nome) {
    return nome.map(item => {
        const primeiraParte = item.slice(0, -1);
        const segundaParte = item.slice(-1).toUpperCase();
        return primeiraParte + segundaParte;

    });
}

const nomes = ['caderno', 'toalha', 'lua'];
const ultimoNomeMaiusculo = converteLetra(nomes);

console.log(ultimoNomeMaiusculo);
