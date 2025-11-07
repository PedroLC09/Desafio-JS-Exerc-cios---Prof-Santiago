let a = Number(prompt("Informe o valor do 1º lado do triângulo (maior que zero): "));
let b = Number(prompt("Informe o valor do 2º lado do triângulo (maior que zero): "));
let c = Number(prompt("Informe o valor do 3º lado do triângulo (maior que zero): "));

if (a + b > c && a + c > b && b + c > a) {
    // É triângulo!
    if (a === b && b === c) {
        alert("Triângulo equilátero"); // todos os lados iguais
    } else if (a === b || a === c || b === c) {
        alert("Triângulo isósceles"); // dois lados iguais
    } else {
        alert("Triângulo escaleno"); // todos os lados diferentes
    }
} else {
    alert("Não é possível formar um triângulo com essas medidas.");
}