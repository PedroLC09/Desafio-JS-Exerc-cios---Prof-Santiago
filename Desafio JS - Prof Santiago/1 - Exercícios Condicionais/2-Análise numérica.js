let numero = 1; // Substitua com o número desejado

switch (Math.sign(numero)) {
  case 1:
    console.log("O número é positivo");
    break;
  case -1:
    console.log("O número é negativo");
    break;
  case 0:
    console.log("O número é igual a zero");
    break;
  default:
    console.log("O valor não é um número válido");
}