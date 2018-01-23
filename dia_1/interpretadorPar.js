module.exports.retornarPar = (numeros) => {
let numerosPares = [];

    for(let numero of numeros){
        if(numero % 2 == 0){
            numerosPares.push(numero)
        }
    }

    return numerosPares;
}
