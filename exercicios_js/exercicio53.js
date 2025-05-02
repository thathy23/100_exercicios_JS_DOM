//53 - Crie um script que declare uma função que receba um array de strings como parâmetro
//  e retorne um novo array onde cada string tenha as vogais removidas. Utilize a função replace() 
// para remover as vogais.


const nomes = ['AeiVC', 'aeiOuTb', 'aeioUukk'];

function retiraVogal(nome){
    return nome.map(item => item.replace(/[aeiou]/gi, ''))
}

const nomeSemVogal = retiraVogal(nomes);

console.log(nomeSemVogal)

//Só consoantes maiúsculas: /[BCDFGHJKLMNPQRSTVWXYZ]/g
//Só letras de A a Z maiúsculas: /[A-Z]/g
//sem colocar 'i' 
//para retirar todas maisuculas e minusculas precisa ser item.replace(/[aeiou]/gi, '')
// com i apos o g
//g = global (todas as ocorrências)
//i = ignore case (pega tanto maiúsculas quanto minúsculas)