// Escreva um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números no console, exemplo:
// A = 10; B = 5;
// “A + B = 15”
// “A - B = 5”
// “A * B = 50”
// “A / B = 2”

const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Digite o primeiro número inteiro "));
let num2 = parseInt(prompt("Digite o segundo número inteiro "));

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;

console.log("A soma é " + soma);
console.log("A Subtração é " + subtracao);
console.log("A Multiplicação é " + multiplicacao); 

if (num2 !== 0){
    let divisao = num1 / num2;
    console.log("A Divisão é " + divisao);
} else {
    console.log("Não é possivel dividir por 0");
}
