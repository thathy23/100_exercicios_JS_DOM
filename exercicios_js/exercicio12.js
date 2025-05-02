/**12 - Crie um script que declare uma variável let altura e atribua a ela um valor numérico. 
 * Em seguida, declare uma função que calcule a altura ao quadrado e imprima o resultado.
 */

let altura = 10;

function alturaAoQuadrado () {

    let quadrado = altura*altura;

    return quadrado;
}

alturaAoQuadrado();

let resultado = alturaAoQuadrado ();
console.log ("O valor da altura ao quadrado é: ",resultado);
