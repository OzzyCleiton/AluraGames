let numeroDeJogoAlugado = 0;


function jogosAlugados() {
    console.log(`Atualmente tem ${numeroDeJogoAlugado} alugados!`);

}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeDoJogo = gameClicado.querySelector('.dashboard__item__name');

       
    if(imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
        numeroDeJogoAlugado--;
        alert(`O Jogo ${nomeDoJogo.textContent}, está disponivel para locação!`);

       

    }else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        numeroDeJogoAlugado++;
        
    }

    jogosAlugados();
}

// document.addEventListener('DOMContentLoded', function (){
    // numeroDeJogoAlugado.document.querySelectorAll('dashboard__item__img--rented').length;
    // jogosAlugados();
// });

document.addEventListener("load", function () {
    numeroDeJogoAlugado.querySelectorAll('dashboard__item__img--rented').length;
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