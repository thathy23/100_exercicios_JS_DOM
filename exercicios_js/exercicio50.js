//50 - Crie um script que declare uma função que receba um array de strings como parâmetro
//  e retorne um novo array contendo apenas as strings que têm exatamente 4 caracteres.

const array = ['cao', 'gato', 'lua','abcd', '1635474584', '1234'];

const escolhe4Caracteres = (str) => {
    return console.log(str.filter(item => item.length === 4 ));
}

escolhe4Caracteres(array);

// function escolhe4Caracteres(str){
//     return str.filter(item => item.length == 4)
// }

// const array = ['cao', 'gato', 'lua','abcd', '1635474584', ' 1234'];
// const arrayCom4 = escolhe4Caracteres(array);

// console.log(arrayCom4)