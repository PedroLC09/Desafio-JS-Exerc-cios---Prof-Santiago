let nota = Number(prompt("Digite a nota (0 a 100):"));
let NotaFinal;

switch (true) {

    case (nota >= 90):
        NotaFinal = "A";
        break;

    case (nota >= 80):
        NotaFinal = "B";
        break;

    case (nota >= 70):
        NotaFinal = "C";
        break;

    case (nota >= 60):
       NotaFinal = "D";
        break;

        default:
        NotaFinal = "F";
        break;
}

alert("Nota Final: " + NotaFinal);