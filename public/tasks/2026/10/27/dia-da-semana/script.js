function MostrarDiaDaSemana() {
    let mensagem = document.getElementById("mensagem");
    let diaNumber = Number(document.getElementById("dia-da-semana").value);

    let diaString;
    switch (diaNumber) {
        default: {diaString = "Dia Incorreto :("} break;
        case 0: {diaString = "Domingo"} break; 
        case 1: {diaString = "Segunda-Feira"} break; 
        case 2: {diaString = "Terça-Feira"} break; 
        case 3: {diaString = "Quarta-Feira"} break; 
        case 4: {diaString = "Quinta-Feira"} break; 
        case 5: {diaString = "Sexta-Feira"} break; 
        case 6: {diaString = "Sabado"} break; 
    }

    mensagem.innerHTML = "Hoje é " + diaString;
}