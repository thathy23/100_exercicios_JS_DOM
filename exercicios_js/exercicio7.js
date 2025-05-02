/**7 - Crie um script que combine o uso de objetos literais, arrays e cálculos simples para armazenar e 
 * manipular informações pessoais e acadêmicas de uma pessoa. O script deve realizar as seguintes tarefas:
 • nome: O nome do aluno.
 • cpf: O CPF do aluno.
 • cidade: A cidade onde o aluno mora.
 • notas: Um array com 4 notas do aluno. Imprima o nome, CPF e cidade do aluno. 
 Imprima cada uma das notas do array notas. Calcule a média das notas do aluno e imprima. 
 Selecione uma das notas aleatoriamente, convertê-la de uma escala de 0-10 para uma escala de 0-100 
 (nota convertida = nota × 10). Utilize a sintaxe notas[Math.floor(Math.random() * notas.length)] para 
 selecionar uma nota aleatória do array. Utilize template literals para a concatenação de strings. */

 const aluno = {
    nome:"Tatiane Fontes",
    cpf: "055.543.764-55",
    cidade: "João Pessoa",
    notas: [7.0,8.5,9.3,7.3]
 };

 const media = (aluno.notas[0]+aluno.notas[1]+aluno.notas[2]+aluno.notas[3])/4;
 const notaAleatoria = aluno.notas[Math.floor(Math.random() * aluno.notas.length)];
 const notaConvertida = notaAleatoria*10;


 console.log ("Nome do aluno: ", aluno.nome);
 console.log ("CPF: ", aluno.cpf);
 console.log ("Cidade: ",aluno.cidade);
 console.log (`Suas notas foram: Nota1: ${aluno.notas[0]}, Nota2: ${aluno.notas[1]}, Nota3: ${aluno.notas[2]}, Nota4: ${aluno.notas[3]}`);
 console.log ("Notas: ");
 aluno.notas.forEach( (nota,index) => {
    console.log (`Nota${index +1}:`, nota);
 });
 console.log (`A média do aluno foi: ${media.toFixed(2)}`);

 
 console.log(`A nota aleatória foi: ${notaAleatoria}`);
 console.log(`A nota convertida é igual à: ${notaConvertida}`);



 