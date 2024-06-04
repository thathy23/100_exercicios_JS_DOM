/*1 - Crie um script que tenha três variáveis:
var nome;  let sobreNome;  const cpf;
nome e cpf devem estar em um escopo global. sobreNome deve estar dentro de uma função. 
A execução do programa deve imprimir o nome completo na ordem correta (com quebra de linha): 
Nome Sobrenome CPF. Outra linha com uma mensagem concatenando os valores*/

var nome = 'Tatiane';
const cpf = '055.543.764-00';

const definirSobrenome = () => {
    let sobreNome = 'Fontes';
    return sobreNome;     
}
 
const sobreNome = definirSobrenome()

console.log (`Nome:${nome}\nSobrenome:${sobreNome}\nCPF:${cpf}`);
console.log (`O nome completo é ${nome} ${sobreNome} e o CPF é ${cpf}`);




