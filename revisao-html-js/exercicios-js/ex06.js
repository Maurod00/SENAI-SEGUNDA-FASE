// Escreva um programa que solicite ao usuário um número e avalie se um número é par ou ímpar,
//  imprima o resultado no console conforme exemplo: ”O número 10 é par" ou ”O número 9 é impar”.

const prompt = require("prompt-sync")();
let numero = parseInt(prompt("Digite um número:"));

if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else if (numero % 2 === 0) {
    console.log("O número " + numero + " é par");
} else {
    console.log("O número " + numero + " é impar");
}
