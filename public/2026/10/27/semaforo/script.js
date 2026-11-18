let semaphore = window.prompt("Digite a cor do semaforo (verde, amarelo ou vermelho): ");
let message;

switch (semaphore) {
    default:         {message = "Cor errada :(";} break;
    case "verde":    {message = "Pode passar!"} break;
    case "amarelo":  {message = "Atenção!";} break;
    case "vermelho": {message = "Pare!";} break;
}

document.getElementById("semaphore").innerHTML = message;
alert(message);