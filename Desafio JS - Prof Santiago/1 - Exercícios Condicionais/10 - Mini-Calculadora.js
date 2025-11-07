//Cria uma variável e guarda nela o elemento que tem o id indicado
let elementoInputUm = document.getElementById("inpt01")
let elementoInputDois = document.getElementById("inpt02")


// Cria uma função
function soma() {

    alert((Number(elementoInputUm.value) + Number(elementoInputDois.value)))


}

function subtração() {

    alert((Number(elementoInputUm.value) - Number(elementoInputDois.value)))

}

function multiplicação() {

    alert((Number(elementoInputUm.value) * Number(elementoInputDois.value)))

}

function divisão() {

    alert((Number(elementoInputUm.value) / Number(elementoInputDois.value)))

}