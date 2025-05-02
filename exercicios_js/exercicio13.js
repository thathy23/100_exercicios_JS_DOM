/**13 - Crie um script que declare uma variável var largura e atribua a ela um valor numérico. 
 * Declare uma função que calcule a largura ao cubo e imprima o resultado. */ 

var largura = 20;

function larguraAoCubo(){
    let cubo = largura*largura*largura;

    return cubo;
}

larguraAoCubo();
let resultado = larguraAoCubo();
console.log ("A largura ao cubo tem o valor de ", resultado);
