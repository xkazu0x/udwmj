let lamp = document.getElementById("lamp")

function on() {
    lamp.src = "./images/lampada-ligada.jpg";
}

function off() {
    lamp.src = "./images/lampada-desligada.jpg";
}

function blink() {
    let freq = 0;
    for (let count = 0; count < 10; count += 1) {
        freq += 100;
        setTimeout("lamp.src = './images/lampada-ligada.jpg'", freq);
        freq += 100;
        setTimeout("lamp.src = './images/lampada-desligada.jpg'", freq);
    }
}