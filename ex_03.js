const input = require('prompt-sync');
const prompt = input();


const mediaFinal = 280; 
let notaProva = [];

let i;

for (i = 0; i < 3; i++) {
    notaProva.push(parseFloat(prompt("Nota da prova " + (i+1) + ": ")));
}

function sumaNota (let){
    let sumaProva = 0;
    for (i=0 ; i < 3 ; i++){
        sumaProva += let[i]; 
    }
    return sumaProva;
}

let mediaProva = sumaNota(notaProva);

if (mediaProva >= mediaFinal) {
    console.log("Parabens!, já possui nota suficiente");
} else {
    console.log("São necessario " + (mediaFinal - mediaProva)+ " pontos para ser aprovado");
}