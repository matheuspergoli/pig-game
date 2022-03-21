'use strict';

// Selecionando elementos
const diceElement = document.querySelector('.dice')

const player0Element = document.querySelector('.player--0')
const player1Element = document.querySelector('.player--1')

const current0Element = document.querySelector('#current--0')
const current1Element = document.querySelector('#current--1')

const score0Element = document.querySelector('#score--0')
const score1Element = document.querySelector('#score--1')

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Condições iniciais
score0Element.textContent = 0
score1Element.textContent = 0
diceElement.classList.add('hidden')

const scores = [0, 0]
let currentScore = 0
let activePlayer = 0

// Funcionalidade roll do dado
btnRoll.addEventListener('click', () => {
    // 1. Gerar um roll aleatório 
    const dice = Math.trunc(Math.random() * (6 - 0) + 1)

    // 2. Mostrar o dado
    diceElement.classList.remove('hidden')
    diceElement.src = `dice-${dice}.png`

    // 3. Checar se o roll é 1
    if (dice !== 1) {
        // Adicionar o roll ao current score
        currentScore += dice
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore

    } else {
        // Trocar de player
        document.querySelector(`#current--${activePlayer}`).textContent = 0
        activePlayer = activePlayer === 0 ? 1 : 0
        currentScore = 0
        player0Element.classList.toggle('player--active')
        player1Element.classList.toggle('player--active')
    }
})