let valor = Number(prompt("Digite o valor da compra: "));
let valorFinal;

switch (valor >= 100) {

    case true:
        valorFinal = valor * 0.9;
        break;

    default:
        valorFinal = valor;
        break;
}

alert("Valor final da compra: R$ " + valorFinal.toFixed(2));