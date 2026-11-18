function validar() {
    var nome     = document.getElementById("nome");
    var email    = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var usuario  = document.getElementById("usuario");
    var senha0   = document.getElementById("senha0");
    var senha1   = document.getElementById("senha1");
    var is_valid = 1;
    {
        if (!isValid(nome,     "nome_err",     "Por favor, digite um nome válido"))               is_valid = 0;
        if (!isValid(telefone, "telefone_err", "Por favor, digite um número de telefone válido")) is_valid = 0;
        if (!isValid(email,    "email_err",    "Por favor, digite um email válido"))              is_valid = 0;
        if (!isValid(usuario,  "usuario_err",  "Por favor, digite um nome de usuário válido"))    is_valid = 0;
        if (!isValid(senha0,   "senha0_err",   "Por favor, digite uma senha válida"))             is_valid = 0;
        if (!isValid(senha1,   "senha1_err",   "Por favor, digite a mesma senha de anteriormente") && senha1.value !== senha0.value) is_valid = 0;
    }
    if (is_valid) alert("Cadastrado com sucesso!");
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