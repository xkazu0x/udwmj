let lightBulbImg    = document.getElementById("light-bulb-img");
let lightBulbButton = document.getElementById("light-bulb-button");
let lightBulbIsOn   = 0;

function toggleLightBulb() {
    lightBulbIsOn = !lightBulbIsOn;
    if (lightBulbIsOn) {
        lightBulbImg.src = "./images/lampada-acessa.jpg";
        lightBulbButton.textContent = "Desligar";
    } else {
        lightBulbImg.src = "./images/lampada-apagada.jpg";
        lightBulbButton.textContent = "Ligar";
    }
}