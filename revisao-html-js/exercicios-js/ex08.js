const prompt = require("prompt-sync")();
let frutas = ["Maçã", "Banana", "Laranja"];

frutas.forEach(function(fruta) {
  console.log(fruta);
});

frutas.push("Uva");

console.log("Array após adicionar uma fruta:", frutas);

frutas.pop();

console.log("Array após remover a última fruta:", frutas);