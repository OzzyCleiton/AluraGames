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

document.addEventListener("load", function () {
    numeroDeJogoAlugado.querySelectorAll('dashboard__item__img--rented').length;
    jogosAlugados();
});





