const process = require('process');
const readline = require('node:readline');

const validaCpf = require('./src/utils/validaCpf.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Insira o seu CPF (somente números): `, cpf => {  
  if (validaCpf(cpf)) {
    const cpfFormatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    console.log(`${cpfFormatado} é válido.`);
  } else {
    console.log('CPF invalido');
  }
  
  rl.close();
});
 
