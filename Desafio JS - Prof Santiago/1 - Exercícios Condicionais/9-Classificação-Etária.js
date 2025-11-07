const readline = require("readline-sync");

let idade = Number(readline.question("Informe a sua idade (em anos, valor inteiro e positivo): "));

switch (true) {
  case (idade >= 0 && idade <= 12):
    console.log("Voce e uma crianca.");
    break;

  case (idade >= 13 && idade <= 17):
    console.log("Voce e um adolescente.");
    break;

  case (idade >= 18 && idade <= 59):
    console.log("Voce e um adulto.");
    break;

  case (idade >= 60 && idade <= 100):
    console.log("Voce e um idoso.");
    break;

  case (idade < 0):
    console.log("Calmae rapaz, nem nasceu ainda KKKKKK");
    break;

  case (idade > 100):
    console.log("Ai tu ja ta no caixao mesmo kkkkkk");
    break;

  default:
    console.log("Idade invalida.");
}

// Faixas etárias:
// - Criança:      0 a 12 anos
// - Adolescente: 13 a 17 anos
// - Adulto:      18 a 59 anos
// - Idoso:       60 anos ou mais