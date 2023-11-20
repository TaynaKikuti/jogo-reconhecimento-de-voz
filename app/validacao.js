function verificaChute(chute) {
    const numero = +chute //transforma em número inteiro

    if(chuteInvalido(numero)) {
        if(chute.toUpperCase() === "GAME OVER") {
            encerraGame()
        } else {
            elementoChute.innerHTML += `<div>Valor inválido</div>`
            return
        }
    }

    if(numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido. O número precisa estar entre ${menorValor} e  ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você ACERTOU!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }

    if(numero >numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }

    if(numero < numeroSecreto) {
        elementoChute.innerHTML+= `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

function encerraGame() {
    document.body.innerHTML = `
    <h2>GAME OVER</h2>
    <h3>Jogo encerrado pelo usuário. O número secreto era ${numeroSecreto}</h3>
    <button class="btn-jogar" id="jogar-novamente">Jogar novamente</button>
    `
    document.body.style.backgroundColor ='#872341'
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    } //cria evento que, ao clicar no elemento com id "jogar-novamente", a página recarrega
})


