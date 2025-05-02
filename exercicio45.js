//45 - Crie um script que declare uma função que receba um array de strings como parâmetro
//     e retorne um novo array onde cada string esteja em letras maiúsculas e invertida.
  
function alterarArray(nome){
    return nome.map(item => item.toUpperCase().split('').reverse().join(''));
}

    const nomeOriginal = [ 'tatiane', 'araujo', 'fontes'  ];
    const nomeAlterado = alterarArray(nomeOriginal);

    console.log(nomeAlterado);

