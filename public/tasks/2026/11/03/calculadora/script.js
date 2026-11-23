let res = document.getElementById("res");

function getInput() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    return({x: a, y: b});
}

function setResult(result) {
    res.innerHTML = "Resultado: " + result;
}

function add() {
    let input = getInput();
    setResult(input.x + input.y);
}

function sub() {
    let input = getInput();
    setResult(input.x - input.y);
}

function mul() {
    let input = getInput();
    setResult(input.x*input.y);
}

function div() {
    let input = getInput();
    if (input.y === 0) {
        setResult("Não é possível dividir pelo número zero :(");
    } else {
        setResult(input.x/input.y);
    }
}