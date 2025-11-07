// 8. 🔁 Adivinhe o Número:
let numeroSecreto = Math.floor(Math.random() * 10) + 1; // número de 1 a 10
let chute = 0;

while (chute !== numeroSecreto) {
    chute = Number(prompt("Tente adivinhar o número entre 1 e 10:"));
    if (chute !== numeroSecreto) {
        alert("Errou! Tente novamente. ❌");
    }
}
alert("Parabéns! Você acertou o número! ✅", numeroSecreto);