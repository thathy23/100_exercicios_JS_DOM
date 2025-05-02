//46 - Crie um script que declare uma função que receba um array de strings como parâmetro
//   e retorne um novo array contendo apenas as strings que contêm a letra "e".

function separaNomes(nome){
    return nome.filter(item => item.toLowerCase.includes('e'));//Considera o E maiusculo tbm.
    //return nome.filter(item => item.includes('e')) - sem toLowerCase so retorna onde tiver o 'e' minusculo

}

const todosNomes = ['Evandro', 'Lais', 'Tatiane', 'Tiago', 'Tales', 'Estrela', 'biscoito'];
const nomesComE = separaNomes(todosNomes);

console.log(nomesComE);