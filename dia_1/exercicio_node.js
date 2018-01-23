let notasEntrada = process.argv;
let notas = [];
let total = 0;
let media = 0;

let calcularMedia = (vetorNumeros) => {
    for(let nota of vetorNumeros){
        // total += nota;
        total = total + nota;
    }
    // total /= vetorNumeros.length;
    // media = total / vetorNumeros.length;
    return total / vetorNumeros.length;
}
for(let i = 2; i < notasEntrada.length; i++){
    notas.push(Number(notasEntrada[i]));
    // console.log(notasEntrada[i]);
}
// console.log(media);
// console.log(notasEntrada);

media = calcularMedia(notas);

if(media >= 6){
    console.log(`Parabéns, a sua media foi: ${media}`);
}else{
    console.log(`Sinto muito, a sua media foi: ${media}`);
}


