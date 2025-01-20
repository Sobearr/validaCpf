const checaValidadeCpf = require('./checaValidadeCpf.js');
const validaInput = require('./validaInput.js');

function validaCpf(cpf) {
    if (validaInput(cpf)) {
        const cpfDigitos = cpf.split('').map(Number);
        const penultimoDigito = cpfDigitos[9];
        const ultimoDigito = cpfDigitos[10];    
    
        const pesoCondicao1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 0, 0];
        const pesoCondicao2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0];
    
        if (checaValidadeCpf(cpfDigitos, pesoCondicao1, penultimoDigito) &&
         checaValidadeCpf(cpfDigitos, pesoCondicao2, ultimoDigito)) return true;
    }

    return false;
}

// condicoes de falha
// - valida input
//      - digitos iguais
//      - nao tem 11 digitos
// - valida cpf
//      - falhou verificacao de condicoes

module.exports = validaCpf;