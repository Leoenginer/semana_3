let rT = require('./retornaTratado.js');
let iP = require('./interpretadorPar.js')

let argumentos = process.argv;
console.log(argumentos);

let argumentosTratados = rT.retornarTratado(argumentos);
console.log(argumentosTratados);

let numerosPares = iP.retornarPar(argumentosTratados);
console.log(numerosPares);