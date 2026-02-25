const prompt = require("prompt-sync")();
function somar(numero1, numero2) {
  return numero1 + numero2;
}


let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));


let resultado = somar(numero1, numero2);


console.log("Resultado da soma:", resultado);