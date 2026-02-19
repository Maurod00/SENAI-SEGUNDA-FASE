// Escreva um programa que solicite ao usuário um números e verifique se o número é maior que 10. 
// Se for, imprima no console "O número é maior que 10", caso contrário, imprima "O número é menor ou 
// igual a 10".

const prompt = require("prompt-sync")();

let num = parseInt(prompt("Digite um número: "))

if (num > 10){
    console.log("O número é maior que 10")
} else {
    console.log("O número é menor ou igual a 10")
}
