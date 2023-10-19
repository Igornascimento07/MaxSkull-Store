function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira um peso e altura válidos.");
        return;
    }

    var imc = peso / (altura * altura);
    var estadoCorporal = "";

    if (imc < 18.5) {
        estadoCorporal = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        estadoCorporal = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        estadoCorporal = "Sobrepeso";
    } else {
        estadoCorporal = "Obesidade";
    }

    document.getElementById("imc-valor").textContent = imc.toFixed(2);
    document.getElementById("estado-corporal").textContent = estadoCorporal;
}