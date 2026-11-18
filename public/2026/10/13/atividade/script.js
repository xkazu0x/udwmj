let text = document.getElementById("texto");
let button = document.getElementById("button-hide-show");
let should_hide = 0;

function changeText(msg) {
    text.innerHTML = msg;
}

function hideShowText() {
    should_hide = !should_hide;
    if (should_hide == 1) {
        text.style.display = "none";
        button.textContent = "Mostrar";
    } else {
        text.style.display = "block";
        button.textContent = "Esconder";
    }
}

function styleText() {
    text.style.fontSize = "32px";
    text.style.color = "red";
}

let a1 = 0;
let a2 = 0;

while (1) {
    let input = window.prompt("Digite a note da A1: ");
    if (isNaN(input)) {
        alert("Por favor coloque apenas números.");
    } else {
        a1 = Number(input);
        break;
    }
}

while (1) {
    let input = window.prompt("Digite a note da A2: ");
    if (isNaN(input)) {
        alert("Por favor coloque apenas números.");
    } else {
        a2 = Number(input);
        break;
    }
}

let avg = (a1+a2)/2;
if (avg >= 7) {
    alert("Aluno APROVADO! Nota: " + avg);
} else if (avg >= 5 && avg < 7) {
    alert("Aluno em Recuperação. Nota: " + avg);
} else {
    alert("Aluno REPROVADO... Nota: " + avg);
}