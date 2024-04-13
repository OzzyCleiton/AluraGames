document.addEventListener('DOMContentLoded', function (){
    numeroDeJogoAlugado.document.querySelectorAll('dashboard__item__img--rented').length;
    jogosAlugados();
});

const palindromo = function (palavra) {
    let letrasEmbaralhadas = palavra.split("");
    let palavraInvertida = letrasEmbaralhadas.reverse();
    let novaPalavra = palavraInvertida.join("");

    if(palavra == novaPalavra) {
        console.log(`A palavra ${palavra} é um palindromo!`);
    }else {
        console.log(`A palavra  ${palavra} não é um palindromo!`);
    }
   
}

palindromo('anilina');


let frase = 'Cleiton';
 for (let i = 0; i < frase.length; i++) {
    let letras = frase[frase.length - 1]
    let palavra = letras
    console.log(palavra);
 }


 let arrNumber = [2, 12, 5, 16];
 console.log(arrNumber);
 console.log(arrNumber.sort((a,b ) => a-b));