const digitosSaoIguais = require('./digitosSaoIguais.js');

function validaInput(cpf) {
    if (digitosSaoIguais(cpf) || cpf.length !== 11) {
        return false;
    }

    return true;
}

module.exports = validaInput;