function validar() {
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    var is_valid = 1;
    {
        if (!isValid(email, "email_err", "Por favor, digite um email válido"))  is_valid = 0;
        if (!isValid(senha, "senha_err", "Por favor, digite uma senha válida")) is_valid = 0;
    }
    if (is_valid) alert("Login realizado com sucesso!");
}

function isValid(o, err, msg) {
    let result = 1;
    if (!o.checkValidity()) {
        o.setCustomValidity(msg);
        document.getElementById(err).innerHTML = o.validationMessage;
        o.style.background = "#FFC0CB";
        result = 0;
    }
    return(result);
}
