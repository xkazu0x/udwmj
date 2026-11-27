function VerificarHorario() {
    let nome = document.getElementById("nome").value;
    let tempo = document.getElementById("horario").value;
    let lampada = document.getElementById("imagem-lampada");
    let body = document.getElementById("body");

    let saudacao = tempo + "hs ";
    if (tempo < 12) {
        saudacao += "Bom Dia ";
        lampada.src = "./images/lampada-desligada.jpg";
        body.className = "fundoAmarelo";
    }
    else if (tempo < 18) {
        saudacao += "Boa Tarde ";
        lampada.src = "./images/lampada-desligada.jpg";
        body.className = "fundoLaranja";
    }
    else {
        saudacao += "Boa Noite ";
        lampada.src = "./images/lampada-ligada.jpg";
        body.className = "fundoCinza";
    }
    saudacao += nome;

    document.getElementById("saudacao").innerHTML = saudacao;
}