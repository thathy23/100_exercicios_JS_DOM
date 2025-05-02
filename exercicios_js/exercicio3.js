/*3 - Crie um script que simule o registro de informações de um aluno. O script deve ter três variáveis:
var nomeAluno;
let curso;
const matricula;
As variáveis nomeAluno e matricula devem estar em um escopo global. A variável curso deve estar dentro 
de uma função. A função deve retornar uma string que concatene todas as informações do aluno em uma única 
linha utilizando template literals ${var}. */

var nomeAluno = 'Tatiane';
const matricula = '000111';

const definaCurso = () => {
    let curso = 'SPI';
    return `Nome do aluno: ${nomeAluno} | matricula: ${matricula} | curso: ${curso}`
    
}

let curso = definaCurso();
console.log (curso);




