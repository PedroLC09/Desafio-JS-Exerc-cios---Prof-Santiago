let idade = Number(prompt("Informe a sua idade (em anos, valor inteiro e positivo):"));

switch (true) {

    case (idade >= 0 && idade <= 12):
        alert("Você é uma criança.");
        break;

    case (idade >= 13 && idade <= 17):
        alert("Você é um adolescente.");
        break;

    case (idade >= 18 && idade <= 59):
        alert("Você é um adulto.");
        break;

    case (idade >= 60 && idade <= 100):
        alert("Você é um idoso.");
        break;

    case (idade < 0):
        alert("Calmae rapaz, nem nasceu ainda KKKKKK")
        break;

    case (idade > 100):
        alert("aí tu já tá no caixão mesmo kkkkkk")
        break;

    default:
        alert("Idade inválida.");
}

// Faixas etárias:
// - Criança:      0 a 12 anos
// - Adolescente: 13 a 17 anos
// - Adulto:      18 a 59 anos
// - Idoso:       60 anos ou mais