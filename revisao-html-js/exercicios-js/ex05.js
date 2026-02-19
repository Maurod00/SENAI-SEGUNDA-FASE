// Crie uma variável para armazenar o raio de um círculo, calcule e imprima no console a área do círculo.
// Fórmula de cálculo do circulo:
// pi = 3.14;
// pi * (raio²)
// O resultado deverá ser: ”A área do círculo é: xx” 
const prompt = require("prompt-sync")();
let raio = parseFloat(prompt("Digite o valor do raio em cm: "))

let area = 3.14*raio*raio

console.log(`Área da circunferencia é ${area} cm^2`)