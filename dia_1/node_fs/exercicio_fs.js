const fs = require('fs');
let cores = 'Branco, Green, amarelo';

// fs.readFile('nomes.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }else{
//     console.log(data.toString());
//     }
    
//   });

  fs.writeFile('cores.txt', cores, (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log('Seus dados foram salvos');
    }

  });
