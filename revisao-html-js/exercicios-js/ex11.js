const prompt = require("prompt-sync")();
let marca = prompt("Digite a marca do carro:");
let modelo = prompt("Digite o modelo do carro:");
let ano = prompt("Digite o ano do carro:");

let carro = {
    marca: marca,
    modelo: modelo,
    ano: Number(ano)
};

console.log("Marca:", carro.marca);
console.log("Modelo:", carro.modelo);
console.log("Ano:", carro.ano);

let cor = prompt("Digite a cor do carro:");
carro.cor = cor;


console.log("Objeto após adicionar cor:");
console.log(carro);


delete carro.ano;

console.log("Objeto após remover ano:");
console.log(carro);