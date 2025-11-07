let numero = Number(prompt("digite um número: "));

switch (numero) {
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
    alert("O número é par!");
    break;

    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    alert("O número é ímpar!");
    break;

    default:
    alert("Número inválido!");
    break;
}
