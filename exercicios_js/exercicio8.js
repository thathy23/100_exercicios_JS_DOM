/**8 - Faça um script que contenha um array chamado notas, esse array armazena 3 notas de um aluno. 
 * O programa deve imprimir:
    • A primeira nota do aluno é: …
    • A segunda nota do aluno é: …
    • A terceira nota do aluno é: …
    • A média do aluno é: …
    • O aluno está: APROVADO ou REPROVADO (APROVADO quando a média for maior ou igual a 7). */

    var notas = [5.0,3.5,4.2];
    var mediaAprovado = 7.0;
    const media = (notas[0]+notas[1]+notas[2])/notas.length;
    var situacaoAluno;

    if (media > mediaAprovado) {
        situacaoAluno = "o aluno está: APROVADO"        
    } else {
        situacaoAluno = "o aluno está REPROVADO"
    }

    console.log (`A primeira nota do aluno é: ${notas[0]}\nA segunda nota do aluno é: ${notas[1]}\nA terceira nota do aluno é: ${notas[2]}`);
    console.log (`A média do aluno é: ${media.toFixed(2)}`);
    console.log (`Com essa média ${situacaoAluno}`); 
