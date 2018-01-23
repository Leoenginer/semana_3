module.exports.retornarTratado = (argumentos) => {    
    let argumentosTradados = [];
    
    for(let i = 2; i < argumentos.length; i++){
        argumentosTradados.push(Number(argumentos[i]));
    }    
    return argumentosTradados;
}



