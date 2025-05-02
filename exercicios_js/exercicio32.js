/**32 Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades 
 * nome, idade e notas (um array de números). Utilize a função map() para criar um novo array contendo apenas os 
 * nomes dos alunos. Imprima o novo array. */

const aluno = [
    {
        nome: "Jurema da Silva",
        idade: "35",
        notas: [10.0, 9.5, 9.0]
    },
    {
        nome: "Juvenal de Souza",
        idade: "40",
        notas: [8.0, 8.5, 9.0]
    },
];

const nomeAluno = aluno.map(function(aluno){ 
    return aluno.nome;
});

console.log (nomeAluno);