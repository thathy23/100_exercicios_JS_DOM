/*14 - Crie um script que declare uma variável const base e atribua a ela um valor numérico. Declare uma função 
que calcule a área de um triângulo usando a base e uma altura fornecida como parâmetro e imprima o resultado.*/



const base = 30;
let altura = 20;


function calculaArea (altura){
    
    return (altura*base)/2;
}

calculaArea(altura);
let triangulo = calculaArea(altura);

console.log ("A área do triangulo é igual à: ", triangulo);