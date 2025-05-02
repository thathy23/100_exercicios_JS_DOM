//54 - Crie um script que declare uma função que receba um array de strings como parâmetro 
// e retorne um novo array contendo apenas as strings que começam com a letra "B".


function selecionaNome(nome){
    return nome.filter(item => item.startsWith('B'))//use toUpperCase() para imprimir as com b minusculo tbm
}

const nomes = ['Joao','Barbara', 'babel', 'Barbosa'];
const nomesComB = selecionaNome(nomes);

console.log(nomesComB)

