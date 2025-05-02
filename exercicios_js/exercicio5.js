/*5 - Crie um script que contenha duas funções, uma usando a sintaxe tradicional e outra usando 
arrow function. Ambas as funções devem receber um parâmetro carreira e retornar uma string concatenada 
usando template literals ${var}. Retorno: "Meu objetivo de carreira é me tornar uma [parametro carreira]".*/

const carreira1 = 'desenvolvedora';
const carreira2 = 'devSenior';

function definaCarreiraFunction () {
    return `Meu objetivo de carreira é me tornar uma ${carreira1}`;    
}

const definaCarreiraArrow = () => {
    return `Meu objetivo de carreira é me tornar uma ${carreira2}`;  

}

console.log (definaCarreiraFunction(carreira1));
console.log (definaCarreiraArrow(carreira2));



