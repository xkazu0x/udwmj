const time = new Date().getHours();

let greeting;

if (time < 10) {
    greeting = "Bom Dia!";
} else if (time < 17) {
    greeting = "Bom Tarde!";
} else {
    greeting = "Boa Noite!";
}

document.getElementById("greeting").innerHTML = greeting;