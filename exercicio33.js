/**33 Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades
 nome, idade e notas (um array de números). Utilize a função filter() *  para criar um novo array contendo apenas
 os alunos com idade maior ou igual a 18 anos. Imprima o novo array. */


 const alunos = [
    {
        nome: 'Pedro Cavalcanti',
        idade: 18,
        notas: [7, 6.5, 8]
    },
    {
        nome: 'Ana Medeiros',
        idade: 17,
        notas: [10, 9.5, 10]
    },
    {
        nome: "Jurema da Silva",
        idade: 35,
        notas: [10, 9.5, 9]
    },
    {
        nome: "Juvenal de Souza",
        idade: 40,
        notas: [8.0, 8.5, 9]
    },
];

function mostraMaior(alunos) {

    return alunos.filter (alunos => alunos.idade >= 18);
    
};

const alunoMaior = mostraMaior(alunos);
console.log (alunoMaior);

