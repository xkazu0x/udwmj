function mostrarHoraAtual() {
    let hora = document.getElementById("hora");
    let d = new Date();
    hora.innerHTML = "Hora Atual: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

// var a = ["world"];
// var value = a[0];
// a[1] = 3.14;

// var i = 2;
// a[i] = 3;
// a[i + 1] = "hello";
// a[a[i]] = a[0];