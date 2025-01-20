function checaValidadeCpf(cpf, peso, digito) {
    let soma = 0;
    const len = cpf.length;
    for (let i = 0; i < len; i++) {
        soma += cpf[i] * peso[i];
    }
    const resultado = (soma * 10) % 11;
    const valorParaComparacao = resultado > 9 ? 0 : resultado;
    if (valorParaComparacao === digito) return true;
    return false;
};

module.exports = checaValidadeCpf;
