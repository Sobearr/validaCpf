function digitosSaoIguais(str) {
    const len = str.length;
    for (let i = 1; i < len; i++) {
        if (str[i] !== str[0])
            return false;
    }
    return true;
}

module.exports = digitosSaoIguais;
